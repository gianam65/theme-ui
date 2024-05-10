import "./detail.scss";
import { Carousel, Flex, Col, Row } from 'antd';
import React from 'react';
import Image1 from '../../assets/images/bowl-2.png';
import Image2 from '../../assets/images/bowl-3.png';
import Image3 from '../../assets/images/product-item.png';
import Image4 from '../../assets/images/product-3.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DetailVariation from "./variation";
import DetailQuantity from "./quantity";
import ShoppingBtns from "./shopping-btns";
import Ratings from "./rating";
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
      <div className="arrow-prev"></div>
    </div>
  );
}

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next-arrow" onClick={onClick}>
      <div className="arrow-next"></div>
    </div>
  );
};

const DetailPage = () => {
  const images = [Image1, Image2, Image3, Image4];
  const totalImages = images.length;
  const flexValue = `calc(100% / 7)`;
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={images[i]} alt="" className="cs_paging" />
        </a>
      );
    },
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  return (

    <div id="product__detail">
      <style>
        {`
      .slick-dots li {
        width: ${flexValue};
        height: 70px;
      }
    `}
      </style>
      <div className="container">
        <div className="product__detail-basic-info">
          <Row className="product-detail-row">
            <Col span={12} className="bacsic__info-left">
              <Slider {...settings}>
                <div className="item-img">
                  <img src={Image1} alt="" />
                </div>
                <div className="item-img">
                  <img src={Image2} alt="" />
                </div>
                <div className="item-img">
                  <img src={Image3} alt="" />
                </div>
                <div className="item-img">
                  <img src={Image4} alt="" />
                </div>
              </Slider>
            </Col>
            <Col span={12} className="bacsic__info-right">
              <div className="product_name">
              Tai nghe Apple AirPods 3rd gen lightning charge
              </div>
              {/* <p className="product_description">
                Set đồ thuộc BST Whisper Orchids của SilkyVietnam Collection
              </p> */}
              <Ratings/>
              <div className="product_price">
                2.150.000 ₫
              </div>
              

              <DetailVariation />
              <DetailQuantity />
              <ShoppingBtns />

            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
