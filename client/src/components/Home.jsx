import React ,{Component} from 'react'
import axios from 'axios';

import {
    Button,
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
    }

    render(){
        return(
          <>
          {this.state.meeting.map(meeting=>{
            return(

              <tr>
                {this.props.admin?
              <td>
                <FormGroup check>
                  <Label check>
                    <Input defaultValue="" type="checkbox" />
                    <span className="form-check-sign">
                      <span className="check" />
                    </span>
                  </Label>
                </FormGroup>
              </td> : ""}
              <td>
                <p className="title"> {meeting.title} </p>
                <p className="text-muted"> {meeting.date} </p>
              </td>
              {this.props.admin?
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
                  Edit Task
                </UncontrolledTooltip>
              </td> :""}
            </tr>
            )
          })}
          </>
        )
    }
}

export default Home;