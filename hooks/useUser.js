import services from '../services'
import useSWR from 'swr'
import TokenHelper from '../helpers/token'

/**
 * Get the authenticated user (if not undefined)
 *
 * @returns {{user: User|undefined, setUser: function}}
 */
export default function useUser() {
  const { data: user, mutate: setUser } = useSWR(
    () => ['useUser', TokenHelper.getToken()],
    (namespace, token) => services({ token, isServer: false }).users.api.me(),
  )

  return { user, setUser }
}
