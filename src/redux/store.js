import { createStore } from 'redux';
import rootReducer from './reducers';

export default createStore(rootReducer);

// todos - a normalized reducer of todos. It contains a byIds map of all todos and allIds that contains the list of all ids.
// visibiityFilter - a simple string all, completed, or imcompleted.