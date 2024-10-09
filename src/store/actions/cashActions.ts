import { CashActions } from "../../types/types";

const addCashActions = (payload: number) => {
  return { type: CashActions.ADD_CASH, payload };
};

const getCashActions = (payload: number) => {
  return { type: CashActions.GET_CASH, payload };
};

export { addCashActions, getCashActions };
