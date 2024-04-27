import "./login.scss";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <div className="login__container">
      <div className="login__box">
        <Form name="normal_login" className="login__form" onFinish={() => {}}>
          <Form.Item
            className="login__form-item"
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên đăng nhập!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Tên đăng nhập" />
          </Form.Item>
          <Form.Item
            className="login__form-item"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Mật khẩu"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login__button">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
