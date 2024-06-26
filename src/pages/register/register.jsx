import "../login/login.scss";

import { Form, Input, Button, notification } from "antd";
import { UserOutlined, LockOutlined, AuditOutlined } from "@ant-design/icons";
import loginLeftImage from "../../assets/images/login_left_img.jpg";
import loginLogo from "../../assets/images/logo-theme.jpg";
import CustomLogo from "../../components/custom-logo/custom-logo";
import { httpPost } from "../../services/request";
import { useNavigate, Link } from "react-router-dom";
import routes from "../../config/routes";

const RegisterPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await httpPost("/account/register", {
        ...values,
        accountType: "USER",
      });

      if (response?.data) {
        notification.success({
          message:
            "Đăng ký thành công, bạn sẽ chuyển đến trang đăng nhập sau 2 giây",
        });
        setTimeout(() => {
          navigate("/dang-nhap");
        }, 2000);
      } else {
        notification.error({
          message: "Có lỗi xảy ra. Vui lòng thử lại sau!",
        });
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login__container">
      <div className="login__box">
        <div className="left__login">
          <img src={loginLeftImage} alt="" />
        </div>
        <div className="right__login">
          <div className="logo">
            <CustomLogo
              src={loginLogo}
              alt="Logo"
              width="150px"
              height="150px"
            />
          </div>
          <div className="form">
            <Form
              name="basic"
              wrapperCol={{
                span: 24,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                className="cs-form-input"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên tài khoản của bạn!",
                  },
                ]}
              >
                <Input
                  prefix={
                    <UserOutlined
                      style={{ fontSize: "23px", color: "#1890ff" }}
                    />
                  }
                  placeholder="Nhập tên tài khoản"
                />
              </Form.Item>

              <Form.Item
                // label="Username"
                name="email"
                className="cs-form-input"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập email của bạn!",
                  },
                ]}
              >
                <Input
                  prefix={
                    <AuditOutlined
                      style={{ fontSize: "23px", color: "#1890ff" }}
                    />
                  }
                  placeholder="Nhập email"
                />
              </Form.Item>

              <Form.Item
                // label="Password"
                name="password"
                className="cs-form-input"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu của bạn!",
                  },
                ]}
              >
                <Input.Password
                  prefix={
                    <LockOutlined
                      style={{ fontSize: "23px", color: "#1890ff" }}
                    />
                  }
                  placeholder="Nhập mật khẩu"
                />
              </Form.Item>

              <Form.Item
                // label="Confirm Password"
                name="confirmPassword"
                className="cs-form-input"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập lại mật khẩu của bạn!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("Mật khẩu không khớp!"));
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={
                    <LockOutlined
                      style={{ fontSize: "23px", color: "#1890ff" }}
                    />
                  }
                  placeholder="Nhập lại mật khẩu"
                />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  // offset: 24,
                  span: 24,
                }}
              >
                <div className="link-to-login">
                  <span>Bạn đã có tài khoản, xin vui lòng</span>
                  <Link to={`${routes.login}`}> đăng nhập </Link>
                </div>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  // offset: 24,
                  span: 24,
                }}
              >
                <Button type="primary" htmlType="submit" className="cs-button">
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
