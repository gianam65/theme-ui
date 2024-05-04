import "./profile.scss";
import defaultAvatar from "../../assets/images/default__avatar.jpeg";

const ProfilePage = () => {
  return (
    <div className="profile__container">
      <div className="container__inner">
        <div className="profile__content">
          <div className="left">
            <img src={defaultAvatar} alt="" className="user__avatar" />
          </div>
          <div className="right">
            <div className="heading">Thông tin cá nhân</div>
            <div className="user__name">Tên người dùng: Le Minh Nghia</div>
            <div className="user__name">Tên đăng nhập: leminhnghia</div>
            <div className="user__name">Số điện thoại: 0969121211</div>
            <div className="user__name">Địa chỉ: Phố Cổ - Hà Nội</div>
            <button className="btn btn-black btn-sm btn-block">
              Cập nhật thông tin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
