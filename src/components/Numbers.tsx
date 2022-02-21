import { FC } from 'react';
import Button, { ButtonClickHandler } from './Button';

type Props = {
  clickNumber: ButtonClickHandler;
};

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const Numbers: FC<Props> = ({ clickNumber }) => {
  return (
    <div className="numbers">
      {nums.map((num) => (
        <Button key={num} text={num.toString()} clickHandler={clickNumber} />
      ))}
    </div>
  );
};

export default Numbers;
