export const filesReducerNamespace = 'REDUCERS.FILES'
export const filesReducerActions = {
  ADD: 'ADD', // {data: [FILE]}
  MODIFY: 'MODIFY', // {index: number, data: FILE}
  REMOVE: 'REMOVE', // {index: number}
}

/** @typedef {[{file: File, preview: string, id: number, caption: string}]} FileInfo */

/**
 *
 * @type {{files: FileInfo}}
 */
export const filesReducerDefaultState = {
  files: [],
}

export function filesReducer(state, action) {
  switch (action.type) {
    case filesReducerActions.ADD:
      return { files: [...state.files, ...action.data] }
    case filesReducerActions.REMOVE:
      return {
        files: [...state.files.filter((_, index) => index !== action.data)],
      }
    case filesReducerActions.MODIFY:
      state.files[action.index] = action.data
      return { files: [...state.files] }
    default:
      throw new Error(
        `${filesReducerNamespace}: unrecognized action ${action.type}`,
      )
  }
}

export function filesReducerCreateAction(action) {
  return { ...action, namespace: filesReducerNamespace }
}
