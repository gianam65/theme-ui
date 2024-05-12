import "./detail.scss";
import Avatar from '../../assets/images/person_1.jpg'
import {
    StarOutlined
} from '@ant-design/icons';
const RatingItems = () => {
    return (
        <div className="rating-item">
            <div className="avatar">
                <img src={Avatar} alt="" />
            </div>
            <div className="rating-content">
                <p className="rating-name">
                    Rating user name
                </p>
                <div className="rating-star">
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                </div>
                <div className="rating-date">
                    2024-04-02 15:58
                </div>
                <div className="rating-comment">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum eget orci in vestibulum. Aliquam ut bibendum dolor, sit amet lobortis augue. Aliquam sodales, augue sit amet accumsan pulvinar, ligula eros fringilla justo, et luctus ante est quis erat. Maecenas porttitor tincidunt tristique. Aenean aliquet diam risus, et tincidunt metus tincidunt eget. Aliquam non sollicitudin lacus, id porta quam. Sed eget tortor lacus. Nulla quis neque condimentum, accumsan libero vitae, semper urna. Maecenas tempor augue in turpis elementum, vel imperdiet nisl lobortis. Fusce eu turpis placerat, vehicula tortor eu, fringilla turpis.

                </div>
            </div>


        </div>
    )
}
export default RatingItems