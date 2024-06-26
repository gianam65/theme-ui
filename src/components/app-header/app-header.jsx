/* eslint-disable react/prop-types */
import "./app-header.scss";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import useImg from "../../assets/images/user.svg";
import cartIcon from "../../assets/images/cart.svg";
import routes from "../../config/routes";
import { Dropdown } from "antd";

const AppHeader = () => {
  const CustomLink = ({ children, to }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    return (
      <li className={match ? "active" : ""}>
        <Link className="nav-link" to={to}>
          {children}
        </Link>
      </li>
    );
  };

  const items = [
    {
      key: "1",
      label: <Link to={routes.profile}>Thông tin cá nhân</Link>,
    },
    {
      key: "2",
      label: <Link to={routes.history}>Lịch sử mua hàng</Link>,
    },
  ];
  return (
    <div>
      <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Furni<span>.</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <CustomLink to={routes.home}>Trang chủ</CustomLink>
              <CustomLink to={routes.products}>Sản phẩm</CustomLink>
              <CustomLink to={routes.management}>Quản lý cửa hàng</CustomLink>
            </ul>
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottom"
                >
                  <div className="nav-link">
                    <img src={useImg} />
                  </div>
                </Dropdown>
              </li>
              <li>
                <Link className="nav-link" to={routes.cart}>
                  <img src={cartIcon} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppHeader;
