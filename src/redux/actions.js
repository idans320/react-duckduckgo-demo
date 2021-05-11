import { SET_RESULTS, SET_PAGE, SET_HIGHLIGHT } from "./actionTypes";

export const setResults = content => ({
  type: SET_RESULTS,
  payload: {
    results: content,
    pageNumber : 0
  }
});

export const setPage = content => ({
    type: SET_PAGE,
    payload: {
      pageNumber : content
    }
});

export const setHighlight = content => ({
    type: SET_HIGHLIGHT,
    payload: {
      keyword : content
    }
});