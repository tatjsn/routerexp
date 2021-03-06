export const FETCH_MESSAGE = 'FETCH_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export function fetchMessage(pageId) {
  return (dispatch) => {
    setTimeout(() => dispatch(receiveMessage({ [pageId]: Date.now() })), 1000);
  }
}

export function receiveMessage(payload) {
  return {
    type: RECEIVE_MESSAGE,
    payload: payload
  }
}
