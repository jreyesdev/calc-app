import PropTypes from "prop-types";
import Button from "./Button";

const Functions = ({ onClear, onDelete }) => (
  <div className="functions">
    <Button text="C" clickHandler={onClear} />
    <Button text="&larr;" clickHandler={onDelete} />
  </div>
);

Functions.propTypes = {
  onClear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Functions;
