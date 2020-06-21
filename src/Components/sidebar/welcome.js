import React, { useState } from 'react';
import { connect } from 'react-redux';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import './SideBar.css';
import {
  UserOutlined,
  ShoppingCartOutlined,
  CreditCardOutlined,
  TagOutlined,
  ClockCircleOutlined,
  InfoCircleOutlined,
  MessageOutlined,
  LogoutOutlined,
  HeatMapOutlined,
  UnorderedListOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Welcome = ({ auth }) => {

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  const loc = window.location.pathname.substr(1);
  let selectedKey;
  if(loc === 'wash') {
    selectedKey = '1'
  } else if(loc === 'profile') {
    selectedKey = '2'
  } else if(loc === 'orders') {
    selectedKey = '3'
  } else if(loc === 'payment') {
    selectedKey = '4'
  } else if(loc === 'offers') {
    selectedKey = '5'
  } else if(loc === 'aboutUs') {
    selectedKey = '6'
  } else if(loc === 'location') {
    selectedKey = '7'
  } else if(loc === 'tnc') {
    selectedKey = '8'
  } else if(loc === 'privacy') {
    selectedKey = '9'
  } else if(loc === 'feedback') {
    selectedKey = '10'
  }

  const { user } = auth;
  return (
    
    <Sider className="ant-layout" collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ backgroundColor: '#F7F6F7' }}>
      <div className="logo" style={{ marginLeft: 7, marginBottom: 7 }}> <img src="/images/fab1.png" height="100" width={collapsed ? '65' : '185'} /> </div>
      <div className="logo" style={{  color: '#000', textAlign: 'center', padding: 19 }}>Welcome {user.name}</div>
      <Menu /* className="ant-menu-item" */ style={{ backgroundColor: '#F7F6F7' }} theme="dark" defaultSelectedKeys={[selectedKey]} mode="inline">
      
        <Menu.Item style={{ color: '#000' }} key="1" icon={<ClockCircleOutlined />}>
          <Link to="/wash" style={{  }}>Schedule Wash</Link>              
        </Menu.Item>
      
        <Menu.Item style={{ color: '#000' }} key="2" icon={<UserOutlined />}>
          <Link to="/profile" style={{  }}>Profile</Link>
        </Menu.Item>
        <Menu.Item style={{ color: '#000' }} key="3" icon={<ShoppingCartOutlined />}>
          <Link to="/orders" style={{  }}>Orders</Link>
        </Menu.Item>
        <Menu.Item style={{ color: '#000' }} key="4" icon={<CreditCardOutlined />}>
          <Link to="/payment" style={{  }}>Payment</Link>
        </Menu.Item>
        <Menu.Item style={{ color: '#000' }} key="5" icon={<TagOutlined />}>
          <Link to="/offers" style={{  }}>Offers</Link>
        </Menu.Item>            
        <SubMenu style={{  }} key="sub1" icon={<InfoCircleOutlined />} title="Our Info">
          <Menu.Item style={{ color:'#000' }} key="6" icon={<InfoCircleOutlined />} ><Link to="/aboutUs">About Us</Link></Menu.Item>
          <Menu.Item style={{ color:'#000' }} key="7" icon={<HeatMapOutlined />} ><Link to="/location">Locate Us</Link></Menu.Item>
          <Menu.Item style={{ color:'#000' }} key="8" icon={<UnorderedListOutlined />} ><Link to="/tnc">Terms & Conditions</Link></Menu.Item>
          <Menu.Item style={{ color:'#000' }} key="9" icon={<ExclamationCircleOutlined />} ><Link to="/privacy">Privacy Policy</Link></Menu.Item>
        </SubMenu>
        <Menu.Item style={{ color: '#000' }} key="10" icon={<MessageOutlined />}>
          <Link to="/feedback" style={{  }}>Feedback</Link>
        </Menu.Item>
        <Menu.Item style={{ color: '#000' }} icon={<LogoutOutlined />}>
          <Link to="#" style={{  }}>Logout</Link>
        </Menu.Item>
        {/* <Menu.Item key="9" icon={<FileOutlined />} /> */}
      </Menu>
    </Sider>                           
  );
};

const matStateToProps = state => ({
  auth: state.auth
})

//ReactDOM.render(<Welcome />, document.getElementById('container'));
export default connect(matStateToProps)(Welcome);