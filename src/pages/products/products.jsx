import "./products.scss";
import ProductItem from "../../components/product-item/product-item";
import { Flex, Input, Pagination, Empty } from "antd";
import { useEffect, useState } from "react";
import { httpGet } from "../../services/request";
import { loadingState } from "../../recoil/store/app";
import { useSetRecoilState } from "recoil";
const { Search } = Input;

const ProductsPage = () => {
  const setLoading = useSetRecoilState(loadingState);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const response = await httpGet("/product/get");
      setLoading(false);
      setProducts(response?.content || []);
    };
    fetchProduct();
  }, [setLoading]);
  return (
    <div id="product_page" className="container">
      <Flex
        justify={"space-between"}
        className="product_top"
        align="center"
        style={{ margin: "30px 0" }}
      >
        <div className="product_top-title">Danh mục sản phẩm</div>
        <div className="product_top-filter">
          <Search
            size="large"
            placeholder="Nhập tên sản phẩm"
            enterButton
            style={{ width: "300px" }}
          />
        </div>
      </Flex>
      <div className="product_body">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="box-list-product" key={`product__${product.id}`}>
              <div className="flex-box">
                <ProductItem
                  slug="#"
                  name={product.product_name}
                  cate={product.product_description}
                  selling_price={product.import_price}
                  unchanged_price={product.export_price}
                  image_src={product.image_url}
                  {...product}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center text-center">
            Không có dữ liệu
            <Empty />
          </div>
        )}
      </div>
      {products.length > 10 && (
        <div className="product_bottom">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
