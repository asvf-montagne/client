import TimeAgo from 'javascript-time-ago'
import fr from 'javascript-time-ago/locale/fr'
import stripHtml from "string-strip-html";

TimeAgo.addLocale(fr)

const timeAgo = new TimeAgo('fr-FR')

const postsService = client => ({
  async list({ limit = 5, offset = 0 }) {
    const res = await client.get(`/posts`, {
        params: {
          '_limit': limit,
          '_sort': 'published_at:desc',
          '_start': offset
        }
      }
    );
    return res.data
  },
})

const DEFAULT_IMAGE = 'https://www.ilac.com/wp-content/uploads/2019/05/dark-placeholder.png'

export const posts = {
  getFirstTag(post) {
    if (post.tags.length === 0) {
      return 'unknown'
    }

    return post.tags[0].tag
  },

  getImageMediumURL(post) {
    if (post.images.length === 0) {
      return DEFAULT_IMAGE
    }

    const img = post.images[0].formats.medium

    return img.url
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
