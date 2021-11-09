import PropTypes from "prop-types";
import Button from "./Button";

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const Numbers = ({ clickNumber }) => {
  return (
    <div className="numbers">
      {nums.map((num) => (
        <Button key={num} text={num.toString()} clickHandler={clickNumber} />
      ))}
    </div>
  );
};

Numbers.propTypes = {
  clickNumber: PropTypes.func.isRequired,
};

export default Numbers;
