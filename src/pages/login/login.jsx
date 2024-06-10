import "./login.scss";

import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import loginLeftImage from '../../assets/images/login_left_img.jpg'
import loginLogo from '../../assets/images/logo-theme.jpg'
import loginBackground from '../../assets/images/login-bg.png'
import routes from "../../config/routes";
import { Link } from "react-router-dom";
import CustomLogo from '../../components/custom-logo/custom-logo'
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => {
  return (
    <div className="login__container" >
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
              labelCol={{
                // span: 4,
              }}
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
                // label="Username"
                name="username"
                className="cs-form-input"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập tên tài khoản của bạn!',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined style={{ fontSize: '23px', color: '#1890ff' }} />}
                  placeholder="Nhập tên tài khoản"
                />
              </Form.Item>

              <Form.Item
                // label="Password" 
                name="password"
                className="cs-form-input"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập mật khẩu của bạn!',
                  }
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ fontSize: '23px', color: '#1890ff' }} />}
                  placeholder="Nhập mật khẩu"
                />
              </Form.Item>
              <div className="flex-wrap">
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    // offset: 24,
                    span: 24,
                  }}
                >
                  <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                </Form.Item>
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    // offset: 24,
                    span: 24,
                  }}
                >
                  Bạn chưa có tài khoản, hãy
                  <Link to={`${routes.register}`}> đăng ký ngay </Link>

                </Form.Item>
              </div>



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
    </div >
  );
};

export default Login;
