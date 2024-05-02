import "./products.scss";
import BreadCrumb from "../../components/breadcrumb/breadcrumb";
import ProductItem from "../../components/product-item/product-item";
import { Flex, Input, Pagination } from "antd";
const { Search } = Input;


const ProductsPage = () => {
  return <div id="product_page" className="container">
    <Flex justify={"space-between"} className="product_top" align="center" style={{ margin: "30px 0" }}>
      <div className="product_top-title">
        Danh mục sản phẩm
      </div>
      <div className="product_top-filter">
        <Search size="large" placeholder="Nhập tên sản phẩm"
          enterButton
          style={{ width: "300px" }}
        />
      </div>
    </Flex>
    <div className="product_body">
      <div className="box-list-product">
        <div className="flex-box">
          <ProductItem
            slug="#"
            name="YANG NMN 15000mg+ – Viên uống trường thọ"
            cate="Tên danh mục sản phẩm"
            selling_price="5,500,000 VNĐ"
            unchanged_price="7,500,000 VNĐ"
          />
          <ProductItem
            slug="#"
            name="YANG NMN 15000mg+ – Viên uống trường thọ"
            cate="Tên danh mục sản phẩm"
            selling_price="5,500,000 VNĐ"
            unchanged_price="7,500,000 VNĐ"
          />
          <ProductItem
            slug="#"
            name="YANG NMN 15000mg+ – Viên uống trường thọ"
            cate="Tên danh mục sản phẩm"
            selling_price="5,500,000 VNĐ"
            unchanged_price="7,500,000 VNĐ"
          />
          <ProductItem
            slug="#"
            name="YANG NMN 15000mg+ – Viên uống trường thọ"
            cate="Tên danh mục sản phẩm"
            selling_price="5,500,000 VNĐ"
            unchanged_price="7,500,000 VNĐ"
          />
        </div>
      </div>
    </div>
    <div className="product_bottom">
      <Pagination defaultCurrent={1} total={50} />
    </div>
  </div>
};

export default ProductsPage;
