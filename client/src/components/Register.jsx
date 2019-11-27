import React from "react";
import axios from "axios";

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

class Register extends React.Component {
  constructor(){
    super();

    this.state={
      username:'',
      email:'',
      password:'',
      message:'',
      isAproved:false,
      errors:{}
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit(e){
    e.preventDefault();

    const newUser={
      username:this.state.username,
      email:this.state.email,
      password:this.state.password,
      password2:this.state.password2,
      isAproved:this.state.isAproved
    }
    axios.post('/api/users/register', newUser)
    .then((data)=>{ this.props.history.push("/admin/login")})
    .catch(err=>{
      console.log(err)
    })
  }
  render() {
    console.log(this.state.email);
    return (
        <div className="content">
          <Row>
            <Col md="3"></Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <h3 className="title">Registration Here </h3>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.onSubmit} >
                    <Row>
                      <Col className="px-md-1" md="4">
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
                      <Col className="pl-md-1" md="4">
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

                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <label>About you</label>
                          <Input
                            cols="80"
                            placeholder="Here can be your description"
                            rows="4"
                            type="textarea"
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

export default Register;
