function createStore(reducer, initialState = {}) {
  let currentReducer = reducer;
  let currentState = initialState;

  return {
    getState() {
      return currentState;
    },
    dispatch(action) {
      currentState = currentReducer(currentState, action);
      return action;
    }
  };
}

export default createStore;
