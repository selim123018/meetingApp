import React ,{Component , useState} from 'react'
import axios from 'axios';
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";
import Select from 'react-select';

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
import { homedir } from 'os';

class Home extends Component{
    constructor(){
        super();
        this.state={
          meeting:[]
        }
    }
    componentDidMount(){
        axios.get('/api/meeting/allMeeting')
        .then(meeting=>{
            this.setState({
                meeting:meeting.data
            })
        })
        .catch(err=>console.log(err));
        console.log(this.state)
    }

    render(){


    return (
      <>
        <div className="content">

          <Row >
            <Col  lg={{ size: 6, order: 2, offset: 3 }} md="12">
              <Card className="">
                <CardHeader>
                  <h3 className="title d-inline">Today's Meeting </h3>
                </CardHeader>
                <CardBody>
                  <div className="">
                    <Table>
                      <tbody>
                        {this.state.meeting.map(meeting=>{
                          return(
                            <tr>
                              <td>
                                <h4 className="title">{meeting.title}</h4>
                                <p className="text-muted"> {meeting.date} </p>
                              </td>
                              <td className="td-actions text-right">
                                <Button
                                  color="link"
                                  id="tooltip217595172"
                                  title=""
                                  type="button"
                                >
                                  <i className="tim-icons icon-pencil" />
                                </Button>
                                <UncontrolledTooltip
                                  delay={0}
                                  target="tooltip217595172"
                                  placement="right"
                                >
                                  Edit Meeting
                                </UncontrolledTooltip>
                              </td>
                            </tr>

                          )

                        })}
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
    }
}

export default Home;