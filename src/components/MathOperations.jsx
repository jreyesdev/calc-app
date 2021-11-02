import PropTypes from "prop-types";
import Button from "./Button";

const MathOperations = ({ clickOperation, clickEqual }) => (
  <section className="math-operations">
    <Button text="+" clickHandler={clickOperation} />
    <Button text="-" clickHandler={clickOperation} />
    <Button text="*" clickHandler={clickOperation} />
    <Button text="/" clickHandler={clickOperation} />
    <Button text="=" clickHandler={clickEqual} />
  </section>
);

MathOperations.propTypes = {
  clickEqual: PropTypes.func.isRequired,
  clickOperation: PropTypes.func.isRequired,
};

export default MathOperations;
