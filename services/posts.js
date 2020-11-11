import TimeAgo from 'javascript-time-ago'
import fr from 'javascript-time-ago/locale/fr'
import imageNotFound from '@assets/images/image_not_found.png'

TimeAgo.addLocale(fr)

const timeAgo = new TimeAgo('fr-FR')

const posts = (client) => ({
  api: {
    async list({ limit = 5 }) {
      const res = await client.get(`/posts/view/search`, {
        params: {
          limit: limit,
          start: 0,
        },
      })
      return res.data
    },

    async search(params) {
      const res = await client.get(`/posts/view/search`, {
        params: {
          limit: 15,
          ...params,
        },
      })
      return res.data
    },

    async find({ id }) {
      const res = await client.get(`/posts/view/post`, {
        params: {
          id,
        },
      })
      return res.data
    },

    async suggested({ date, limit = 2 }) {
      const res = await client.get(`/posts/view/search`, {
        params: {
          limit: limit,
          publishedBefore: date,
        },
      })
      return res.data
    },
  },

  view: {
    getFirstTag(post) {
      if (post.tags.length === 0) {
        return 'unknown'
      }

      return post.tags[0]
    },

    getPreviewImage(post) {
      if (post.image === undefined) {
        return imageNotFound
      }

      return post.image.url
    },

    getFirstImage(post) {
      if (post.images.length === 0) {
        return { url: imageNotFound, name: 'image not found' }
      }

      return post.images[0]
    },

    getPublishedTimeAgo(post) {
      return timeAgo.format(new Date(post['published_at']), 'round')
    },

    getTitledAuthor(post) {
      const firstName = post['author']['firstname']
      if (firstName === '') {
        return post['author']['username'] || 'unknown'
      }

      return firstName[0].toUpperCase() + firstName.slice(1)
    },
  },
})

export default posts
