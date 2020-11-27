import pages from '@services/pages'
import requestRoleSubmissions from '@services/requestRoleSubmissions'
import uploader from '@services/uploader'
import axios from 'axios'
import auth from './auth'
import contactFormSubmissions from './contactFormSubmissions'
import partners from './partners'
import posts from './posts'
import tags from './tags'
import users from './users'

const baseURL =
  process.env.API_ENDPOINT ||
  process.env.NEXT_PUBLIC_API_ENDPOINT ||
  'https://backend.asvf-montagne.fr'

function services({ token, isServer } = { token: undefined, isServer: false }) {
  const client = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  client.metadata = { token, isServer }

  if (token) {
    client.interceptors.request.use((res) => {
      res.headers['Authorization'] = `Bearer ${token}`
      return res
    })
  }

  return {
    users: users(client),
    auth: auth(client),
    posts: posts(client),
    tags: tags(client),
    uploader: uploader(client),
    partners: partners(client),
    contactFormSubmissions: contactFormSubmissions(client),
    requestRoleSubmissions: requestRoleSubmissions(client),
    pages: pages(client),
  }
}

export default services
