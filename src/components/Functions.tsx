import { FC } from 'react';
import Button, { ButtonClickHandler } from './Button';

type Props = {
  onClear: ButtonClickHandler;
  onDelete: ButtonClickHandler;
};

const Functions: FC<Props> = ({ onClear, onDelete }) => (
  <div className="functions">
    <Button text="C" clickHandler={onClear} />
    <Button text="&larr;" clickHandler={onDelete} />
  </div>
);

export default Functions;
