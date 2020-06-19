import React, { useState } from 'react';
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

const Welcome = () => {

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = () => {
        setCollapsed(!collapsed)
    }

  return (
    
    <Sider className="ant-layout" collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ backgroundColor: '#F7F6F7' }}>
      <div className="logo" style={{ marginLeft: 7 }}> <img src="/images/fab1.png" /> </div>
      {/* <div className="logo" style={{  color: '#000', textAlign: 'center', padding: 19 }}>Welcome Pavan</div> */}
      <Menu /* className="ant-menu-item" */ style={{ backgroundColor: '#F7F6F7' }} theme="light" defaultSelectedKeys={['1']} mode="inline">
      
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
          <Menu.Item style={{ color:'#000' }} key="8" icon={<InfoCircleOutlined />} ><Link>About Us</Link></Menu.Item>
          <Menu.Item style={{ color:'#000' }} key="9" icon={<HeatMapOutlined />} ><Link>Locate Us</Link></Menu.Item>
          <Menu.Item style={{ color:'#000' }} key="10" icon={<UnorderedListOutlined />} ><Link to="/tnc">Terms & Conditions</Link></Menu.Item>
          <Menu.Item style={{ color:'#000' }} key="11" icon={<ExclamationCircleOutlined />} ><Link to="/privacy">Privacy Policy</Link></Menu.Item>
        </SubMenu>
        <Menu.Item style={{ color: '#000' }} key="6" icon={<MessageOutlined />}>
          <Link to="/feedback" style={{  }}>Feedback</Link>
        </Menu.Item>
        <Menu.Item style={{ color: '#000' }} key="7" icon={<LogoutOutlined />}>
          <Link to="/" style={{  }}>Logout</Link>
        </Menu.Item>
        {/* <Menu.Item key="9" icon={<FileOutlined />} /> */}
      </Menu>
    </Sider>                           
  );
};

//ReactDOM.render(<Welcome />, document.getElementById('container'));
export default Welcome;