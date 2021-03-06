import React, { Component } from "react";
import { Card, Checkbox } from 'antd';

const gridStyle = {
  width: '45%',
  //minHeight: '50%',
  minHeight: 350,
  textAlign: 'left',
  paddingTop: 40,
  margin:20
};

class Payment extends Component  {

  constructor() {
    super();
    this.state = {
      total: 0,
    };

    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal(input, checked) {
    let { total } = this.state;

    if (checked) {
      total += input;
    } else {
      total -= input;
    }

    this.setState({
      total
    });
  }

  render() {
  return (
    <div>
      <h2 style={{ textAlign: 'center', textDecoration: 'underline', fontSize: 30 }}>ONLINE PAYMENTS</h2>
      {/* <p style={{ textAlign: 'center', color: 'blue' }}>Please select the order and proceed.</p> */}
      <div style={{ marginTop: 40 }}>
        <Card style={{ textAlign: 'center', }} title="Please select the order and proceed">
        <Checkbox.Group>
          <a style={{ color: 'black', textDecoration: 'none' }}>
          <Card.Grid style={gridStyle}>
            {/* <Checkbox key="0" >Hello</Checkbox> */}
            <Checkbox calculateTotal={this.calculateTotal} value={148}>
            <div style={{ display: 'flex' }}>
              <p>Order number</p> <p style={{ paddingLeft: 83 }}>MSPEC000000041</p>
            </div>
             
            <div style={{ display: 'flex' }}>
              <p>Garments Count</p> <p style={{ paddingLeft: 70 }}>1</p>
            </div>
            <div style={{ display: 'flex' }}>
              <p>Final Invoice Amount</p> <p style={{ paddingLeft: 42 }}>148.00</p>
            </div>
            <div style={{ display: 'flex' }}>
              <p>Product Invoice Amount</p> <p style={{ paddingLeft: 25 }}>00</p>
            </div>
            <div style={{ display: 'flex' }}>
              <p>Paid Amount</p> <p style={{ paddingLeft: 95 }}>0</p>
            </div>
            <div style={{ display: 'flex' }}>
              <p>Payable Amount</p> <p style={{ paddingLeft: 74 }}>148.00</p>
            </div>
            <div style={{ display: 'flex' }}>
              <p>Download</p> <p style={{ paddingLeft: 114 }}><a>Click here to download monthly invoice</a></p>
            </div>
            </Checkbox>
          </Card.Grid>
          </a>
            {/* <Card.Grid hoverable={false} style={gridStyle}>Content</Card.Grid> */}
            <a style={{ color: 'black', textDecoration: 'none' }}>
            <Card.Grid style={gridStyle}>
              {/* <Checkbox key="1"></Checkbox> */}
              <Checkbox calculateTotal={this.calculateTotal} value={158}>
              <div style={{ display: 'flex' }}>
                <p>Order number</p> <p style={{ paddingLeft: 83 }}>MSPEC000000041</p>
              </div>
              
              <div style={{ display: 'flex' }}>
                <p>Garments Count</p> <p style={{ paddingLeft: 70 }}>1</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Final Invoice Amount</p> <p style={{ paddingLeft: 42 }}>148.00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Product Invoice Amount</p> <p style={{ paddingLeft: 25 }}>00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Paid Amount</p> <p style={{ paddingLeft: 95 }}>0</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Payable Amount</p> <p style={{ paddingLeft: 74 }}>158.00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Download</p> <p style={{ paddingLeft: 114 }}><a>Click here to download monthly invoice</a></p>
              </div>
              </Checkbox>
            </Card.Grid>
            </a>
            <a style={{ color: 'black', textDecoration: 'none' }}>
            <Card.Grid style={gridStyle}>
              <Checkbox calculateTotal={this.calculateTotal} value={168}>
              <div style={{ display: 'flex' }}>
                <p>Order number</p> <p style={{ paddingLeft: 83 }}>MSPEC000000041</p>
              </div>
              
              <div style={{ display: 'flex' }}>
                <p>Garments Count</p> <p style={{ paddingLeft: 70 }}>1</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Final Invoice Amount</p> <p style={{ paddingLeft: 42 }}>148.00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Product Invoice Amount</p> <p style={{ paddingLeft: 25 }}>00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Paid Amount</p> <p style={{ paddingLeft: 95 }}>0</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Payable Amount</p> <p style={{ paddingLeft: 74 }}>168.00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Download</p> <p style={{ paddingLeft: 114 }}><a>Click here to download monthly invoice</a></p>
              </div>
              </Checkbox>
            </Card.Grid>
            </a>
            <a style={{ color: 'black', textDecoration: 'none' }}>
            <Card.Grid style={gridStyle}>
              <Checkbox calculateTotal={this.calculateTotal} value={178}>
              <div style={{ display: 'flex' }}>
                <p>Order number</p> <p style={{ paddingLeft: 83 }}>MSPEC000000041</p>
              </div>
              
              <div style={{ display: 'flex' }}>
                <p>Garments Count</p> <p style={{ paddingLeft: 70 }}>1</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Final Invoice Amount</p> <p style={{ paddingLeft: 42 }}>148.00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Product Invoice Amount</p> <p style={{ paddingLeft: 25 }}>00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Paid Amount</p> <p style={{ paddingLeft: 95 }}>0</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Payable Amount</p> <p style={{ paddingLeft: 74 }}>178.00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Download</p> <p style={{ paddingLeft: 114 }}><a>Click here to download monthly invoice</a></p>
              </div>
              </Checkbox>
            </Card.Grid>
            </a>
            <a style={{ color: 'black', textDecoration: 'none' }}>
            <Card.Grid style={gridStyle}>
              <Checkbox calculateTotal={this.calculateTotal} value={188}>
              <div style={{ display: 'flex' }}>
                <p>Order number</p> <p style={{ paddingLeft: 83 }}>MSPEC000000041</p>
              </div>
              
              <div style={{ display: 'flex' }}>
                <p>Garments Count</p> <p style={{ paddingLeft: 70 }}>1</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Final Invoice Amount</p> <p style={{ paddingLeft: 42 }}>148.00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Product Invoice Amount</p> <p style={{ paddingLeft: 25 }}>00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Paid Amount</p> <p style={{ paddingLeft: 95 }}>0</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Payable Amount</p> <p style={{ paddingLeft: 74 }}>188.00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Download</p> <p style={{ paddingLeft: 114 }}><a>Click here to download monthly invoice</a></p>
              </div>
              </Checkbox>
            </Card.Grid>
            </a>
            <a style={{ color: 'black', textDecoration: 'none' }}>         
            <Card.Grid style={gridStyle}>
              <Checkbox calculateTotal={this.calculateTotal} value={198}>
              <div style={{ display: 'flex' }}>
                <p>Order number</p> <p style={{ paddingLeft: 83 }}>MSPEC000000041</p>
              </div>
              
              <div style={{ display: 'flex' }}>
                <p>Garments Count</p> <p style={{ paddingLeft: 70 }}>1</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Final Invoice Amount</p> <p style={{ paddingLeft: 42 }}>148.00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Product Invoice Amount</p> <p style={{ paddingLeft: 25 }}>00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Paid Amount</p> <p style={{ paddingLeft: 95 }}>0</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Payable Amount</p> <p style={{ paddingLeft: 74 }}>198.00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Download</p> <p style={{ paddingLeft: 114 }}><a>Click here to download monthly invoice</a></p>
              </div>
              </Checkbox>
            </Card.Grid>
            </a> 
            <a style={{ color: 'black', textDecoration: 'none' }}>          
            <Card.Grid style={gridStyle}>
              <Checkbox calculateTotal={this.calculateTotal}  value={138}>
              <div style={{ display: 'flex' }}>
                <p>Order number</p> <p style={{ paddingLeft: 83 }}>MSPEC000000041</p>
              </div>
              
              <div style={{ display: 'flex' }}>
                <p>Garments Count</p> <p style={{ paddingLeft: 70 }}>1</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Final Invoice Amount</p> <p style={{ paddingLeft: 42 }}>148.00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Product Invoice Amount</p> <p style={{ paddingLeft: 25 }}>00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Paid Amount</p> <p style={{ paddingLeft: 95 }}>0</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Payable Amount</p> <p style={{ paddingLeft: 74 }}>138.00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Download</p> <p style={{ paddingLeft: 114 }}><a>Click here to download monthly invoice</a></p>
              </div>
              </Checkbox>
            </Card.Grid>
            </a>  
            <a style={{ color: 'black', textDecoration: 'none' }}>        
            <Card.Grid style={gridStyle}>
              <Checkbox calculateTotal={this.calculateTotal} value={128}>
              <div style={{ display: 'flex' }}>
                <p>Order number</p> <p style={{ paddingLeft: 83 }}>MSPEC000000041</p>
              </div>
              
              <div style={{ display: 'flex' }}>
                <p>Garments Count</p> <p style={{ paddingLeft: 70 }}>1</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Final Invoice Amount</p> <p style={{ paddingLeft: 42 }}>148.00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Product Invoice Amount</p> <p style={{ paddingLeft: 25 }}>00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Paid Amount</p> <p style={{ paddingLeft: 95 }}>0</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Payable Amount</p> <p style={{ paddingLeft: 74 }}>128.00</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>Download</p> <p style={{ paddingLeft: 114 }}><a>Click here to download monthly invoice</a></p>
              </div>
              </Checkbox>
            </Card.Grid> 
            </a>  
          </Checkbox.Group>        
        </Card>
      </div>
      <div>
        <Card style={{ width: '100%', background: '#F7F6F7' }}>
          <p>Grand Total : {this.state.total}</p>          
        </Card>
      </div>
      {/* <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" style={{ minHeight: 300, minWidth: '90%' }} hoverable={true} bordered>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" style={{ minHeight: 300, minWidth: '90%' }} hoverable={true} bordered>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" style={{ minHeight: 300, minWidth: '90%' }} hoverable={true} bordered>
              Card content
            </Card>
          </Col>
        </Row>
      </div> */}
    </div> 
  );
  };
}

export default Payment;
