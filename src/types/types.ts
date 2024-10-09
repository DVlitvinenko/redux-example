import { rootReducer } from "../store/reducers/rootReducer";

interface Action {
  type: string;
  payload: number | string | object[] | object;
}

interface Customer {
  id: number;
  name: string;
}

enum CustomerActions {
  ADD_CUSTOMER = "ADD_CUSTOMER",
  REMOVE_CUSTOMER = "REMOVE_CUSTOMER",
  ADD_CUSTOMERS = "ADD_CUSTOMERS",
  FETCH_CUSTOMERS = "FETCH_CUSTOMERS",
}
enum CashActions {
  GET_CASH = "GET_CASH",
  ADD_CASH = "ADD_CASH",
}

type RootState = ReturnType<typeof rootReducer>;

export { CashActions, CustomerActions };
export type { Action, Customer, RootState };
