import "./home-page.scss";
import defaultImage from "../../assets/images/product-1.png";
import crossIcon from "../../assets/images/cross.svg";
import whychoseImage from "../../assets/images/why-choose-us-img.jpg";
import silkyImg from "../../assets/images/silky-img.jpg";
import decor1 from "../../assets/images/decor-1.jpg";
import decor2 from "../../assets/images/decor-2.jpg";
import couchImage from "../../assets/images/shop-green.jpg";
import iconFreeShipping from "../../assets/images/truck.svg";
import iconEasyShopping from "../../assets/images/bag.svg";
import iconSupport from "../../assets/images/support.svg";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import iconReturn from "../../assets/images/return.svg";
const HomePage = () => {
  return (
    <>
      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                  Studio thiết kế nội thất hiện đại
                  {/* Modern Interiosr <span className="d-block">Design Studio</span> */}
                </h1>
                <p className="mb-4">
                Với sự sáng tạo và kiến thức chuyên môn, chúng tôi đưa ra những giải pháp thiết kế độc đáo, phản ánh cá nhân và nhu cầu của mỗi khách hàng. Chúng tôi cam kết mang đến những trải nghiệm thiết kế tốt nhất và không ngừng tìm kiếm sự hoàn thiện trong mọi chi tiết.
                </p>
                <p>
                  <Link to={`${routes.products}`} className="btn btn-secondary me-2"> Mua hàng ngay </Link>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src={couchImage} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}
      {/* Start Product Section */}
      <div className="product-section">
        <div className="container">
          <div className="row">
            {/* Start Column 1 */}
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Được chế tác từ vật liệu tuyệt vời.
              </h2>
              <p className="mb-4">
              Chúng tôi tận dụng những vật liệu chất lượng cao để tạo ra các sản phẩm đẳng cấp, độc đáo và bền bỉ. Sự tinh tế trong việc lựa chọn vật liệu là điểm nhấn giúp sản phẩm của chúng tôi nổi bật và đáng tin cậy
              </p>
              <p>
                <Link to={`${routes.products}`} className="btn btn-secondary me-2"> Khám phá ngay </Link>
              </p>
            </div>
            {/* End Column 1 */}
            {/* Start Column 2 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link to={`${routes.detail}/${1}`} className="product-item" href="cart.html">
                <img
                  src={defaultImage}
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>
                <span className="icon-cross">
                  <img src={crossIcon} className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* End Column 2 */}
            {/* Start Column 3 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img
                  src={defaultImage}
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Kruzo Aero Chair</h3>
                <strong className="product-price">$78.00</strong>
                <span className="icon-cross">
                  <img src={crossIcon} className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 3 */}
            {/* Start Column 4 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img
                  src={defaultImage}
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Ergonomic Chair</h3>
                <strong className="product-price">$43.00</strong>
                <span className="icon-cross">
                  <img src={crossIcon} className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 4 */}
          </div>
        </div>
      </div>
      {/* End Product Section */}
      {/* Start Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Tại sao nên chọn chúng tôi</h2>
              <p>
              Với nhiều năm hoạt động trong ngành thiết kế nội thất, chúng tôi tự tin mang đến cho bạn sự tận tâm và chuyên nghiệp hàng đầu.
              </p>
              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src={iconFreeShipping}
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Giao hàng nhanh &amp; tiết kiệm</h3>
                    <p>
                      Đảm bảo khách hàng nhận được sản phẩm nhanh chóng và đồng thời tiết kiệm chi phí vận chuyển.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src={iconEasyShopping}
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Dễ để mua</h3>
                    <p>
                      Trải nghiệm mua sắm trơn tru và thuận tiện cho mọi người dùng, từ quá trình tìm kiếm đến thanh toán.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src={iconSupport}
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3> Hỗ trợ 24/7 </h3>
                    <p>
                      Đội ngũ hỗ trợ luôn sẵn sàng giải đáp mọi thắc mắc và hỗ trợ khách hàng xuyên suốt mọi lúc, mọi nơi.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={iconReturn} alt="Image" className="imf-fluid" />
                    </div>
                    <h3>Chính sách hoàn sản phẩm</h3>
                    <p>
                      Cam kết chính sách hoàn trả linh hoạt và công bằng để đảm bảo sự hài lòng của khách hàng khi mua sắm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="img-wrap">
                <img src={whychoseImage} alt="Image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Why Choose Us Section */}
      {/* Start We Help Section */}
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1">
                  <img src={silkyImg} alt="Untree.co" />
                </div>
                <div className="grid grid-2">
                  <img src={decor1} alt="Untree.co" />
                </div>
                <div className="grid grid-3">
                  <img src={decor2} alt="Untree.co" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">
                Chúng tôi giúp bạn tạo ra các thiết kế nội thất hiện đại
              </h2>
              <p>
                Chúng tôi giúp bạn thực hiện thiết kế nội thất hiện đại. Dưới sự chỉ dẫn của các chuyên gia, chúng tôi biến những ý tưởng thành hiện thực, tạo ra không gian sống độc đáo và tiện nghi, phản ánh phong cách và cá nhân hóa của bạn.
              </p>
              <ul className="list-unstyled  my-4">
                <li style={{ listStyle: 'disclosure-closed' }}>Sự tư vấn chuyên nghiệp</li>
                <li style={{ listStyle: 'disclosure-closed' }}>Sự sáng tạo và tinh tế</li>
                <li style={{ listStyle: 'disclosure-closed' }}>Sự đa dạng và linh hoạt</li>
                <li style={{ listStyle: 'disclosure-closed' }}>Sử dụng vật liệu chất lượng</li>
                <li style={{ listStyle: 'disclosure-closed' }}>Chăm sóc khách hàng</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
