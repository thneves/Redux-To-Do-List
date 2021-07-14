
// returns the AllIds list from the todos store
export const getTodoList = store =>
  store && store.todos ? store.todos.allIds : [];

// finds the todo in the store given by id
export const getTodoById = (store, id) => 
  store && store.todos && store.todos.byIds
    ? { ...store.todos.byIds[id], id}
    : {};

    /**
     * example of a slighlty more complex selector
     * select from store combining information from multiple reducers
     */



// It takes all the ids from Allids, find each todo in byIds, and returns the final array of todoso
export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store,id));