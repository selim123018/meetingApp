
import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import Select from 'react-select';
import axios from 'axios';


// reactstrap components
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  Row,
  Alert,
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
      title:'',
      user:'',
      startTime:'',
      endTime:'',
      date: new Date(),
      modal: false,
      meeting:[],
      message:'',
      create:false
    };
    this.valueChange=this.valueChange.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  valueChange = date => this.setState({ date:date, modal:!this.state.modal})

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  handleChange(user){
    this.setState({user})
  }

  onSubmit(e){
    e.preventDefault();

    const newMeeting={
      title:this.state.title,
      user:this.state.user.value,
      startTime:this.state.startTime,
      endTime:this.state.endTime,
      date:this.state.date
    }
    axios.post('/api/meeting/newMeeting', newMeeting)
    .then(res=>{ window.alert('Meeting Created Successfully!')})
    .catch(err=>{
      console.log(err)
    })
  }
  componentDidMount(){
    axios.get('/api/meeting/allMeeting')
    .then(meeting=>{
        console.log(meeting)
        this.setState({
            meeting:meeting.data
        })
    })
    .catch(err=>console.log(err));
  }

  render() {
    console.log(this.state.message);
    const options=[
      {
      label: "monte",
      value: 'monte'
      }
    ]
    return (
      <>

        <div className="content">
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
                         <Upcomming admin={this.state.admin} meeting={this.state.meeting}/>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="12">
            <Card className="calander-card">
                <CardHeader>
                  <h4 className="title d-inline">Create A Meeting</h4>
                </CardHeader>
                {this.state.create===true ?(
                  <Alert color="secondary">
                    Meeting Created Successfully!
                  </Alert>
                ):null
                }
                <CardBody>
                  <Calender
                    eventClick={this.handleEventClick}
                    onChange={this.valueChange}
                  />
                  <Modal
                  isOpen={this.state.modal}
                  className={this.props.className}
                >
                  <ModalHeader>
                    Create Meeting
                  </ModalHeader>
                  <ModalBody>
                  <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                      <Label for="exampleEmail">Title</Label>
                      <Input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.onChange}
                      />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Select
                      options={ options }
                      value={this.state.user}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Start</Label>
                    <Input
                      type="text"
                      name="startTime"
                      placeholder="Start"
                      value={this.state.startTime}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">End</Label>
                    <Input
                      type="text"
                      name="endTime"
                      placeholder="Title"
                      value={this.state.endTime}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                  <ModalFooter>
                    <Button color="primary" type="submit">Create Meeting</Button>{" "}
                    <Button color="secondary" onClick={this.valueChange}>
                      Cancel
                    </Button>
                  </ModalFooter>
                  </Form>
                  </ModalBody>
                </Modal>
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
