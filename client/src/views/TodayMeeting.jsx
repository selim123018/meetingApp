import React ,{Component} from 'react'


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

  
export default class TodayMeeting extends Component{

    render(){
        return(
          <>
          {this.props.upcoming.map(singlepost=>{
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
              </td>:""}
              <td>
                <p className="title"> {singlepost.title} </p>
                <p className="text-muted"> {singlepost.time} </p>
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
              </td>:""}
            </tr>
            )
          })}
          </>
        )
    }
}




// {this.props.TodayMeeting.map(singlepost=>{
//   return(
//     <div>

//     </div>
//   )
// })}