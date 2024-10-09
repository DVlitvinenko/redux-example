import { all } from "redux-saga/effects";
import { fetchCustomersWatcher } from "./customers";

function* rootWatcher() {
  yield all([fetchCustomersWatcher()]);
}
export { rootWatcher };
