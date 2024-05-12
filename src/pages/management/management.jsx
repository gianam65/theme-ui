import "./management.scss";
import React, { useState } from 'react';
import { Input, Space, Table, Tag, Modal } from "antd";
import ShopModal from "./modal";
const { Search } = Input;
import {
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';


const ManagementPage = () => {
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  const showModal = (record) => {
    setModalData(record);
    setVisible(true);
  };

  const handleOk = (values) => {
    console.log('Received values:', values);
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const columns = [
    {
      title: 'Cửa hàng',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Trạng thái',
      key: 'status',
      dataIndex: 'status',
      render: (_, record) => (
        <Tag color={record.status === 0 ? 'volcano' : 'green'}>
          {record.status === 0 ? 'Ẩn' : 'Hiển thị'}
        </Tag>
      ),
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a className="edit" onClick={() => showModal(record)}>Chỉnh sửa <EditOutlined /></a>
          <a className="delete">Xóa <DeleteOutlined /></a>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      email: 'tuanduc10102001@gmail.com',
      phone: '0987654321',
      address: 'New York No. 1 Lake Park',
      status: 1,
    },
    {
      key: '2',
      name: 'Jim Green',
      email: 'tuanduc10102001@gmail.com',
      phone: '0987654321',
      address: 'London No. 1 Lake Park',
      status: 0,
    },
    {
      key: '3',
      name: 'Joe Black',
      email: 'tuanduc10102001@gmail.com',
      phone: '0987654321',
      address: 'Sydney No. 1 Lake Park',
      status: 1,
    },
  ];
  

  return <div className="management">
    <div className="container">
      <div className="management-header">
        <div className="header-left">
          <h3>
            Danh sách cửa hàng
          </h3>
          <div className="add-shop cs-button"  onClick={() => showModal(null)}>
            Thêm 
          </div>
        </div>
        <div className="header-right">
          <Search size="large" placeholder="Nhập tên cửa hàng"
            enterButton
            style={{ width: "300px" }}
          />
        </div>
      </div>
      <div className="management-table">
        <Table columns={columns} dataSource={data} />
      </div>
      <ShopModal
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          shopData={modalData}
        />
    </div>
  </div>;
};

export default ManagementPage;
