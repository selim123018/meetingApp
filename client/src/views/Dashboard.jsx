
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "../variables/charts.jsx";

// my
import Upcomming from './Upcomming'
import TodayMeeting from './TodayMeeting'
import Calender from 'react-calendar'







class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


      bigChartData: "data1",
      upcoming:[
        {title:'Test Meetting one' , time:'12:30 , 24 Decembar 2019'},
        {title:'Test Meetting two' , time:'12:30 , 24 Decembar 2019'},
        {title:'Test Meetting three' , time:'12:30 , 24 Decembar 2019'},
        {title:'Test Meetting four ' , time:'12:30 , 24 Decembar 2019'},
        {title:'Test Meetting five ' , time:'12:30 , 24 Decembar 2019'},
        {title:'Test Meetting six' , time:'12:30 , 24 Decembar 2019'},
        {title:'Test Meetting seven' , time:'12:30 , 24 Decembar 2019'},
        {title:'Test Meetting eight' , time:'12:30 , 24 Decembar 2019'},
        {title:'Test Meetting nine' , time:'12:30 , 24 Decembar 2019'},
        {title:'Test Meetting ten' , time:'12:30 , 24 Decembar 2019'}
      ],
      tdaysMeeting:[

        {title:'Test Meetting one' , time:'12:30 , 24 Decembar 2019'},
        {title:'Test Meetting two' , time:'12:30 , 24 Decembar 2019'},
        {title:'Test Meetting two' , time:'12:30 , 24 Decembar 2019'},
        {title:'Test Meetting two' , time:'12:30 , 24 Decembar 2019'},
        {title:'Test Meetting two' , time:'12:30 , 24 Decembar 2019'},
        {title:'Test Meetting two' , time:'12:30 , 24 Decembar 2019'},
        {title:'Test Meetting two' , time:'12:30 , 24 Decembar 2019'}

      ],
      admin:false,















    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };


  setAdmin=()=>{
    if(this.state.admin){
      this.setState({
        admin:false
      })
    }else{

    this.setState({
      admin:true
    })
    }
  }



  render() {
    return (
      <>

        <div className="content">
          <Row>
          <button className="btn btn-success" onClick={()=>this.setAdmin()}> {this.state.admin? "Go to User view":"Go to Admin view"} </button>

          </Row>
        <Row>

            <Col lg="6" md="12">
              <Card className="card-tasks">
                <CardHeader>
                  <h3 className="title d-inline">Upcoming Meeting</h3>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                       <tbody>
                         <Upcomming admin={this.state.admin} upcoming={this.state.upcoming}/>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="12">
              <Card className="card-tasks today-card">
                <CardHeader>
                  <h3 className="title d-inline">Today's Meeting</h3>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                       <tbody>
                         <TodayMeeting admin={this.state.admin} upcoming={this.state.tdaysMeeting}/>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            {this.state.admin?
            <Col lg="6" md="12" >

            <Card className="calander-card">
                <CardHeader>
                  <h4 className="title d-inline">Create A Meeting</h4>
                </CardHeader>
                <CardBody>
                  <Calender/>
                </CardBody>
              </Card>
            </Col>:""}
            </Row>
        </div>

      </>
    );
  }
}

export default Dashboard;
