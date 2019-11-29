import React from "react";
import axios from 'axios'
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Tables extends React.Component {
  constructor(){
    super();
    this.state={
        user:[]
    }
  }
  componentDidMount(){
      axios.get('/api/users/all')
      .then(user=>{
          this.setState({
              user:user.data
          })
      })
      .catch(err=>console.log(err));
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Simple Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Approved</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.user.map(user=>{
                      return(
                        <tr>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>Edit</td>
                          <td>Delete</td>
                          <td>Approved</td>
                        </tr>
                      )
                    })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
