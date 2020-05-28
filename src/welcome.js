// import React from 'react';
// //import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import 'antd/dist/antd.css';
// import './index.css';
// import { Layout, Menu, Breadcrumb } from 'antd';
// import {
//   UserOutlined,
//   ShoppingCartOutlined,
//   CreditCardOutlined,
//   TagOutlined,
//   ClockCircleOutlined,
//   InfoCircleOutlined,
//   MessageOutlined,
//   LogoutOutlined,
//   HeatMapOutlined,
//   UnorderedListOutlined,
//   ExclamationCircleOutlined
// } from '@ant-design/icons';

// import Wash from './Wash';
// import Profile from './Profile';
// import Orders from './Orders';
// import Payment from './Payment';
// import Offers from './Offers';
// import Feedback from './Feedback';
// //import Logout from './Logout';
// import Tnc from './tnc';
// import Privacy from './Privacy';

// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

// const routes = [
//   {
//     path: "/Wash",
//     main: () => <Wash />
//   },
//   {
//     path: "/Profile",
//     main: () => <Profile />
//   },
//   {
//     path: "/Orders",
//     main: () => <Orders />
//   },
//   {
//     path: "/Payment",
//     main: () => <Payment />
//   },
//   {
//     path: "/Offers",
//     main: () => <Offers />
//   },
//   {
//     path: "/Feedback",
//     main: () => <Feedback />
//   },
//   /* {
//     path: "/Logout",
//     main: () => <Logout />
//   }, */
//   {
//     path: "/tnc",
//     main: () => <Tnc />
//   },
//   {
//     path: "/Privacy",
//     main: () => <Privacy />
//   },
// ];

// class Welcome extends React.Component {
//   state = {
//     collapsed: false,
//   };

//   onCollapse = collapsed => {
//     console.log(collapsed);
//     this.setState({ collapsed });
//   };

//   render() {
//     return (
//       <Router>
//       <Layout style={{ minHeight: '100vh' }}>
//         <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ backgroundColor: '#F7F6F7', overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
//           <div className="logo" style={{ flex: 1, color: '#000', textAlign: 'center', padding: 19 }}>Welcome</div>
//           <Menu style={{ backgroundColor: '#F7F6F7' }} theme="dark" defaultSelectedKeys={['1']} mode="inline">
          
//             <Menu.Item style={{ color: '#000' }} key="1" icon={<ClockCircleOutlined />}>
//               <Link to="/Wash" style={{ color: '#000' }}>Schedule Wash</Link>              
//             </Menu.Item>
          
//             <Menu.Item style={{ color: '#000' }} key="2" icon={<UserOutlined />}>
//               <Link to="/Profile" style={{ color: '#000' }}>Profile</Link>
//             </Menu.Item>
//             <Menu.Item style={{ color: '#000' }} key="3" icon={<ShoppingCartOutlined />}>
//               <Link to="/Orders" style={{ color: '#000' }}>Orders</Link>
//             </Menu.Item>
//             <Menu.Item style={{ color: '#000' }} key="4" icon={<CreditCardOutlined />}>
//               <Link to="/Payment" style={{ color: '#000' }}>Payment</Link>
//             </Menu.Item>
//             <Menu.Item style={{ color: '#000' }} key="5" icon={<TagOutlined />}>
//               <Link to="/Offers" style={{ color: '#000' }}>Offers</Link>
//             </Menu.Item>            
//             <SubMenu style={{ color: '#000' }} key="sub1" icon={<InfoCircleOutlined />} title="Our Info">
//               <Menu.Item style={{ color: '#000' }} key="8" icon={<InfoCircleOutlined />} >About Us</Menu.Item>
//               <Menu.Item style={{ color: '#000' }} key="9" icon={<HeatMapOutlined />} >Locate Us</Menu.Item>
//               <Menu.Item style={{ color: '#000' }} key="10" icon={<UnorderedListOutlined />} ><Link to="/tnc">Terms & Conditions</Link></Menu.Item>
//               <Menu.Item style={{ color: '#000' }} key="11" icon={<ExclamationCircleOutlined />} ><Link to="/Privacy">Privacy Policy</Link></Menu.Item>
//             </SubMenu>
//             <Menu.Item style={{ color: '#000' }} key="6" icon={<MessageOutlined />}>
//               <Link to="/Feedback" style={{ color: '#000' }}>Feedback</Link>
//             </Menu.Item>
//             <Menu.Item style={{ color: '#000' }} key="7" icon={<LogoutOutlined />}>
//               <Link to="/" style={{ color: '#000' }}>Logout</Link>
//             </Menu.Item>
//             {/* <Menu.Item key="9" icon={<FileOutlined />} /> */}
//           </Menu>
//         </Sider>
//           <Switch>
//             {routes.map((route, index) => (
//               // You can render a <Route> in as many places
//               // as you want in your app. It will render along
//               // with any other <Route>s that also match the URL.
//               // So, a sidebar or breadcrumbs or anything else
//               // that requires you to render multiple things
//               // in multiple places at the same URL is nothing
//               // more than multiple <Route>s.
//               <Route key={index} path={route.path} exact={route.exact} />
//             ))}
//           </Switch>
//         <Layout className="site-layout" style={{ backgroundColor: '#FFF', marginLeft: 200 }}>
//           <Header className="site-layout-background" style={{ padding: 0, background: '#F7F6F7' }} />
//           <Content style={{ margin: '0 16px', overflow: 'initial' }}>
//             {/* <Breadcrumb style={{ margin: '16px 0' }}>
//               <Breadcrumb.Item>User</Breadcrumb.Item>
//               <Breadcrumb.Item>Bill</Breadcrumb.Item>
//             </Breadcrumb> */}
//             <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//               {/* Bill is a cat. */}
//               <Switch>
//                 {routes.map((route, index) => (
//                   // Render more <Route>s with the same paths as
//                   // above, but different components this time.
//                   <Route
//                     key={index}
//                     path={route.path}
//                     exact={route.exact}
//                     children={<route.main />}
//                   />
//                 ))}
//               </Switch>
//             </div>
//           </Content>
//           {/* <Footer style={{ textAlign: 'center' }}>Fabricspa.com</Footer> */}
//         </Layout>
//       </Layout>
//       </Router>
//     );
//   }
// }

