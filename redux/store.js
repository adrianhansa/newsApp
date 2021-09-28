import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { getNewsReducer } from "./reducers/newsReducers";

const rootReducer = combineReducers({
  newsList: getNewsReducer,
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, middleware);

export default store;
