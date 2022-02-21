import { FC } from 'react';
import Button, { ButtonClickHandler } from './Button';

type Props = {
  clickOperation: ButtonClickHandler;
  clickEqual: ButtonClickHandler;
};

const MathOperations: FC<Props> = ({ clickOperation, clickEqual }) => (
  <section className="math-operations">
    <Button text="+" clickHandler={clickOperation} />
    <Button text="-" clickHandler={clickOperation} />
    <Button text="*" clickHandler={clickOperation} />
    <Button text="/" clickHandler={clickOperation} />
    <Button text="=" clickHandler={clickEqual} />
  </section>
);

export default MathOperations;
