import axios from 'axios'
import postsService from './posts'
import tagsService from './tags'
import partnersService from './partners'
import contactFormSubmissionsService from './contact-form-submissions'
import usersService from './users'

const baseURL =
  process.env.API_ENDPOINT ||
  process.env.NEXT_PUBLIC_API_ENDPOINT ||
  'https://dashboard.asvf-montagne.fr'

function services({ token } = {}) {
  const client = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  if (token) {
    client.interceptors.request.use((res) => {
      res.headers['Authorization'] = `Bearer ${token}`
      return res
    })
  }

  return {
    users: usersService(client),
    posts: postsService(client),
    tags: tagsService(client),
    partners: partnersService(client),
    contactFormSubmissions: contactFormSubmissionsService(client),
  }
}

export default services
