const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

// reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }

  return state;
};

// store
// a store needs to be initialized with a reducer because a reducer, even if we combine multiple ones, they will be merged into one
// - reducer will be the only one to update the store because it is so closely connected to the state.

const store = createStore(rootReducer);
console.log("store:: ", store.getState());

// subscription
store.subscribe(() => {
  console.log("[Subscription", store.getState());
});

// dispatching actions
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "INC_COUNTER" });

store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log("store.getState:: ", store.getState());
