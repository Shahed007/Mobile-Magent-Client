import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Logo = ({ className }) => {
  return (
    <Link
      to="/"
      className={`font-semibold md:text-3xl  text-[26px] ${className}`}
      style={{ letterSpacing: "-4px" }}
    >
      MobileMagnet
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
