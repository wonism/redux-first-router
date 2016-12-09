export const INIT = '@@address-bar/INIT'; //used internally by middleware and then action is re-written
export const NOT_FOUND = '@@address-bar/NOT_FOUND';


/** EXPORTED INIT ACTION CREATORS: 
 *  for use when ready key is not provided and 
 *  manual control of initialization is desired
*/

export function init(pathname) {
  return {
    type: INIT,
    payload: {
      pathname,
    }
  };
}

export function initThunk() {
  return (dispatch, getState) => {
    let {pathname} = getState().location;
    return dispatch(init(pathname));
  }
}
