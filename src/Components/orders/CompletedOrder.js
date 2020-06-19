import React from 'react';
import Table from "ant-responsive-table";
import { Modal } from 'antd';

const CompletedOrder = () => {

  const confirm = () => {
    Modal.confirm({
      title: 'Order Details',
      content: 
      <>
      <p>Order No :  ESPEC0000001065</p>
      <p>Order Status :  In Process</p>
      <p>Service Type : Regular</p>
      <p>Address : test test test JUDICIAL LAYOUT BANGALORE 560065</p>
      <p>Pickup Date: 20-05-2020</p>
      <p>Pincode: 560065</p>
      <p>Total Garments: 2</p>
      <p>Ready To be Invoiced Garments : 0</p>
      <p>In Process Garments : 2</p>
      <p>Delivery Date : 23-05-2020</p>
      <p>Order Amount : 232.46</p>
      <p>Total amount to be settled : Rs.NaN</p>
      </>,
      //cancelButtonProps: { disabled: true, className: "modal-footer-hiden-button" },
      okText: 'OK',
      cancelText: 'Cancel',
    });
  };

  const dataSource = [
    {
      key: 1,
      order: 'ESPEC0000000261',
      status: 'Deliverd',
      address: 'Jp Nagar, Saraki Circle, 1st main mutt Road',
      pickup: '20-05-2020',
      service: 'Regular',
      //description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      order: 'EF0130000008133',
      status: 'Deliverd',
      address: 'Jp Nagar, Saraki Circle, 1st main mutt Road',
      pickup: '30-03-2020',
      service: 'Regular',
      //description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 3,
      order: 'EF0130000008132',
      status: 'Deliverd',
      address: 'Jp Nagar, Saraki Circle, 1st main mutt Road',
      pickup: '18-01-2020',
      service: 'Regular',
      //description: 'This not expandable',
    },
    {
      key: 4,
      order: 'EF0130000008131',
      status: 'Deliverd',
      address: 'Jp Nagar, Saraki Circle, 1st main mutt Road',
      pickup: '02-11-2019',
      service: 'Regular',
      //description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
  ];
 
  const columns = [
    {
      title: "Order No",
      dataIndex: "order",
      key: "order",
      showOnResponse: true,
      showOnDesktop: true
    },
    {
      title: "Order Status",
      dataIndex: "status",
      key: "status",
      showOnResponse: true,
      showOnDesktop: true
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      showOnResponse: true,
      showOnDesktop: true
    },
    {
      title: "Pickup Date",
      dataIndex: "pickup",
      key: "pickup",
      showOnResponse: true,
      showOnDesktop: true
    },
    {
      title: "Service Type",
      dataIndex: "service",
      key: "service",
      showOnResponse: true,
      showOnDesktop: true
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      /* render: () => (
      <span>
          <a>View Details</a>
          <a> Feedback</a>
      </span>
      ), */
      render: () => {
        return (
          <span>
            <a onClick={() => confirm()}>
              View Details
            </a>          
            <a style={{ marginLeft: 25 }}>
              Feedback
            </a>          
          </span>
        );
      },
      showOnResponse: true,
      showOnDesktop: true
    },
  ];
  return (
    <>
    <div>      
      <Table
        antTableProps={{
          showHeader: true,
          columns,
          dataSource,
          pagination: true,
        }}
        mobileBreakPoint={768}
      />      
    </div>
    </>
  );
};

export default CompletedOrder;