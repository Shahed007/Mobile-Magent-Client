import PropTypes from "prop-types";

const ButtonSecondary = ({ children }) => {
  return (
    <button className="py-3 px-6 hover:shadow-lg   text-lg font-medium text-secondary shadow-sm rounded-sm border-2 active:scale-95">
      {children}
    </button>
  );
};

ButtonSecondary.propTypes = {
  children: PropTypes.node,
};

export default ButtonSecondary;
