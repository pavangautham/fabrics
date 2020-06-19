import React from "react";
import { Tabs, Avatar, Form, Input, Button, Select, DatePicker } from 'antd';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import Address from './Address';
import Addressone from './Addressone';
import '../sidebar/SideBar.css';

const { TabPane } = Tabs;
const formItemLayout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 16,
  }
  /* labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  }, */
  /* labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  }, */
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Pavan'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  
  render(){
  return (
    <>
    <div style={{ display: 'flex', width:'75%', /* boxShadow: '2px 1px 3px 2px #9E9E9E', padding: 20, background: '#F7F6F7' */ /* backgroundImage: 'url(images/banner.jpg)', backgroundRepeat: 'no-repeat', */ }}>
      {/* <img style={{ width : '100%', height: 250 }} src="/images/banner.jpg" /> */}
      <Avatar size={100} icon={<UserOutlined />} />
      <div style={{ marginLeft: 20 }}>
        <p style={{ color: '#055da0' }}>{this.state.value} </p>
        <p style={{ color: '#055da0' }}>pavan.gautham17@gmail.com</p>
        <p style={{ color: '#055da0' }}>7259691900</p>
      </div>
    </div>
    <div style={{ marginTop: 15 }}>
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <UserOutlined />
              My Profile
            </span>
          }
          key="1"
        >          
          <Form id="profile" {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Name">
              <Input  placeholder="input placeholder" value={this.state.value} onChange={this.handleChange} />
            </Form.Item>
            <Form.Item label="Email">
              <Input placeholder="input placeholder" value="pavan.gautham17@gmail.com" />
            </Form.Item>
            <Form.Item label="Mobile No">
              <Input placeholder="input placeholder" value="7259691900" />
            </Form.Item>
            <Form.Item label="Gender">
              <Select defaultValue="Male">
                <Select.Option key="1" value="male">Male</Select.Option>
                <Select.Option key="2" value="female">Female</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Birth Day">
              <DatePicker />
            </Form.Item>
            <Form.Item label="Profession">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Location">
              <Select defaultValue="Bangalore">
                <Select.Option value="bangalore">Bangalore</Select.Option>
                <Select.Option value="bagalkote">Bagalkote</Select.Option>
                <Select.Option value="mysore">Mysore</Select.Option>
                <Select.Option value="chennai">Chennai</Select.Option>
                <Select.Option value="hyderabad">Hyderabad</Select.Option>
                <Select.Option value="hyderabad">Mumbai</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item 
            wrapperCol={{
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 0,
              },
            }}>
              <Button style={{ width: 100, background: '#055da0', color: '#fff' }} htmlType="submit" value="submit">Save</Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane
          tab={
            <span>
              <HomeOutlined />
              Address
            </span>
          }
          key="2"
        >          
          {/* <Address /> */}
          <Addressone />
        </TabPane>
      </Tabs>
    </div>
    </>
  );
  };
}

export default Profile;
