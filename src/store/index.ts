import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "@redux-saga/core";
import { rootWatcher } from "./asyncAction/saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);
