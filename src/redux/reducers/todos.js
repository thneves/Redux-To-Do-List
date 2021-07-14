import * as actions from '../actionTypes';

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case actions.ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      }
    };
    case actions.TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      }
    };
    default:
      return state;
  }
}