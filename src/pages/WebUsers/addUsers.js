import React, { Component } from "react";
import { Card, CardBody, Col, Row, CardTitle, CardSubtitle,Container, Button, Input, Label, FormGroup, Form, Table } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import firebase from '../../firebase'

class AddUsers extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            displayName: '',
            password: '',
            firebaseData: []
         };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
      }

      componentDidMount() {
        let comp = this
        firebase.firestore().collection("WebUsers")
        .onSnapshot(function(querySnapshot) {
            var cities = [];
            querySnapshot.forEach(function(doc) {
              const lock = {
                Name: doc.data().Name,
                Username: doc.data().Username,
                Password: doc.data().Password,
              }
              cities.push(lock)
            });
            comp.setState({
              firebaseData: cities
            })
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

                        <Breadcrumbs title="User Management" breadcrumbItem="Add Web Users" />
                <Row>
                    <Col>
                        <Card>
                        <CardBody>
                        <Form id = "create-form">
                        <Row>
                        <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Name<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="displayName"
                                      placeholder="Display Name"
                                      type="text"
                                      className="form-control"
                                      id="displayName"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                                <Col md= {{size: 4, offset: 2}}>
                                    <FormGroup>
                                        <Label htmlFor="validationCustom03">Username</Label>
                                        <Input
                                        name="username"
                                        placeholder="UserName"
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        onChange = {this.handleChange.bind(this)}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom04">Password<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="password"
                                      placeholder="Password"
                                      type="password"
                                      className="form-control"
                                      id="password"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <br />


                        
                                               
                        <Button color="primary" onClick = {this.handleSubmit.bind(this)} type="submit">Submit</Button>
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

                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                <div className="table-responsive" data-pattern="priority-columns">
                                            <Table className="table mb-0 table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                            <th>Sl.No</th>
                                                            <th>Name</th>
                                                            <th>Username</th>
                                                            <th>Password</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.state.firebaseData.map((rowData, index) => (
                                                    <tr key = {index}>
                                                        <td>{index + 1}</td>
                                                        <td>{rowData.Name}</td>
                                                        <td>{rowData.Username}</td>
                                                        <td>{rowData.Password}</td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </Table>
                                        </div>
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

export default AddUsers;
