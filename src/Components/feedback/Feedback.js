import React from 'react';
import { Form, Input, Button } from 'antd';
import '../sidebar/SideBar.css';

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 20,
  }
  /* labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 26,
  }, */
};
/* const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}; */

const Feedback = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <>
    
    <div style={{ boxShadow: '2px 1px 3px 2px #9E9E9E', padding: 20 }}>
    <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 25 }}>Feedback form</p>
    <Form id="feedback" {...layout} name="nest-messages" onFinish={onFinish}>
      <Form.Item
        style={{ marginTop: 40 }}
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            type: 'name',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        style={{ marginTop: 40 }}
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
            
      <Form.Item style={{ marginTop: 40 }} name={['user', 'message']} label="Message">
        <Input.TextArea />
      </Form.Item>
      <Form.Item style={{ marginTop: 40 }} wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Send Message
        </Button>
      </Form.Item>
    </Form>
    </div>
    </>
  );
};

export default Feedback;