import { useCallback, useRef } from 'react'

/**
 * This hook can be used to delay the execution of a function with
 * the latest call.
 *
 *
 * @param {function} fn
 * @param {number} delay
 * @returns {function}
 */
export default function useDebounce(state, fn, delay = 0) {
  const ref = useRef({
    lastTimeoutId: undefined,
    args: {},
    promisePending: false,
    argsWaitingPromise: undefined,
  })

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

    await fn(args)

    if (ref.current.argsWaitingPromise !== undefined) {
      await execute(true)
    }

    ref.current.promisePending = false
  }

  return useCallback(
    ({ ...args }) => {
      if (ref.current.promisePending) {
        ref.current.argsWaitingPromise = args
        return
      }

      ref.current.args = args
      if (ref.current.lastTimeoutId !== undefined) {
        clearTimeout(ref.current.lastTimeoutId)
      }

      ref.current.lastTimeoutId = setTimeout(execute, delay)
    },
    [state, delay],
  )
}
