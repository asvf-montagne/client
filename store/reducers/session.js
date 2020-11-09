import { HYDRATE } from 'next-redux-wrapper';
import { SET_TOKEN, CLEAR_TOKEN, SET_USER, CLEAR_USER } from '../constants/session';

const initialState = {
  token: null,
  user: undefined,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      const nextState = {
        ...state,
        ...action.payload,
      }
      if (state.token) {
        nextState.token = state.token
      }
      if (state.user) {
        nextState.user = state.user
      }
      return nextState
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case CLEAR_TOKEN:
      return {
        ...state,
        token: null
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};