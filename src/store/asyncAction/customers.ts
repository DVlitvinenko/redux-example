import { Dispatch } from "redux";
import { addCustomersAction } from "../actions/customerActions";

const fetchCustomers = () => {
  return (dispatch: Dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(addCustomersAction(json)));
  };
};

export { fetchCustomers };
