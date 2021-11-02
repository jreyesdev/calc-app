import PropTypes from "prop-types";
import Button from "./Button";

const Numbers = ({ clickNumber }) => (
  <div className="numbers">
    <Button text="1" clickHandler={clickNumber} />
    <Button text="2" clickHandler={clickNumber} />
    <Button text="3" clickHandler={clickNumber} />
    <Button text="4" clickHandler={clickNumber} />
    <Button text="5" clickHandler={clickNumber} />
    <Button text="6" clickHandler={clickNumber} />
    <Button text="7" clickHandler={clickNumber} />
    <Button text="8" clickHandler={clickNumber} />
    <Button text="9" clickHandler={clickNumber} />
    <Button text="0" clickHandler={clickNumber} />
  </div>
);

Numbers.propTypes = {
  clickNumber: PropTypes.func.isRequired,
};

export default Numbers;
