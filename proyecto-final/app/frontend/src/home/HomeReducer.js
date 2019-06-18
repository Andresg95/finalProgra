import { SET_POSTERS } from './HomeActions';

export const defaultState = {
  posters: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_POSTERS:
      return { posters: action.posters };
    default:
      return state;
  }
};
