import PropTypes from "prop-types";
const Container = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 xl:px-3 h-full">{children}</div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
