import * as types from "../actions/types";

const initialState = {
  upcoming: [],
  count: 0
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_UPCOMING}`:
      return {
        ...state,
        upcoming: payload.data.results
      };
    case `${types.INC_COUNT}`:
      return {
        ...state,
        count: state.count + payload
      };
    case `${types.DEC_COUNT}`:
      return {
        ...state,
        count: state.count - payload
      };
    default:
      return state;
  }
}
