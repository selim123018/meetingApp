/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
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
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="3"></Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <h3 className="title">Login Here </h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label htmlFor="email">
                            Email address
                          </label>
                          <Input id="email" placeholder="Email " type="email" />
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
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                        <Col>

                            <FormGroup check>
                            <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                <span className="check" />
                                </span>
                            </Label>
                            </FormGroup>
                            <p>Remamber this device </p>
                        </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Sign Up
                  </Button>
                </CardFooter>
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
