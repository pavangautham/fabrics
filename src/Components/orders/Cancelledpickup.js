import React from 'react';
import Table from "ant-responsive-table";
 
const Cancelledpickup = () => {
  const dataSource = [
    {
        key: 1,
        bookingid: 489905,
        status: 'CANCELLED',
        address: 'Jp Nagar, Saraki Circle, 1st main mutt Road',
        pickup: '20-05-2020',
        service: 'Regular',
        reason: 'Prices is high',
        cancelled:'2020-05-11 12:42:05.383',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      },
      {
        key: 2,
        bookingid: 236616,
        status: 'CANCELLED',
        address: 'Jp Nagar, Saraki Circle, 1st main mutt Road',
        pickup: '30-03-2020',
        service: 'Regular',
        reason: 'Customer Not Available',
        cancelled:'2020-04-08 10:35:03.800',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
      },
      {
        key: 3,
        bookingid: 453710,
        status: 'CANCELLED',
        address: 'Jp Nagar, Saraki Circle, 1st main mutt Road',
        pickup: '18-01-2020',
        service: 'Regular',
        reason: 'Duplicate pickup',
        cancelled:'2020-02-11 17:46:10.853',
        description: 'This not expandable',
      },
      {
        key: 4,
        bookingid: 448431,
        status: 'CANCELLED',
        address: 'Jp Nagar, Saraki Circle, 1st main mutt Road',
        pickup: '02-11-2019',
        service: 'Regular',
        reason: 'Duplicate pickup',
        cancelled:'2020-02-08 16:02:55.080',
        description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
      },
  ];
 
  const columns = [
    {
      title: "Booking ID",
      dataIndex: "bookingid",
      key: "bookingid",
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
      title: "Cancel Reason",
      dataIndex: "reason",
      key: "reason",
      showOnResponse: true,
      showOnDesktop: true
    },
    {
      title: "Cancelled Date",
      dataIndex: "cancelled",
      key: "cancelled",
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

export default Cancelledpickup;