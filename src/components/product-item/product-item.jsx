/* eslint-disable react/prop-types */
import "./product-item.scss";
import defaultImage from "../../assets/images/default_product.jpg";
import cartIcon from "../../assets/images/cart.svg";
import { formatCurrency } from "../../utils/utils";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import { httpPost } from "../../services/request";
import { notification } from "antd";

const ProductItem = ({
  name,
  cate,
  selling_price,
  unchanged_price,
  image_src,
  id,
}) => {
  const handleAddProductToCart = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    const response = await httpPost("/api/cart/addToCart");
    if (response?.data) {
      notification.success({
        message: "Thêm sản phẩm vào giỏ hàng thành công!",
      });
    } else {
      notification.error({ message: "Có lỗi xảy ra, vui lòng thử lại sau!" });
    }
  };
  return (
    <Link to={`${routes.detail}/${id}`} className="product-item">
      <div>
        <div className="image">
          <div className="img">
            <img src={image_src || defaultImage} alt="" />
          </div>
        </div>
        <div className="desc-box">
          <div className="box-content">
            <h3 className="name_item">{name}</h3>
            <h5 className="cate_item">{cate}</h5>
            <div className="box-price">
              <div className="price">{formatCurrency(selling_price)}</div>
              <div className="unchanged_price">
                {formatCurrency(unchanged_price)}
              </div>
            </div>
          </div>
          <div className="cs-button" onClick={(e) => handleAddProductToCart(e)}>
            <img src={cartIcon} />
            <span>Thêm vào giỏ hàng</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductItem;
