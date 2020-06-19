import React from 'react';
import { Tabs, Radio } from 'antd';
import Cancelledpickup from './Cancelledpickup';
import Orderscancelled from './Orderscancelled';

const { TabPane } = Tabs;

class CancelledOrder extends React.Component {
  state = { size: 'large' };

  onChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>                
        <Tabs tabBarStyle={{ 
            display: 'flex', 
            justifyContent: 'center',
            marginTop: 40, 
        }}
        defaultActiveKey="1" type="card" size={size}
        >
          <TabPane tab="Cancelled Pickups" key="1">
            <div>
              <p style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 30, marginBottom: 40, fontSize: 30 }} >Cancelled Pickups</p>
            </div>
            <Cancelledpickup />            
          </TabPane>
          <TabPane tab="Cancelled Orders" key="2">
            <div>
              <p style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 30, marginBottom: 40, fontSize: 30 }} >Cancelled Orders</p>
            </div>
            <Orderscancelled />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default CancelledOrder;