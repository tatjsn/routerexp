export const FETCH_MESSAGE = 'FETCH_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export function fetchMessage(page) {
  return (dispatch) => {
    setTimeout(() => dispatch(receiveMessage({ msg: Date.now() })), 1000);
  }
}

export function receiveMessage(json) {
  return {
    type: RECEIVE_MESSAGE,
    message: json.msg
  }
}
