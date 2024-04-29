import "./products.scss";
import BreadCrumb from "../../components/breadcrumb/breadcrumb";
import ProductItem from "../../components/product-item/product-item";
const ProductsPage = () => {
  return <div id="product_page" className="container">
    <BreadCrumb />
    <div className="product_top">
      <div className="product_top-title">
        all product
      </div>
      <div className="product_top-desc">
        <h3>
          From the Lab to Your Door
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit sed euismod facilisis. Praesent consectetur ipsum tellus, a euismod massa pretium sit amet. Ut varius tortor pellentesque, imperdiet odio vitae, sagittis nulla. Suspendisse non dui sit amet magna vehicula eleifend.
        </p>
      </div>
    </div>
    <div className="product_body">
      <div className="box-list-product">
        <div className="flex-box">
        
          <ProductItem
            slug="#"
            name="YANG NMN 15000mg+ – Viên uống trường thọ"
            cate="Anti-Aging products"
            selling_price="5,500,000 VNĐ"
            unchanged_price="7,500,000 VNĐ"
          />
          <ProductItem
            slug="#"
            name="YANG NMN 15000mg+ – Viên uống trường thọ"
            cate="Anti-Aging products"
            selling_price="5,500,000 VNĐ"
            unchanged_price="7,500,000 VNĐ"
          />
          <ProductItem
            slug="#"
            name="YANG NMN 15000mg+ – Viên uống trường thọ"
            cate="Anti-Aging products"
            selling_price="5,500,000 VNĐ"
            unchanged_price="7,500,000 VNĐ"
          />
          <ProductItem
            slug="#"
            name="YANG NMN 15000mg+ – Viên uống trường thọ"
            cate="Anti-Aging products"
            selling_price="5,500,000 VNĐ"
            unchanged_price="7,500,000 VNĐ"
          />
        </div>
      </div>
    </div>
  </div>
};

export default ProductsPage;
