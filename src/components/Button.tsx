import { FC } from 'react';

export type ButtonClickHandler = (t: string) => void;

type Props = {
  clickHandler: ButtonClickHandler;
  type?: string;
  text: string;
};

const Button: FC<Props> = ({ type, text, clickHandler }) => (
  <button className={type} onClick={() => clickHandler(text)}>
    {text}
  </button>
);

export default Button;
