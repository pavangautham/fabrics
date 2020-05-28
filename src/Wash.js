import React from "react";

import {  Radio, Checkbox, DatePicker, Row, Col, Select  } from 'antd';

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
  };

  /* onChange1 = e => {
    console.log('radio1 checked', e.target.value);
    this.setState({
      value1: e.target.value,
    });
  }; */

  onChange2 = e => {
    console.log('radio2 checked', e.target.value);
    this.setState({
      value2: e.target.value, 
    });
  };

  /* onChange3 = e => {
    console.log('radio3 checked', e.target.value);
    this.setState({
      value3: e.target.value,
    });
  }; */

  render() {
    //const { value1, value2, value3 } = this.state;
    const { value2 } = this.state;
    return (
      <>
        <div>
          <p style={{fontWeight: 'bold'}}>Service Typeeee</p>
        </div>
        
        {/* <Radio.Group options={plainOptions} onChange={this.onChange1} value={value1} /> */}
        <Radio.Group options={radio} onChange={this.onChange2} value={value2} />
        {/* <Radio.Group
          options={optionsWithDisabled}
          onChange={this.onChange3}
          value={value3}
        /> */}
        <div style={{ marginTop: 20 }}>
          <p style={{fontWeight: 'bold'}}>Wash Type</p>
        </div>
        <Checkbox.Group options={checkbox} defaultValue={['Wash & Steam Press']} onChange={onChange} />
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 0 }}>
            <div style={{ marginTop: 20 }}>
              <p style={{fontWeight: 'bold'}}>Pick Up Date</p>
              <DatePicker style={{ border: '1px solid #rgb(105,105,105)' }} onChange={onChanges} />          
            </div>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 0 }}>
            <div style={{ marginTop: 20 }}>
              <p style={{fontWeight: 'bold'}}>Time Slot</p>
              <Select
                labelInValue
                defaultValue={{ key: 'Select Time' }}
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="8AM-10AM">8AM - 10AM</Option>
                <Option value="10AM-1PM">10AM - 1PM</Option>
                <Option value="1PM-5PM">1PM - 5PM</Option>
                <Option value="5PM-7PM">5PM - 7PM</Option>
              </Select>
            </div>
          </Col>                
        </Row>        
      </>
    );
  }
}

//ReactDOM.render(<App />, mountNode);
export default Wash;