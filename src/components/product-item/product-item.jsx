/* eslint-disable react/prop-types */
import "./product-item.scss";
import defaultImage from "../../assets/images/product-item.png";
import cartIcon from "../../assets/images/cart.svg";
import { formatCurrency } from "../../utils/utils";
import { Link } from "react-router-dom";
import routes from "../../config/routes";

const ProductItem = ({
  name,
  cate,
  selling_price,
  unchanged_price,
  image_src,
  id,
}) => {
  const defaultIamgeSrc = image_src ? ` ${image_src}` : defaultImage;

  return (
    <Link to={`${routes.detail}/${id}`} className="product-item">
      <div>
        <div className="image">
          <div className="img">
            <img src={defaultIamgeSrc} alt="" />
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
          <button className="cs-button">
            <img src={cartIcon} />
            <span>Thêm vào giỏ hàng</span>
          </button>
        </div>
      </div>
    </Link>
  );
};
export default ProductItem;
