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
      // const response = await httpGet("/product/get");
      setLoading(false);
      setProducts(
        // response?.content ||
         [
          {
            id: 1,
            product_name: "Sản phẩm 1",
            import_price: 8000,
            export_price: 10000,
            product_description: "Test miêu tả data sản phẩm 1",
            image_url:
              "https://i.pinimg.com/564x/1f/a0/b6/1fa0b60ce65596e61386407c8882d7de.jpg",
            quantity: 10,
            createAt: "2008-11-11T00:00:00",
            updateAt: null,
            category: {
              id: 1,
              index: null,
              name: "Nam",
              description: "Nam dep trai",
            },
            brand: {
              id: 1,
              index: null,
              name: "nam",
              description: "Nam",
            },
            color: {
              id: 1,
              index: null,
              name: "nam",
              description: "red",
            },
            size: {
              id: 1,
              size_name: "Nam",
            },
            status: null,
          },


          {
            id: 2,
            product_name: "Sản phẩm 2",
            import_price: 8000,
            export_price: 10000,
            product_description: "Test miêu tả data sản phẩm 2",
            image_url:
              "https://i.pinimg.com/564x/1f/a0/b6/1fa0b60ce65596e61386407c8882d7de.jpg",
            quantity: 10,
            createAt: "2008-11-11T00:00:00",
            updateAt: null,
            category: {
              id: 1,
              index: null,
              name: "Nam",
              description: "Nam dep trai",
            },
            brand: {
              id: 1,
              index: null,
              name: "nam",
              description: "Nam",
            },
            color: {
              id: 1,
              index: null,
              name: "nam",
              description: "red",
            },
            size: {
              id: 1,
              size_name: "Nam",
            },
            status: null,
          },
          {
            id: 3,
            product_name: "Sản phẩm 3",
            import_price: 8000,
            export_price: 10000,
            product_description: "Test miêu tả data sản phẩm 3",
            image_url:
              "https://i.pinimg.com/564x/1f/a0/b6/1fa0b60ce65596e61386407c8882d7de.jpg",
            quantity: 10,
            createAt: "2008-11-11T00:00:00",
            updateAt: null,
            category: {
              id: 1,
              index: null,
              name: "Nam",
              description: "Nam dep trai",
            },
            brand: {
              id: 1,
              index: null,
              name: "nam",
              description: "Nam",
            },
            color: {
              id: 1,
              index: null,
              name: "nam",
              description: "red",
            },
            size: {
              id: 1,
              size_name: "Nam",
            },
            status: null,
          },
          {
            id: 4,
            product_name: "Sản phẩm 4",
            import_price: 8000,
            export_price: 10000,
            product_description: "Test miêu tả data sản phẩm 4",
            image_url:
              "https://i.pinimg.com/564x/1f/a0/b6/1fa0b60ce65596e61386407c8882d7de.jpg",
            quantity: 10,
            createAt: "2008-11-11T00:00:00",
            updateAt: null,
            category: {
              id: 1,
              index: null,
              name: "Nam",
              description: "Nam dep trai",
            },
            brand: {
              id: 1,
              index: null,
              name: "nam",
              description: "Nam",
            },
            color: {
              id: 1,
              index: null,
              name: "nam",
              description: "red",
            },
            size: {
              id: 1,
              size_name: "Nam",
            },
            status: null,
          },
          {
            id: 5,
            product_name: "Sản phẩm 5",
            import_price: 8000,
            export_price: 10000,
            product_description: "Test miêu tả data sản phẩm 5",
            image_url:
              "https://i.pinimg.com/564x/1f/a0/b6/1fa0b60ce65596e61386407c8882d7de.jpg",
            quantity: 10,
            createAt: "2008-11-11T00:00:00",
            updateAt: null,
            category: {
              id: 1,
              index: null,
              name: "Nam",
              description: "Nam dep trai",
            },
            brand: {
              id: 1,
              index: null,
              name: "nam",
              description: "Nam",
            },
            color: {
              id: 1,
              index: null,
              name: "nam",
              description: "red",
            },
            size: {
              id: 1,
              size_name: "Nam",
            },
            status: null,
          },
        ],
      );
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
          <div className="box-list-product">
            <div className="flex-box">
              {products.map((product) => (
                <ProductItem
                  key={`product__${product.id}`}
                  slug="#"
                  name={product.product_name}
                  cate={product.product_description}
                  selling_price={product.import_price}
                  unchanged_price={product.export_price}
                  image_src={product.image_url}
                  {...product}
                />
              ))}
            </div>
          </div>
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
