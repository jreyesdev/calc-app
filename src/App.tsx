import { FC, useState } from 'react';

import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Numbers from './components/Numbers';
import Result from './components/Result';

import './App.css';

const App: FC = () => {
  const [stack, setStack] = useState('');
  // Asigna resultado
  const clickHandler = (e: string) => {
    if (stack === '' && e === '0') return false;
    setStack(stack + e);
  };

  // Realiza operacion
  const handlerEqual = (e: string) => {
    // eslint-disable-next-line no-useless-escape
    const re = new RegExp(/[\+\-\*\/]/, 'g');
    const op = stack.search(re),
      nums = stack.split(stack[op]),
      [num1, num2] = nums;
    let res = null;
    console.log(op);
    console.log(num1);
    console.log(num2);
    switch (stack[op]) {
      case '+':
        res = Number(num1) + Number(num2);
        break;
      case '-':
        res = Number(num1) - Number(num2);
        break;
      case '*':
        res = Number(num1) * Number(num2);
        break;
      case '/':
        res = num2 === '0' ? 'Error' : Number(num1) / Number(num2);
        break;
      default:
        res = 'Error';
        break;
    }
    setStack(res.toString());
  };

  // Asigna operacion
  const handlerOperation = (op: string) => {
    // eslint-disable-next-line no-useless-escape
    const index = stack.search(/[\+\-\*\/]/g),
      ops = ['+', '-', '*', '/'];
    let newOp = '';
    if (index > 0) {
      // Ya tiene operacion
      // Sale si el ultimo caracter no es operacion
      if (!ops.includes(stack[stack.length - 1])) return false;
      // Cambia operacion
      newOp = stack.slice(0, stack.length - 1) + op;
    } else {
      // No tiene operacion, la agrega
      newOp = stack + op;
    }
    setStack(newOp);
  };

  // Limpia pantalla
  const handlerClear = (e: string) => setStack('');

  // Borra numero u operacion
  const handlerDelete = (e: string) =>
    setStack(stack.slice(0, stack.length - 1));

  return (
    <main className="react-calculator">
      <Result value={stack} />
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
