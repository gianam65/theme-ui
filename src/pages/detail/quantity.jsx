import "./detail.scss";
import React, { useState } from "react";
import { PlusOutlined, MinusOutlined  } from '@ant-design/icons';

const DetailQuantity = () => {
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    return (
        <div className="quantity">
            <div className="quantity-lable">
                Số lượng:
            </div>

            <div className="quantity-control">
            <button className="minus" aria-label="Decrease" onClick={decreaseQuantity}>
            <MinusOutlined />
            </button>
                <input type="number" className="input-box" value={quantity} readOnly />
                <button className="plus" aria-label="Increase" onClick={increaseQuantity}>
                    <PlusOutlined/>
                </button>
            </div>
        </div>
    )
}
export default DetailQuantity