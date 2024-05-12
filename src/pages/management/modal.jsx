import React from 'react';
import { Modal, Form, Input } from 'antd';

const { TextArea } = Input;

const ShopModal = ({ visible, onOk, onCancel, shopData }) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    form.setFieldsValue(shopData);
  }, [form, shopData]);

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        form.resetFields();
        onOk(values);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      title={shopData ? 'Chỉnh sửa cửa hàng' : 'Thêm cửa hàng'}
      visible={visible}
      onOk={handleOk}
      onCancel={onCancel}
    >
      <Form
        form={form}
        layout="vertical"
      >
        <Form.Item
          name="name"
          label="Tên cửa hàng"
          rules={[{ required: true, message: 'Please input the shop name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input the shop email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Số điện thoại"
          rules={[{ required: true, message: 'Please input the shop phone number!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address"
          label="Địa chỉ"
          rules={[{ required: true, message: 'Please input the shop address!' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ShopModal;