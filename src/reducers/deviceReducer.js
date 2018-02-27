
export default function deviceReducer(state = {}) {
  let isMobile = state.isMobile === 'false' ? false : true;

  //return Object.assign({}, state, { isMobile : isMobile });
  return Object.assign({}, state, { isMobile });
}
