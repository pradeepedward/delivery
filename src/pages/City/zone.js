import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Button, Form, FormGroup, Input, Label } from "reactstrap";


//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import firebase from '../../firebase'
import SweetAlert from "react-bootstrap-sweetalert";

class Zone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            cityName: 'Select', 
            zoneName:'',
            radius: '',
            location: '',
            menu: 'Select',
            firebaseData: [],
            success_msg: false,
            pushid: '',
            update_msg: false
        };
    }

    componentDidMount(){
        let newData = []
        firebase.firestore().collection("City").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const lock = {
                    Name: doc.data().Name,
                    PushId: doc.id,
                }
                newData.push(lock)
            });
            this.setState({
                cities: newData
            })
         });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
      }

      handleSubmit(e) {
        e.preventDefault();

        let data = this.state
        let comp = this


        if(data.cityName === 'Select') {
            alert("Select City Name");
            document.getElementById("cityName").focus();
            return;
        }

        if(data.zoneName === '') {
            alert("Enter Zone Name");
            document.getElementById("zoneName").focus();
            return;
        }

        if(data.radius === '') {
            alert("Enter Radius");
            document.getElementById("radius").focus();
            return;
        }

        if(data.location === '') {
            alert("Enter Location Coordinates");
            document.getElementById("location").focus();
            return;
        }

        if(data.menu === 'Select') {
            alert("Select Status");
            document.getElementById("menu").focus();
            return;
        }

        firebase.firestore().collection('City').doc(data.cityName).collection('Zone').add({
            Name: data.zoneName,
            Radius: data.radius,
            Location: data.location,
            Status: data.menu,
        })
        .then(function(docRef) {
            comp.setState({
                success_msg: true
              })
        })

        data.zoneName = ""
        data.radius = ""
        data.location = ""
        data.menu = "Select"
        document.getElementById("create-form").reset()


    }

    updateRow(e) {
        e.preventDefault();

        let data = this.state
        let comp = this


        if(data.zoneName === '') {
            alert("Enter Zone Name");
            document.getElementById("zoneName").focus();
            return;
        }

        if(data.radius === '') {
            alert("Enter Radius");
            document.getElementById("radius").focus();
            return;
        }

        if(data.location === '') {
            alert("Enter Location Coordinates");
            document.getElementById("location").focus();
            return;
        }

        if(data.menu === 'Select') {
            alert("Select Status");
            document.getElementById("menu").focus();
            return;
        }

        firebase.firestore().collection('City').doc(data.cityName).collection('Zone').doc(data.pushid).set({
            Name: data.zoneName,
            Radius: data.radius,
            Location: data.location,
            Status: data.menu,
        })
        .then(function(docRef) {
            comp.setState({
                update_msg: true
              })
        })

        data.zoneName = ""
        data.radius = ""
        data.location = ""
        data.menu = "Select"
        document.getElementById("create-form").reset()

        document.getElementById("cityName").disabled = false

        document.getElementById("submit").style.display = "block"
        document.getElementById("update").style.display = "none"


    }
    
    cityOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

        let cityPushId = e.target.value

        let comp = this
        firebase.firestore().collection("City").doc(cityPushId).collection("Zone")
        .onSnapshot(function(querySnapshot) {
            var cities = [];
            querySnapshot.forEach(function(doc) {
              const lock = {
                Location: doc.data().Location,
                Name: doc.data().Name,
                Radius: doc.data().Radius,
                Status: doc.data().Status,
                PushId: doc.id
              }
              cities.push(lock)
            });
            comp.setState({
              firebaseData: cities
            })
        });
    }

    editRow(key) {
        let data = this.state
        document.getElementById("submit").style.display = "none"
        document.getElementById("update").style.display = "block"

        data.pushid = key.PushId
        data.zoneName = key.Name
        data.radius = key.Radius
        data.location = key.Location
        data.menu = key.Status

        document.getElementById("cityName").disabled = true
        document.getElementById("zoneName").value = key.Name
        document.getElementById("radius").value = key.Radius
        document.getElementById("location").value = key.Location
        document.getElementById("menu").value = key.Status


    }

    delete(key) {
        if (window.confirm('Are you sure you want to delete the zone?')) {
            firebase.firestore().collection('City').doc(this.state.cityName).collection("Zone").doc(key.PushId).delete()
            alert("Successfully Deleted!")
          } else {}
  
    }


    render() {
        console.log(this.props.location.pathname)
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                <Breadcrumbs title="Master" breadcrumbItem="Zone" />
                <Row>
                    <Col>
                        <Card>
                        <CardBody>
                           
                                <Row>
                                    <Col md = "4">
                                    <FormGroup>
                                        <Label htmlFor="validationCustom05">City<span style = {{color: "red"}}>*</span></Label>
                                        <Input type="select" id = "cityName" name = "cityName" onChange = {this.cityOnChange.bind(this)}>
                                            <option value = "Select">Select City</option>
                                            {this.state.cities.map((city, index) => {
                                                return(
                                                <option key = {index} value = {city.PushId}>{city.Name}</option>
                                                )
                                            })}
                                        </Input>
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <Form id = "create-form">
                            <Row>
                            <Col md={{size: 4}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Zone Name<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="zoneName"
                                      placeholder="Zone Name"
                                      type="text"
                                      className="form-control"
                                      id="zoneName"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={{size: 4, offset: 2}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom04">Radius<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="radius"
                                      placeholder="Radius"
                                      type="number"
                                      className="form-control"
                                      id="radius"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>            
                        </Row>
                        <Row>
                        <Col md={{size: 4}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom04">Location<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="location"
                                      placeholder="Location Coordinates"
                                      type="text"
                                      className="form-control"
                                      id="location"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>   
                        <Col md={{size: 4, offset: 2}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Status<span style = {{color: "red"}}>*</span></Label>
                                    <Input type="select" id = "menu" name = "menu" onChange = {this.handleChange.bind(this)}>
                                    <option value = "Select">Select Status</option>
                                    <option value = "Active">Active</option>
                                    <option value = "InActive">InActive</option>
                                
                                </Input>
                                </FormGroup>
                            </Col>
                        </Row>

                        <br />


                        
                                               
                        <Button color="primary" onClick = {this.handleSubmit.bind(this)} id = "submit" type="submit">Submit</Button>
                        <Button color="primary" onClick = {this.updateRow.bind(this)}  id = "update" style = {{marginLeft: "10px",display: "none"}} type="submit">Update</Button>
                                            {this.state.success_msg ? (
											<SweetAlert
												title="Great"
												success
												confirmBtnBsStyle="success"
												onConfirm={() => this.setState({ success_msg: false })}
											>
												Zone Added Successfully!
											</SweetAlert>
										) : null}
                                        {this.state.update_msg ? (
											<SweetAlert
												title="Great"
												success
												confirmBtnBsStyle="success"
												onConfirm={() => this.setState({ update_msg: false })}
											>
												Zone Updated Successfully!
											</SweetAlert>
										) : null}
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
                                                            <th>Location</th>
                                                            <th>Radius</th>
                                                            <th>Status</th>
                                                            <th>Details</th>
                                                            <th>Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.state.firebaseData.map((rowData, index) => (
                                                    <tr key = {index}>
                                                        <td>{index + 1}</td>
                                                        <td>{rowData.Name}</td>
                                                        <td>{rowData.Location}</td>
                                                        <td>{rowData.Radius}</td>
                                                        <td>{rowData.Status}</td>
                                                        <td onClick = {this.editRow.bind(this, rowData)}><i style = {{color : "#343a40", fontSize: "20px", padding: "10px", cursor: "pointer"}} className="fas fa-edit"></i></td>
                                                        <td onClick = {this.delete.bind(this, rowData)}><i style = {{color : "red", fontSize: "20px", padding: "10px", cursor: "pointer"}} className="fas fa-trash"></i></td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </Table>
                                        </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Zone;
