import { useState } from "react";
import "./App.css";
import { Customers } from "./Customers";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";

function App() {
  const { addCashActions, getCashActions } = useActions();
  const cash = useTypedSelector((state) => state.cash.account);
  const [number, setNumber] = useState<number>(0);

  const addCash = () => {
    addCashActions(number);
    setNumber(0);
  };

  const getCash = () => {
    getCashActions(number);
    setNumber(0);
  };

  return (
    <>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <button onClick={addCash}>Добавить деньги</button>
        <button onClick={getCash}>Вычесть деньги</button>
      </div>
      <div>
        <p>Текущий баланс: {cash}</p>
      </div>
      <Customers />
    </>
  );
}

export default App;
