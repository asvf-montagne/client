import TimeAgo from 'javascript-time-ago'
import fr from 'javascript-time-ago/locale/fr'
import stripHtml from "string-strip-html";

TimeAgo.addLocale(fr)

const timeAgo = new TimeAgo('fr-FR')

const postsService = client => ({
  async list({ limit = 5 }) {
    const res = await client.get(`/posts/view/search`, {
        params: {
          'limit': limit,
          'start': 0
        }
      }
    );
    return res.data
  },

  async search(params) {
    const res = await client.get(`/posts/view/search`, {
        params: {
          'limit': 15,
          ...params
        }
      }
    );
    return res.data
  },

  async find({ id }) {
    const res = await client.get(`/posts`, {
        params: {
          id,
        }
      }
    );
    return res.data
  },

  async suggested({ date, limit = 2 }) {
    const res = await client.get(`/posts/view/search`, {
        params: {
          'limit': limit,
          'publishedBefore': date,
        }
      }
    );
    return res.data
  }
})

const DEFAULT_IMAGE = 'https://www.ilac.com/wp-content/uploads/2019/05/dark-placeholder.png'

export const posts = {
  defaultImage: DEFAULT_IMAGE,

  getFirstTag(post) {
    if (post.tags.length === 0) {
      return 'unknown'
    }

    return post.tags[0].tag
  },

  getImage(post) {
    if (post.image === undefined) {
      return DEFAULT_IMAGE
    }

    return post.image.url
  },

  getImagesForSlider(post) {
    if (post.images.length === 0) {
      return []
    }

    const imageSize = ['large', 'medium', 'small', 'thumbnail']
    return post.images.map(image => {
      imageSize.forEach(size => {
        if (image.url !== undefined) return
        if (image.formats[size] !== undefined) {
          image.url = image.formats.large.url
        }
      })

      if (image.url === undefined) image.url = DEFAULT_IMAGE

      return image
    })
  },

  getPublishedTimeAgo(post) {
    return timeAgo.format(new Date(post['published_at']), 'round')
  },

  getRawDescription(post) {
    const content = JSON.parse(post.content)
    return content.blocks.reduce((prev, curr) => {
      const prevWithSpace = () => prev.length > 0 ? prev + ' ' : prev
      switch (curr.type) {
        case 'paragraph':
          return prevWithSpace() + stripHtml(curr.data.text).result
        case 'list':
          return prevWithSpace() + stripHtml(curr.data.items.reduce((p, i) => p + ', ' + i, '')).result
        case 'quote':
          return prevWithSpace() + stripHtml(curr.data.text + '|' + curr.data.caption).result
        default:
          return prev
      }
    }, '')
  },

  getTitledAuthor(post) {
    const firstName = post['created_by']['firstname']
    if (firstName === '') {
      return post['created_by']['username'] || 'unknown'
    }

    return firstName[0].toUpperCase() + firstName.slice(1);
  }


}

export default postsService
