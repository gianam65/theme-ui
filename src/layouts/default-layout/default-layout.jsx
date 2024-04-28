import "./default-layout.scss";
import PropTypes from "prop-types";
import AppHeader from "../../components/app-header/app-header";

const DefaultLayout = ({ children }) => {
  return (
    <div className="main__content">
      <AppHeader />
      <div className="main__content-children">{children}</div>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
