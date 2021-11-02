import PropTypes from "prop-types";

const Result = ({ value }) => (
  <div className="result">{value !== "" ? value : "0"}</div>
);

Result.propTypes = {
  value: PropTypes.string.isRequired,
};

Result.defaultProps = {
  value: "0",
};

export default Result;
