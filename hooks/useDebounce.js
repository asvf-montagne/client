import { useCallback, useRef } from 'react'

/**
 * This hook can be used to delay the execution of a function with
 * the latest call.
 *
 *
 * @param state
 * @param {function} fn
 * @param {number} delay
 * @returns {function}
 */
export default function useDebounce(state, fn, delay = 0) {
  const ref = useRef({
    lastTimeoutId: undefined,
    args: {},
    state,
    promisePending: false,
    argsWaitingPromise: undefined,
  })

  ref.current.state = state

  return useCallback(
    ({ ...args }) => {
      async function execute(isCallWaitingRelease = false) {
        ref.current.promisePending = true

        let args

        if (isCallWaitingRelease) {
          args = ref.current.argsWaitingPromise
          ref.current.argsWaitingPromise = undefined
        } else {
          args = ref.current.args
          ref.current.args = undefined
        }

        await fn(ref.current.state, args)

        if (ref.current.argsWaitingPromise !== undefined) {
          await execute(true)
        }

        ref.current.promisePending = false
      }

      if (ref.current.promisePending === true) {
        ref.current.argsWaitingPromise = args
        return
      }

      ref.current.args = args
      if (ref.current.lastTimeoutId !== undefined) {
        clearTimeout(ref.current.lastTimeoutId)
      }

      ref.current.lastTimeoutId = setTimeout(execute, delay)
    },
    [delay],
  )
}
