import { CustomerActions } from "../../../types/types";
import { addCustomersAction } from "../../actions/customerActions";
import { call, put, takeEvery } from "redux-saga/effects";

const fetchCustomersFromApi = () => {
  return fetch("https://jsonplaceholder.typicode.com/users");
};

function* fetchCustomersWorker() {
  const data = yield call(fetchCustomersFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(addCustomersAction(json));
}

function* fetchCustomersWatcher() {
  yield takeEvery(CustomerActions.FETCH_CUSTOMERS, fetchCustomersWorker);
}

export { fetchCustomersWatcher };
