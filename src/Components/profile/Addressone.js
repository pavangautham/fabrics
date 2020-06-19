import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';

const originData = [
  {
    key: '0',
    address1: 'Banashankari temple',
    //age: '32',
    address2: '#18, 1st main, Shakambari nagar ',
    location: 'Bangalore',
    area: 'Jp Nagar',
    pincode: '560078',
  },
  {
    key: '1',
    address1: 'Post Office,2nd main',
    //age: '32',
    address2: '#3,srirampura bustand ',
    location: 'Mysore',
    area: 'Rajajinagar',
    pincode: '560060',
  },
];

/* for (let i = 0; i < 5; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
} */

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Address = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = record => record.key === editingKey;

  const edit = record => {
    form.setFieldsValue({
      address1: '',
      address2: '',
      location: '',
      area: '',
      pincode: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async key => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Address1',
      dataIndex: 'address1',
      width: '25%',
      editable: true,
    },
    {
      title: 'Address2',
      dataIndex: 'address2',
      width: '25%',
      editable: true,
    },
    {
      title: 'Location',
      dataIndex: 'location',
      width: '15%',
      editable: true,
    },
    {
      title: 'Area',
      dataIndex: 'area',      
      editable: true,
    },
    {
      title: 'Pincode',
      dataIndex: 'pincode',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
            <>
          <a disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </a>
          
          <a style={{ marginLeft: 20 }}>
            Delete
          </a>
          </>
        );
      },
    },
  ];
  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        scroll={{ x: "max-content" }}
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default Address;