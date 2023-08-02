import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import catsSelectors from "./cat/reducers";

const configureStore = (initialState = {}) => {
  const reducers = combineReducers({
    cats: catsSelectors
  });

  const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware()));

  return { store };
};

export default configureStore;
