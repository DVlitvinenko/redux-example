import { Action, Customer, CustomerActions } from "../../types/types";

const defaultState = {
  customers: [] as Customer[],
};

let fetchedIds = [] as number[];

const setNextId = (() => {
  let id = 0;
  return () => id++;
})();

export const customerReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case CustomerActions.ADD_CUSTOMERS:
      const newCustomers = [
        ...(action.payload as Customer[])
          .filter((o) => {
            return !fetchedIds.includes(o.id);
          })
          .map((o) => {
            fetchedIds = [...fetchedIds, o.id];
            return { ...o, id: setNextId() };
          }),
      ];

      return {
        ...state,
        customers: [...state.customers, ...newCustomers],
      };
    case CustomerActions.ADD_CUSTOMER:
      const newCustomer = {
        name: action.payload,
        id: setNextId(),
      };

      return {
        ...state,
        customers: [...state.customers, newCustomer],
      };

    case CustomerActions.REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter((c) => c.id !== action.payload),
      };

    default:
      return state;
  }
};
