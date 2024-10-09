import { Action, CashActions } from "../../types/types";

const defaultState = { account: 0 };

export const cashReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case CashActions.ADD_CASH:
      return { ...state, account: state.account + Number(action.payload) };

    case CashActions.GET_CASH:
      return { ...state, account: state.account - Number(action.payload) };

    default:
      return state;
  }
};
