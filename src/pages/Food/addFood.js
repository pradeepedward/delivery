import React, { Component } from "react";
import { Card, CardBody, Col, Row, CardTitle, CardSubtitle,Form, Container, Button, Input, Label, FormGroup } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import firebase from '../../firebase';
import SweetAlert from "react-bootstrap-sweetalert";

class AddFood extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            categoryName: '',
            categoryImage: '',
            menu: 'Select',
            success_msg: false,
            
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

        firebase.firestore().collection('FoodCategory').add({
            Name: data.categoryName,
            Image: data.categoryImage,
            Status: data.menu,
        })
        .then(function(docRef) {
            comp.setState({
                success_msg: true
              })
        })

        data.categoryName = ""
        data.categoryImage = ""
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
           categoryImage: url
         })
       })
       .catch(console.error);         
      }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid={true}>

                        <Breadcrumbs title="Food" breadcrumbItem="Add Food Category" />
                <Row>
                    <Col>
                        <Card>
                        <CardBody>
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


                        
                                               
                        <Button color="primary" onClick = {this.handleSubmit.bind(this)} type="submit">Submit</Button>
                                            {this.state.success_msg ? (
											<SweetAlert
												title="Great"
												success
												confirmBtnBsStyle="success"
												onConfirm={() => this.setState({ success_msg: false })}
											>
												Category Added Successfully!
											</SweetAlert>
										) : null}
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

export default AddFood;
