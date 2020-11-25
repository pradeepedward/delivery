import React, { Component } from "react";
import { Card, CardBody, Col, Row, CardTitle, CardSubtitle,Container, Button, Input, Label, FormGroup, Form } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import firebase from '../../firebase'

class PaymentGateway extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            displayName: '',
            password: ''
         };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
      }

      handleSubmit(e) {
        e.preventDefault();

        let data = this.state

        if(data.displayName === '') {
            alert("Enter Name");
            document.getElementById("displayName").focus();
            return;
        }


        if(data.username === '') {
            alert("Enter UserName");
            document.getElementById("username").focus();
            return;
        }

        if(data.password === '') {
            alert("Enter Password");
            document.getElementById("password").focus();
            return;
        }

        firebase.firestore().collection('WebUsers').doc(data.username).set({
            Username: data.username,
            Password: data.password,
            Name: data.displayName,
        })
        .then(function(docRef) {
            alert("Web User Added Successfully!")
            data.username = ""
            data.displayName = ""
            data.password = ""
            document.getElementById("create-form").reset()
        })


    } 

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid={true}>

                        <Breadcrumbs title="Masters" breadcrumbItem="Add Payment Gateway" />
                <Row>
                    <Col>
                        <Card>
                        <CardBody>
                        <Form id = "create-form">
                        <Row>
                        <Col md="6">
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Payment Gateway<span style = {{color: "red"}}>*</span></Label>
                                    <Input type="select" id = "bannerName" name = "bannerName" onChange = {this.handleChange.bind(this)}>
                                        <option value = "Select">Select Payment Gateway</option>
                                        <option value = "Option 1">Option 1</option>
                                        <option value = "Option 2">Option 2</option>
                                    </Input>
                                </FormGroup>
                            </Col>

                                <Col md="6">
                                    <FormGroup>
                                        <Label htmlFor="validationCustom03">Country</Label>
                                        <Input
                                        name="username"
                                        placeholder="Country"
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        onChange = {this.handleChange.bind(this)}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                        <Col md = "6">
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Status<span style = {{color: "red"}}>*</span></Label>
                                    <Input type="select" id = "menu" name = "menu" onChange = {this.handleChange.bind(this)}>
                                    <option value = "Select Status">Select Status</option>
                                    <option value = "Active">Active</option>
                                    <option value = "InActive">InActive</option>
                                
                                </Input>
                                </FormGroup>
                            </Col>
                        </Row>

                        <br />


                        
                                               
                        <Button color="primary" type="submit">Submit</Button>
                                            {/* {this.state.success_msg ? (
											<SweetAlert
												title="Great"
												success
												confirmBtnBsStyle="success"
												onConfirm={() => this.setState({ success_msg: false })}
											>
												Successfully Updated!
											</SweetAlert>
										) : null} */}
                            </Form>
                            </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default PaymentGateway;
