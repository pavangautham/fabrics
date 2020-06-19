import React from 'react';
import { Layout } from 'antd';
import Welcome from './Components/sidebar/welcome';
import Routes from './Routes';

const { Content, Header, Footer } = Layout;

const MainLayout = ({ match }) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Welcome />
            <Layout className="site-layout" style={{ backgroundColor: '#FFF' }}>
                {/* <Header className="site-layout-background" style={{ padding: 0, background: '#F7F6F7', backgroundImage: 'url(images/newlogo.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%' }} /> */}
                <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb> */}
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Routes match={match} />
                    </div>
                </Content>
                {/* <Footer style={{ textAlign: 'center' }}>Fabricspa.com</Footer> */}
            </Layout>
        </Layout>
    );
};

export default MainLayout;