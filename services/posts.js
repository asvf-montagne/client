import imageNotFound from '@assets/images/image_not_found.png'
import ValidationHelper from '@helpers/validation'
import TimeAgo from 'javascript-time-ago'
import fr from 'javascript-time-ago/locale/fr'
import v from 'validator'

TimeAgo.addLocale(fr)

const timeAgo = new TimeAgo('fr-FR')

const posts = (client) => ({
  api: {
    async createOrUpdate({
      title,
      content,
      author,
      tags,
      event_date,
      id,
      publish,
    }) {
      const maybeEventDate =
        event_date && event_date !== ''
          ? { event_date: event_date.toISOString() }
          : { event_date: null }
      const publishedAtDate =
        publish !== undefined
          ? { published_at: publish ? new Date().toISOString() : null }
          : {}

      const data = {
        title,
        content,
        author,
        tags,
        type: 1, // type Story
        ...publishedAtDate,
        ...maybeEventDate,
      }

      try {
        if (id !== undefined) {
          console.log('updating story id', id)
          return await client.put(`/posts/${id}`, data)
        } else {
          data.published_at = null
          console.log('creating story with ', data)
          return await client.post(`/posts`, data)
        }
      } catch (error) {
        return error.response
      }
    },

    async list({ limit = 5 }) {
      const res = await client.get(`/posts/view/search`, {
        params: {
          limit: limit,
          start: 0,
          published: true,
        },
      })
      return res.data
    },

    async ids({ limit = 25 }) {
      const res = await client.get(`/posts/view/ids`, { params: { limit } })
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

    async find({ id, published }) {
      const res = await client.get(`/posts/view/post`, {
        params: {
          id,
          published,
        },
      })
      return res.data
    },

    async suggested({ date, limit = 2 }) {
      const res = await client.get(`/posts/view/search`, {
        params: {
          limit: limit,
          published: true,
          publishedBefore: date,
        },
      })
      return res.data
    },
  },

  validations: {
    create(o) {
      const errors = {}

      if (o.title === undefined || o.title.length === 0)
        errors.title = ValidationHelper.messages.required
      else if (v.isEmpty(o.title, { ['ignore_whitespace']: true }))
        errors.title = ValidationHelper.messages.notBlank

      if (o.content === undefined)
        errors.content = ValidationHelper.messages.required

      return errors
    },

    prepareCreate(o) {
      o.content = JSON.stringify(o.content)
      o.tags = [o.tags] // todo: we are handling only one tag for now
      return o
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

    getTimeAgo(post) {
      return timeAgo.format(
        new Date(post['published_at'] || post['created_at']),
        'round',
      )
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
