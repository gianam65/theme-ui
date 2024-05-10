import "./detail.scss";
const DetailQuantity = () => {
    return (
        <div className="quantity">
            <div className="quantity-lable">
                Số lượng:
            </div>
            <div className="quantity-action">
                <input type="text" value={1} />
            </div>
            <div className="quantity">
                <button className="minus" aria-label="Decrease">&minus;</button>
                <input type="number" className="input-box" value={1} />
                    <button className="plus" aria-label="Increase">&plus;</button>
            </div>
        </div>
    )
}
export default DetailQuantity