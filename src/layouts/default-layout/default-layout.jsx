import "./default-layout.scss";
import PropTypes from "prop-types";

const DefaultLayout = ({ children }) => {
  return (
    <div className="main__content">
      <div className="main__content-children">{children}</div>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
