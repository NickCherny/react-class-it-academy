function createStore(reducer, initialState = {}) {
  let currentReducer = reducer;
  let currentState = initialState;
  let listeners = [];

  return {
    getState() {
      return currentState;
    },
    dispatch(action) {
      currentState = currentReducer(currentState, action);
      for (let listener of listeners) {
        listener();
      }

      return action;
    },
    subscribe(subscriber) {
      listeners.push(subscriber);
    }
  };
}

export default createStore;
