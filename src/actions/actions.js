import api from "./api";
import * as types from "./types";

export function getUpcoming() {
  return async dispatch => {
    dispatch({
      type: types.GET_UPCOMING,
      payload: await api.getApi("/movie/upcoming?")
    });
  };
}

export function incCount() {
  return async dispatch => {
    dispatch({
      type: types.INC_COUNT,
      payload: 1
    });
  };
}

export function decCount() {
  return async dispatch => {
    dispatch({
      type: types.DEC_COUNT,
      payload: 1
    });
  };
}