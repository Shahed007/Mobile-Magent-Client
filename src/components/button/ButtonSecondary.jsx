import PropTypes from "prop-types";

const ButtonSecondary = ({ children }) => {
  return (
    <button className="sm:py-3 py-2 px-3 sm:px-6 hover:shadow-lg text-base   sm:text-lg font-medium text-secondary shadow-sm rounded-sm border-2 active:scale-95">
      {children}
    </button>
  );
};

ButtonSecondary.propTypes = {
  children: PropTypes.node,
};

export default ButtonSecondary;
