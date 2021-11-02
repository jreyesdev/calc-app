import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";

import "./App.css";

const App = () => {
  const clickHandler = (e) => {
    console.log(e);
  };
  const handlerEqual = (e) => {
    console.log(e);
  };
  const handlerOperation = (e) => {};
  const handlerClear = (e) => {};
  const handlerDelete = (e) => {};
  return (
    <main className="react-calculator">
      <Result value={""} />
      <Numbers clickNumber={clickHandler} />
      <Functions onClear={handlerClear} onDelete={handlerDelete} />
      <MathOperations
        clickEqual={handlerEqual}
        clickOperation={handlerOperation}
      />
    </main>
  );
};

export default App;
