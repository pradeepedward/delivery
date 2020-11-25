import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Form, Label, FormGroup, Input, Button } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import firebase from '../../firebase';
import SweetAlert from "react-bootstrap-sweetalert";

class FoodList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firebaseData: [],
            categoryName: '',
            categoryImage: '',
            menu: 'Select',
            success_msg: false,
            pushid: ''
        };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
      }

    componentDidMount() {
         let comp = this
         firebase.firestore().collection("FoodCategory")
         .onSnapshot(function(querySnapshot) {
             var cities = [];
             querySnapshot.forEach(function(doc) {
               const lock = {
                 Name: doc.data().Name,
                 Image: doc.data().Image,
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

    handleSubmit(e) {
        e.preventDefault();

        let data = this.state

        let comp = this


        if(data.categoryName === '') {
            alert("Enter Category Name");
            document.getElementById("categoryName").focus();
            return;
        }

        if(data.categoryImage === '') {
            alert("Select Category Image");
            document.getElementById("categoryImage").focus();
            return;
        }

        if(data.menu === 'Select') {
            alert("Select Status");
            document.getElementById("menu").focus();
            return;
        }

        firebase.firestore().collection('FoodCategory').doc(data.pushid).set({
            Name: data.categoryName,
            Image: data.categoryImage,
            Status: data.menu,
        })
        .then(function(docRef) {
            comp.setState({
                success_msg: true
              })
            data.categoryName = ""
            data.categoryImage = ""
            data.menu = "Select"
            document.getElementById("create-form").reset()

        })


    } 
    
    editRow(key) {

        document.getElementById("food-category").style.display = "none";
        document.getElementById("food-category-update").style.display = "block";

        let data = this.state
        data.categoryName = key.Name
        data.menu = key.Status
        data.categoryImage = key.Image
        data.pushid = key.PushId

        document.getElementById("categoryName").value = key.Name
        document.getElementById("categoryImage").src = key.Image
        document.getElementById("menu").value = key.Status
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
           categoryImage: url
         })
       })
       .catch(console.error);         
      }

      sweetAlertOnConfirm(){
          this.setState({
              success_msg: false
          })
          document.getElementById("food-category").style.display = "block";
          document.getElementById("food-category-update").style.display = "none";
      }

      back(){
        document.getElementById("food-category").style.display = "block";
        document.getElementById("food-category-update").style.display = "none";
    }

    delete(key) {
        if (window.confirm('Are you sure you want to  delete the category?')) {
            firebase.firestore().collection('FoodCategory').doc(key.PushId).delete()
            alert("Successfully Deleted!")
          } else {}

    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                        <Breadcrumbs title="Food" breadcrumbItem="Food Category List" />

                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>

                                        <div id = "food-category">

                                        <div className="table-responsive" data-pattern="priority-columns">
                                            <Table className="table mb-0 table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                            <th>Sl.No</th>
                                                            <th>Category Name</th>
                                                            <th>Image</th>
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
                                                        <td><img src= {rowData.Image} alt = "category" className="img-responsive inline-block" width="150" height="150" /></td>
                                                        <td>{rowData.Status}</td>
                                                        <td onClick = {this.editRow.bind(this, rowData)}><i style = {{color : "#343a40", fontSize: "20px", padding: "10px", cursor: "pointer"}} className="fas fa-edit"></i></td>
                                                        <td onClick = {this.delete.bind(this, rowData)}><i style = {{color : "red", fontSize: "20px", padding: "10px", cursor: "pointer"}} className="fas fa-trash"></i></td>
                                                    </tr>
                                                ))}
                                                
                                                </tbody>
                                            </Table>
                                        </div>
                                        </div>

                                        <div id = "food-category-update" style = {{display: "none"}}>
                                        <Form id = "create-form">
                            <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Food Category Name<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="categoryName"
                                      placeholder="Category Name"
                                      type="text"
                                      className="form-control"
                                      id="categoryName"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    <Label htmlFor="validationCustom04">Image<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="categoryImage"
                                      placeholder="Category Image"
                                      type="file"
                                      className="form-control"
                                      id="categoryImage"
                                      onChange = {this.imageUpload}
                                    />
                                </FormGroup>
                            </Col>            
                        </Row>
                        <Row>
                        <Col md = "6">
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


                        
                                               
                        <Button color="primary" onClick = {this.handleSubmit.bind(this)} type="submit">Update</Button>
                        <Button color="secondary" onClick = {this.back.bind(this)} style = {{marginLeft: "10px"}} >Back</Button>
                                            {this.state.success_msg ? (
											<SweetAlert
												title="Great"
												success
												confirmBtnBsStyle="success"
                                                onConfirm={this.sweetAlertOnConfirm.bind(this)}
											>
												Category Updated Successfully!
											</SweetAlert>
										) : null}
                                </Form>
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

export default FoodList;
