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
const DetailPage = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div id="product__detail">
      <div className="container">
        <div className="product__detail-basic-info">
          <Row>
            <Col span={12} className="bacsic__info-left">
              <Slider {...settings}>
                <div>
                  <img src={Image1} alt="" />
                </div>
                <div>
                  <img src={Image2} alt="" />
                </div>
                <div>
                  <img src={Image3} alt="" />
                </div>
                <div>
                  <img src={Image4} alt="" />
                </div>
              </Slider>
            </Col>
            <Col span={12} className="bacsic__info-right">
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
