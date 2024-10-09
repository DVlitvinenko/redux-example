import { useState } from "react";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";

export function Customers() {
  const { addCustomerAction, removeCustomerAction, fetchCustomersAction } =
    useActions();
  const customers = useTypedSelector((state) => state.customer.customers);

  const [name, setName] = useState("");
  const [id, setId] = useState<number | undefined>();

  const addCustomer = () => {
    addCustomerAction(name);
    setName("");
  };
  const removeCustomer = () => {
    if (id) {
      removeCustomerAction(id);
    }
    setId(undefined);
  };

  return (
    <div className="">
      <p>Список клиентов</p>
      {!customers.length && <div className="">Еще нет customers</div>}
      {!!customers.length &&
        customers.map(({ name, id }, i: number) => (
          <div className="" key={i}>
            id: {id}; имя: {name as string}
          </div>
        ))}
      <div className="">
        <div className="">
          <p>Имя нового пользователя</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => addCustomer()}>Добавить клиента</button>
          <button onClick={() => fetchCustomersAction()}>
            Загрузить клиентов
          </button>
        </div>
        <div className=""></div>

        <p>id клиента которого надо удалить</p>
        <input
          type="number"
          value={id || ""}
          onChange={(e) => setId(Number(e.target.value))}
        />
        <button onClick={() => removeCustomer()}>Удалить клиента</button>
      </div>
    </div>
  );
}
