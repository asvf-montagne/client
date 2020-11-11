import services from '../services'
import TokenHelper from '../helpers/token'

export default function useServices() {
  return services({
    token: TokenHelper.getToken(),
    isServer: false,
  })
}
