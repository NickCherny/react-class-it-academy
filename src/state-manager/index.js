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

const reducer = (state, action) => {
  switch (action.type) {
    case 'USER_REQUEST':
      return {
        ...state,
        isLoading: true
      };
    case 'USER_ERROR':
      return {
        ...state,
        data: null,
        isLoading: false,
        error: action.payload
      };
    case 'USER_RECIVE':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
  }
};

const store = createStore(reducer, { isLoading: false });

function log() {
  console.log(store.getState());
}

console.log(store.getState());

store.subscribe(log);


store.dispatch({ type: 'USER_REQUEST' });

setTimeout(() => {
  store.dispatch({ type: 'USER_RECIVE', payload: { username: 'nick', role: 'admin', password: '123' } });
}, 500);

setTimeout(() => {
  store.dispatch({ type: 'USER_REQUEST' });
}, 1200);

setTimeout(() => {
  store.dispatch({ type: 'USER_ERROR', payload: { code: 404, message: 'Request failed' } });
}, 2000);
