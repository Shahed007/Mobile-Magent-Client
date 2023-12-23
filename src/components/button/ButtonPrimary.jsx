import PropTypes from "prop-types";

const ButtonPrimary = ({ children }) => {
  return (
    <button className="sm:py-3 p-2 sm:px-6 text-lg font-medium text-white bg-secondary rounded-md duration-200 hover:bg-black active:scale-95">
      {children}
    </button>
  );
};

ButtonPrimary.propTypes = {
  children: PropTypes.any,
};

export default ButtonPrimary;
