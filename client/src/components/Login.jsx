import React from "react";
import axios from 'axios';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Label
} from "reactstrap";

class Login extends React.Component {
  constructor(){
    super();

    this.state={
      email:'',
      password:''
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
      email:this.state.email,
      password:this.state.password,
    }
    axios.post('/api/users/login', newUser)
    .then((data)=>{
      localStorage.setItem('token', data.data.token)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="3"></Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <h3 className="title text-center">Login Form </h3>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.onSubmit}>
                    <Row>
                      <Col  lg={{ size: 6, order: 2, offset: 3 }} className="px-md-1" md="6">
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
                      <Col   lg={{ size: 6, order: 2, offset: 3 }} className="pl-md-1" md="6">
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
                    </Row>

                    <Col className=""  lg={{ size: 3, order: 0, offset: 3 }} >
                      <CardFooter   >
                        <Button  className="btn-fill" color="primary" type="submit">
                          Sign Up
                        </Button>
                      </CardFooter>
                    </Col>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col md="3"></Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Login;
