import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Button, Form, FormGroup, Input, Label } from "reactstrap";


//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import firebase from '../../firebase';
import SweetAlert from "react-bootstrap-sweetalert";

class Banners extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            cityName: 'Select', 
            bannerName: 'Select',
            bannerImage: '',
            menu: 'Select', 
            firebaseData: [],
            success_msg: false,
        };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
      }

      componentDidMount() {
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

      handleSubmit(e) {
        e.preventDefault();

        let data = this.state
        let comp = this

        if(data.cityName === 'Select') {
            alert("Select City Name");
            document.getElementById("cityName").focus();
            return;
        }


        if(data.bannerName === 'Select') {
            alert("Select Banner Name");
            document.getElementById("bannerName").focus();
            return;
        }

        if(data.bannerImage === '') {
            alert("Select Banner Image");
            document.getElementById("bannerImage").focus();
            return;
        }

        if(data.menu === 'Select') {
            alert("Select Status");
            document.getElementById("menu").focus();
            return;
        }

        firebase.firestore().collection('City').doc(data.cityName).collection('AppBanners').doc(data.bannerName).set({
            Name: data.bannerName,
            Image: data.bannerImage,
            Status: data.menu,
        })
        .then(function(docRef) {
            comp.setState({
                success_msg: true
              })
        })

        data.bannerName = "Select"
        data.bannerImage = ""
        data.menu = "Select"
        document.getElementById("create-form").reset()
    }  

      imageUpload = e =>{
        
        if(e.target.files[0] === 0){
           alert("Add Category Image");
           return;
       }
      
       const ref = firebase.storage().ref("/FoodCategory/");
       const file = e.target.files[0];
       const name = e.target.files[0] + Date();
       const metadata = {
       contentType: file.type
       };
       const task = ref.child(name).put(file, metadata);
       task
       .then(snapshot => snapshot.ref.getDownloadURL())
       .then((url) => {
         this.setState({
           bannerImage: url
         })
       })
       .catch(console.error);         
      }

    cityOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

        let cityPushId = e.target.value

        let comp = this
        firebase.firestore().collection("City").doc(cityPushId).collection("AppBanners")
        .onSnapshot(function(querySnapshot) {
            var cities = [];
            querySnapshot.forEach(function(doc) {
              const lock = {
                Location: doc.data().Location,
                Name: doc.data().Name,
                Status: doc.data().Status,
                Image: doc.data().Image,
                PushId: doc.id
              }
              cities.push(lock)
            });
            comp.setState({
              firebaseData: cities
            })
        });
    }

    delete(key) {
        if (window.confirm('Are you sure you want to delete the banner?')) {
            firebase.firestore().collection('City').doc(this.state.cityName).collection("AppBanners").doc(key.Name).delete()
            alert("Successfully Deleted!")
          } else {}
  
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                <Breadcrumbs title="Master" breadcrumbItem="Banners" />
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
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Banner Name<span style = {{color: "red"}}>*</span></Label>
                                    <Input type="select" id = "bannerName" name = "bannerName" onChange = {this.handleChange.bind(this)}>
                                        <option value = "Select">Select Banner</option>
                                        <option value = "Banner1">Banner1</option>
                                        <option value = "Banner2">Banner2</option>
                                        <option value = "Banner3">Banner3</option>
                                        <option value = "Banner4">Banner4</option>
                                        <option value = "Banner5">Banner5</option>
                                        <option value = "Banner6">Banner6</option>
                                        <option value = "Banner7">Banner7</option>
                                        <option value = "Banner8">Banner8</option>
                                        <option value = "Banner9">Banner9</option>
                                        <option value = "Banner10">Banner10</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={{size: 4, offset: 2}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom04">Banner Image<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="bannerImage"
                                      placeholder="Category Image"
                                      type="file"
                                      className="form-control"
                                      id="bannerImage"
                                      onChange = {this.imageUpload}
                                    />
                                </FormGroup>
                            </Col>            
                        </Row>
                        <Row>
                        <Col md = "4">
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


                        
                                               
                        <Button color="primary" onClick = {this.handleSubmit.bind(this)} type="submit">Submit</Button>
                                            {this.state.success_msg ? (
											<SweetAlert
												title="Great"
												success
												confirmBtnBsStyle="success"
												onConfirm={() => this.setState({ success_msg: false })}
											>
												Banners Added Successfully!
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
                                                            <th>Image</th>
                                                            <th>Status</th>
                                                            <th>Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.state.firebaseData.map((rowData, index) => (
                                                    <tr key = {index}>
                                                        <td>{index + 1}</td>
                                                        <td>{rowData.Name}</td>
                                                        <td><img src= {rowData.Image} alt = "category" className="img-responsive inline-block" width="100" height="100" /></td>
                                                        <td>{rowData.Status}</td>
                                                        {/* <td onClick = {this.editRow.bind(this, rowData)}><i style = {{color : "#343a40", fontSize: "20px", padding: "10px", cursor: "pointer"}} className="fas fa-edit"></i></td> */}
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

export default Banners;
