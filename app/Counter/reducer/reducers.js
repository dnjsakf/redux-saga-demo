import { INCREMENT, INCREMENT_IF_ODD, INCREMENT_ASYNC, DECREMENT } from './actions';

const initialize = {
  value: 0
}

export default function counterReducer(state = initialize, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      }
    case INCREMENT_IF_ODD:
      return {
        ...state,
        value: (state.value % 2 !== 0) ? state.value + 1 : state.value
      }
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      }
    case INCREMENT_ASYNC:
    default:
      return state
  }
}
