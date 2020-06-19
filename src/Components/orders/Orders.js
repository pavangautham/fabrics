import React from 'react';
import { Tabs } from 'antd';
import './Orders.css';
import ActiveOrder from './ActiveOrder';
import CompletedOrder from './CompletedOrder';
import CancelledOrder from './CancelledOrder';

const { TabPane } = Tabs;

class Demo extends React.Component {
  state = { size: 'large' };

  onChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div style={{ marginTop: 40 }}>        
        <Tabs defaultActiveKey="1" type="card" size={size}>
          <TabPane tab="Active" key="1">
            <div>
              <p style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 30, marginBottom: 40, fontSize: 30 }} >Active Orders</p>
            </div>
            <ActiveOrder />
          </TabPane>
          <TabPane tab="Completed" key="2">
            <div>
              <p style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 30, marginBottom: 40, fontSize: 30 }} >Completed Orders</p>
            </div>
            <CompletedOrder />
          </TabPane>
          <TabPane tab="Cancelled" key="3">            
            <CancelledOrder />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Demo;