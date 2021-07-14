import * as actions from '../actionTypes';

const initialState = {
  allIds: [],
  byIds: {}
};



export default function todosReducer(state = initialState, action) {
  switch(action.type) {
    // This reducer appends the id to its allIds fields and sets the todo within its byids field upon receiving the ADD_TODO action.
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
    // Toggles the completed field for the todo upon receiving the TOGGLE_TODO action
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