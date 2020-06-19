import React from "react";

import {  Radio, Checkbox, DatePicker, Select, Button, Input, Breadcrumb, Modal  } from 'antd';
import { PoundOutlined, QuestionOutlined  } from '@ant-design/icons';
import './WashStyles.css';

const { Option } = Select;

function handleChange(value) {
  console.log(value); // { key: "lucy", label: "Lucy (101)" }
}

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

//const plainOptions = ['Apple', 'Pear', 'Orange'];
const radio = [
  { label: 'Regular', value: 'Regular' },
  { label: 'Express', value: 'Express' },
  { label: 'Premium', value: 'Premium' },
];

const checkbox = [
  { label: 'Wash & Steam Press', value: 'Wash & Steam Press' },
  { label: 'Steam Press Only', value: 'Steam Press Only' },
  { label: 'Dry Cleaning & Steam Press', value: 'Dry Cleaning & Steam Press' },
];


function onChanges(date, dateString) {
  console.log(date, dateString);
}

class Wash extends React.Component {
  state = {
    //value1: 'Apple',
    value2: 'Regular',
    //value3: 'Apple',
    visible: false
  };

  showModal = (e) => {
    this.setState({
      visible: true,
      value2: e.target.value, 
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
      //value2: e.target.value,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      value2: 'Regular'
    });
  };

  onChange2 = e => {
    console.log('radio2 checked', e.target.value);
    this.setState({
      value2: e.target.value, 
    });
  };


  render() {
    //const { value1, value2, value3 } = this.state;
    const { value2 } = this.state;
    return (
      <>
        <Breadcrumb style={{ margin: '16px 0', fontWeight: 'bold', fontSize: 20 }}>
          <Breadcrumb.Item>Schedule Wash</Breadcrumb.Item>
          {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
        </Breadcrumb>
        <div >
        <form>
        <div style = {{ boxShadow: '2px 1px 3px 2px #9E9E9E', padding: 20, width: '85%' }}>
        <div>
          <p style={{fontWeight: 'bold'}}>Service Type</p>
        </div>
        
        {/* <Radio.Group options={plainOptions} onChange={this.onChange1} value={value1} /> */}
        {/* <Button onClick={this.showModal}> */}
        <Radio.Group /* className="ant-radio" */ options={radio} onChange={this.showModal} value={value2} />
        {/* </Button> */}
        <Modal
          title="Terms And Conditions"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" onClick={this.handleOk}>
              Agree
            </Button>,
          ]}
        >
          <p>1. Express service shall be scheduled before 6 PM. Express service cannot be guaranteed if it is scheduled after 6 PM.</p>
          <p>2. Delivery for Express services will be done on the next business day.</p>
          <p>3. Cost of the express services will be double than the regular service</p>
          <p>4. Fabricspa have all the rights to cancel/modify/change the T&C without prior notice</p>
          <p>5. Fabricspa shall not be responsible if the express delivery is delayed due to any unforeseen circumstances</p>
          <p>6. Avail ONLY on Regular garments like Shirts, Trousers, Tops, Salwar, Kameez, Kurta/Kurthis, Blazers, T-Shirts, Jeans & Shorts.</p>
          <p>7. Garments like Sarees, Carpets, Curtains, Quilts, Blankets i.e. any Homelinens & heavy garments will not be accepted for Express wash.</p>
        </Modal>
        {/* <Radio.Group
          options={optionsWithDisabled}
          onChange={this.onChange3}
          value={value3}
        /> */}
        </div>
        <div style = {{ boxShadow: '2px 1px 3px 2px #9E9E9E', padding: 20, marginTop: 20, width: '85%' }}>
        <div style={{ marginTop: 20 }}>
          <p style={{fontWeight: 'bold'}}>Wash Type</p>
        </div>
        <Checkbox.Group /* className="ant-checkbox" */ options={checkbox} defaultValue={['Wash & Steam Press']} onChange={onChange} />
        <div style={{ display: 'flex' }}>
          <div style={{ marginTop: 20 }}>
            <p style={{fontWeight: 'bold'}}>Pick Up Date</p>
            <DatePicker style={{ border: '1px solid #rgb(105,105,105)' }} onChange={onChanges} />
          </div>
          <div style={{ marginTop: 20, marginLeft: 18}}>
            <p style={{fontWeight: 'bold'}}>Time Slot</p>
            <Select
              labelInValue
              defaultValue={{ key: 'Select Time' }}
              style={{ width: 150 }}
              onChange={handleChange}
            >
              <Option value="8AM-10AM">8AM - 10AM</Option>
              <Option value="10AM-1PM">10AM - 1PM</Option>
              <Option value="1PM-5PM">1PM - 5PM</Option>
              <Option value="5PM-7PM">5PM - 7PM</Option>
            </Select>
          </div>
        </div>  
        <div style={{ marginTop: 20 }}>
          <p style={{fontWeight: 'bold'}}>Pick Up Address</p>
          <Button style={{ backgroundColor: '#055da0', color: '#FFF' }}>Add Address</Button>
        </div>        
        <div style={{ marginTop: 20 }}>
          <p style={{fontWeight: 'bold'}}>Promo Code</p>
          <Input style={{ width: '40%' }} placeholder="Promo Code" />
          <Button style={{ backgroundColor: '#055da0', color: '#FFF' }}>APPLY</Button>
        </div>
        <div style={{ marginTop: 20 }}> 
          {/* <DownloadOutlined style={{ color: '#fff', backgroundColor: '#e21f27', borderRadius: 5 }}/>                    */}
          {/* <Button /* icon={<PoundOutlined style={{ color: '#fff', background: '#e21f27' }}/>} style={{ color: '#FFF', backgroundColor: '#055da0', borderRadius: 5 }}>Get Rate Card</Button> */}
          <a style={{ textDecoration: 'underline' }}>Get Rate Card</a>
          {/* <Button style={{  color: '#FFF', backgroundColor: '#055da0', borderRadius: 5 }}>Check Promo Codes <QuestionOutlined style={{ background: '#e21f27' }}/></Button> */}
          <a style={{ textDecoration: 'underline', marginLeft: 20 }}>Check Promo Codes</a>
        </div>       
        <div style={{ marginTop: 20 }}>          
          <Button type="submit" style={{ backgroundColor: '#055da0', color:'#FFF', fontWeight: 'bold', height: 45 }}>SCHEDULE NOW</Button>          
        </div>      
        </div> 
      </form>
      </div>
      </>
    );
  }
}

export default Wash;