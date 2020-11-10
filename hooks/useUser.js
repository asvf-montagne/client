import services from '../services'
import { Auth } from '../services/auth'
import useSWR from 'swr'
import Cookies from 'js-cookie'

/**
 * Get the authenticated user (if not undefined)
 *
 * @returns {{data: User|undefined, mutate: function}}
 */
export default function useUser() {
  const { data: user, mutate } = useSWR(
    () => ['useUser', Cookies.get(Auth.jwtTokenKey)],
    (namespace, token) => services({ token }).auth.getUser(false),
  )

  return { user, mutate }
}
