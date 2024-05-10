import "./detail.scss";
import {
    StarOutlined
} from '@ant-design/icons';
const Ratings = () => {
    return (
        <div className="rating">
            <div className="rating-star">
                <label htmlFor="">4.9</label>
                <span className="stars">
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                </span>
            </div>
            <div className="rating-comment">
                <label htmlFor="">5,2k</label>
                <span>
                    Đánh giá
                </span>
            </div>
        </div>
    )
}
export default Ratings