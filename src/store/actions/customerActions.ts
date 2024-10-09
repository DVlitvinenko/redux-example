import { Customer, CustomerActions } from "../../types/types";

const addCustomerAction = (payload: string) => {
  return { type: CustomerActions.ADD_CUSTOMER, payload };
};

const removeCustomerAction = (payload: number) => {
  return { type: CustomerActions.REMOVE_CUSTOMER, payload };
};

const addCustomersAction = (payload: Customer[]) => {
  return { type: CustomerActions.ADD_CUSTOMERS, payload };
};

const fetchCustomersAction = () => {
  return { type: CustomerActions.FETCH_CUSTOMERS };
};

export {
  removeCustomerAction,
  addCustomerAction,
  addCustomersAction,
  fetchCustomersAction,
};
