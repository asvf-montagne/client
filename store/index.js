import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import reducer from './reducers/session';

const config = {
  debug: true
}

function makeStore(context) {
  return createStore(reducer);
}

export const wrapper = createWrapper(makeStore, config);