import "./payment.scss";
import { Radio } from "antd";
import {
    TagOutlined
} from '@ant-design/icons';

import defaultImage from '../../assets/images/bowl-2.png'

const PaymentPage = () => {
    return (
        <div className="payment-wrap">
            <div className="container">
                <div className="shipping-method payment-section">
                    <h5>
                        Phương thức vận chuyển
                    </h5>
                    <div className="select-shipping">
                        <Radio checked>Giao hàng nhanh</Radio>
                        <Radio>Giao hàng tiết kiệm</Radio>
                        <Radio>Viettelpost</Radio>
                    </div>
                </div>
                <div className="payment-section order-address">
                    <h5 >
                        <TagOutlined style={{ marginRight: '8px' }} />
                        Địa chỉ nhận hàng
                    </h5>
                    <div className="user-address">
                        <p className="selected-address">
                            <strong style={{ marginRight: '8px' }}>
                                Nam Gia 0912131211
                            </strong >
                            21, Dĩnh Trì, Bắc Giang, Bắc Giang
                        </p>
                        <span className="default-tag">
                            Mặc định
                        </span>
                        <div className="open-modal">Thay đổi</div>
                    </div>
                </div>
                <div className="payment-section order-products">
                    <div className="products-heading">
                        <div className="th-name">
                            Sản phẩm
                        </div>
                        <div className="th-single-price">
                            Đơn giá
                        </div>
                        <div className="th-qty">
                            Số lượng
                        </div>
                        <div className="th-total">
                            Thành tiền
                        </div>
                    </div>
                    <div className="products-shop">
                        <span className="shop-like">
                            Yêu thích
                        </span>
                        <p>
                            Shop online
                        </p>
                    </div>
                    <div className="list-order-products">
                        <div className="order-products-item">
                            <div className="td-name">
                                <img src={defaultImage} alt="" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut facilisis est. Duis accumsan quis lacus vitae pellentesque.
                                </p>
                            </div>
                            <div className="td-single-price">
                                195.000 ₫
                            </div>
                            <div className="td-qty">
                                2
                            </div>
                            <div className="td-total">
                                390.000 ₫
                            </div>
                        </div>
                        <div className="order-products-item">
                            <div className="td-name">
                                <img src={defaultImage} alt="" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut facilisis est. Duis accumsan quis lacus vitae pellentesque.
                                </p>
                            </div>
                            <div className="td-single-price">
                                195.000 ₫
                            </div>
                            <div className="td-qty">
                                2
                            </div>
                            <div className="td-total">
                                390.000 ₫
                            </div>
                        </div>
                        <div className="order-products-item">
                            <div className="td-name">
                                <img src={defaultImage} alt="" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut facilisis est. Duis accumsan quis lacus vitae pellentesque.
                                </p>
                            </div>
                            <div className="td-single-price">
                                195.000 ₫
                            </div>
                            <div className="td-qty">
                                2
                            </div>
                            <div className="td-total">
                                390.000 ₫
                            </div>
                        </div>
                        <div className="order-products-item">
                            <div className="td-name">
                                <img src={defaultImage} alt="" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut facilisis est. Duis accumsan quis lacus vitae pellentesque.
                                </p>
                            </div>
                            <div className="td-single-price">
                                195.000 ₫
                            </div>
                            <div className="td-qty">
                                2
                            </div>
                            <div className="td-total">
                                390.000 ₫
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-note payment-section">
                    <h5>
                        Lời nhắc
                    </h5>
                    <textarea name="" id="note_input">

                    </textarea>
                </div>
                <div className="payment-section payment-method">
                    <h5>
                        Chọn phương thức thanh toán
                    </h5>
                    <div className="select-payment-method">
                        <Radio checked>Paypal</Radio>
                        <Radio>Momo</Radio>
                        <Radio> Cash on Delivery</Radio>
                    </div>
                </div>
                <div className="payment-section total-section">
                    <div className="sub-total total-item">
                        <span className="text">
                            Tổng cộng phụ:
                        </span>
                        <span className="price">
                            780.000 ₫
                        </span>
                    </div>
                    <div className="shipping-fee total-item">
                        <span className="text">
                            Phí vận chuyển:
                        </span>
                        <span className="price">
                            20.000 ₫
                        </span>
                    </div>
                    <div className="total total-item">
                        <span className="text">
                            Tổng tiền:
                        </span>
                        <span className="price">
                            800.000 ₫
                        </span>
                    </div>
                    <div className="payment-action">
                        <button className="button-cancel button">
                            Quay lại
                        </button>
                        <button className="button-payment button">
                            Đặt hàng
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default PaymentPage;