// //ReactDOM.render(<Welcome />, document.getElementById('container'));
// export default Welcome;

import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
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
import Routes from './Routes';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class welcome extends Component {

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { match } = this.props;
    console.log(match)
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ backgroundColor: '#F7F6F7', overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
          <div className="logo" style={{ flex: 1, color: '#000', textAlign: 'center', padding: 19 }}>Welcome</div>
          <Menu style={{ backgroundColor: '#F7F6F7' }} theme="dark" defaultSelectedKeys={['1']} mode="inline">
          
            <Menu.Item style={{ color: '#000' }} key="1" icon={<ClockCircleOutlined />}>
              <Link to="/wash" style={{ color: '#000' }}>Schedule Wash</Link>              
            </Menu.Item>
          
            <Menu.Item style={{ color: '#000' }} key="2" icon={<UserOutlined />}>
              <Link to="/profile" style={{ color: '#000' }}>Profile</Link>
            </Menu.Item>
            <Menu.Item style={{ color: '#000' }} key="3" icon={<ShoppingCartOutlined />}>
              <Link to="/orders" style={{ color: '#000' }}>Orders</Link>
            </Menu.Item>
            <Menu.Item style={{ color: '#000' }} key="4" icon={<CreditCardOutlined />}>
              <Link to="/payment" style={{ color: '#000' }}>Payment</Link>
            </Menu.Item>
            <Menu.Item style={{ color: '#000' }} key="5" icon={<TagOutlined />}>
              <Link to="/offers" style={{ color: '#000' }}>Offers</Link>
            </Menu.Item>            
            <SubMenu style={{ color: '#000' }} key="sub1" icon={<InfoCircleOutlined />} title="Our Info">
              <Menu.Item style={{ color: '#000' }} key="8" icon={<InfoCircleOutlined />} >About Us</Menu.Item>
              <Menu.Item style={{ color: '#000' }} key="9" icon={<HeatMapOutlined />} >Locate Us</Menu.Item>
              <Menu.Item style={{ color: '#000' }} key="10" icon={<UnorderedListOutlined />} ><Link to="/tnc">Terms & Conditions</Link></Menu.Item>
              <Menu.Item style={{ color: '#000' }} key="11" icon={<ExclamationCircleOutlined />} ><Link to="/Privacy">Privacy Policy</Link></Menu.Item>
            </SubMenu>
            <Menu.Item style={{ color: '#000' }} key="6" icon={<MessageOutlined />}>
              <Link to="/feedback" style={{ color: '#000' }}>Feedback</Link>
            </Menu.Item>
            <Menu.Item style={{ color: '#000' }} key="7" icon={<LogoutOutlined />}>
              <Link to="/" style={{ color: '#000' }}>Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout  className="site-layout" style={{ backgroundColor: '#FFF', marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0, background: '#F7F6F7' }} />
          <Content>
            <Routes match={match} />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default welcome;