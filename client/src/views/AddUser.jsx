import React from "react";
import axios from "axios";
import Select from 'react-select';


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class AddUser extends React.Component {
  constructor(){
    super();

    this.state={
      username:'',
      email:'',
      role:'',
      password:'',
      message:'',
      role:'',
      isAproved:false,
      errors:{}
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  handleChange(role){
    this.setState({role})
  }

  onSubmit(e){
    e.preventDefault();

    const newUser={
      username:this.state.username,
      email:this.state.email,
      role:this.state.role.value,
      password:this.state.password,
      password2:this.state.password2,
      isAproved:this.state.isAproved
    }
    axios.post('/api/users/register', newUser)
    .then((data)=>{ this.props.history.push("/admin/users")})
    .catch(err=>{
      console.log(err)
    })
  }
  render() {
    console.log(this.state.role);
    const options=[{
        label: "admin",
        value: 'admin'
    }]
    return (
        <div className="content">
          <Row>
            <Col  lg={{ size: 6, order: 2, offset: 0 }} md="6">
              <Card>
                <CardHeader>
                  <h3 className="title">Add User </h3>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.onSubmit} >
                    <Row>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label> First Name </label>
                          <Input
                            placeholder="Username"
                            type="text"
                            name='username'
                            value={this.state.username}
                            onChange={this.onChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label htmlFor="email">
                            Email address
                          </label>
                          <Input
                            id="email"
                            placeholder="Email "
                            type="email"
                            name='email'
                            value={this.state.email}
                            onChange={this.onChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                       <Col className="pr-md-1" md="6">
                       <FormGroup>
                            <label for="exampleSelect">Role</label>
                            <Select
                            options={ options }
                            value={this.state.role}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                       </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Password</label>
                          <Input
                            placeholder="Password"
                            type="password"
                            name='password'
                            value={this.state.password}
                            onChange={this.onChange}
                          />
                        </FormGroup>
                      </Col>

                      <Col md="6">
                        <FormGroup>
                          <label>Confirm Password</label>
                          <Input
                            placeholder="Confirm Password"
                            type="password"
                            name='password2'
                            value={this.state.password2}
                            onChange={this.onChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <CardFooter>
                      <Button className="btn-fill" color="primary" type="submit">
                        Sign Up
                      </Button>
                    </CardFooter>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col md="3"></Col>
          </Row>
        </div>
    );
  }
}

export default AddUser;
