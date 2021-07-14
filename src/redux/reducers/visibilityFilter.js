import { SET_FILTER } from '../actionTypes';
import { VISIBILITY_FILTERS } from '../../constants';

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action) => {
  switch(action.type) {
    // This reducer sets its slice of store to the new filter it receives from the SET_FILTER action payload.
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;