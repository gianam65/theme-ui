import "./login-layout.scss";
import PropTypes from "prop-types";

const LoginLayout = ({ children }) => {
  return <div className="login__layout-wrapper">{children}</div>;
};

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default LoginLayout;
