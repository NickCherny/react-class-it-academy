function createStore(reducer, initialState = {}) {
  let currentReducer = reducer;
  let currentState = initialState;

  return {
    getState() {
      return currentState;
    },
  };
}

export default createStore;
