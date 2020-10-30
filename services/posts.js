import TimeAgo from 'javascript-time-ago'
import fr from 'javascript-time-ago/locale/fr'

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

export const postsUtil = {
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
  }


}

export default postsService
