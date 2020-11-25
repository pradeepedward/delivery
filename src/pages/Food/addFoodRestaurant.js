import React, { Component } from "react";
import { Card, CardBody, Col, Row, CardTitle, CardSubtitle,Form, Container, Button, Input, Label, FormGroup, Table } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import firebase from '../../firebase';
import SweetAlert from "react-bootstrap-sweetalert";
import Select from 'react-select'

class AddFoodRestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            menu: 'Select',
            success_msg: false,
            isClearable: true,
            isSearchable: true,
            vendors: [],
            vendorId: [],
            itemName: '',
            itemDescription: '',
            mpPrice: '',
            spPrice: '',
            startTime: '',
            endTime: '',
            foodImage: '',
            recomended: false,
            popular: false,
            newFood: false,
            name: '',
            price: '',
            weights: [{}], 
         };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    checkBoxOnChange(event) {
        this.setState({
            [event.target.name]: event.target.checked
        });
    }

    componentDidMount() {
        let newData = []
        firebase.firestore().collection("Vendor").where("Category", "==", "Restaurant")
        .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const lock = {
                    label: doc.data().UserId,
                    value: doc.id,
                }
                newData.push(lock)
            });
            this.setState({
                vendors: newData
            })
         });
    }

      vendorOnChange = vendorId => {
            this.setState({ vendorId})
      }

      addAddons(e) {
          e.preventDefault();

          let data = this.state

        if(data.name === '') {
            alert("Enter Name");
            document.getElementById("name").focus();
            return;
        }

        if(data.price === '') {
            alert("Enter Price");
            document.getElementById("price").focus();
            return;
        }

        const weightUnits = {
            Name: data.name,
            Price: data.price
        }

        this.setState({
            weights: [...this.state.weights, weightUnits]
        })

        data.name = ""
        data.price = ""

        document.getElementById("name").value = ""
        document.getElementById("price").value = ""
      }

      deleteRow(e) {
          var con = [...this.state.weights];
          con.splice(e, 1);
          this.setState({
              weights: con
          })
      }

      handleSubmit(e) {
        e.preventDefault();

        let data = this.state

        let comp = this


        if(data.vendorId.length === 0) {
            alert("Select Vendor Id");
            document.getElementById("vendorId").focus();
            return;
        }

        console.log(data.vendorId.value)


        if(data.itemName === '') {
            alert("Enter Item Name");
            document.getElementById("itemName").focus();
            return;
        }

        if(data.itemDescription === '') {
            alert("Enter Item Description");
            document.getElementById("itemDescription").focus();
            return;
        }

        if(data.mpPrice === '') {
            alert("Enter Marketting Price");
            document.getElementById("mpPrice").focus();
            return;
        }

        if(data.spPrice === '') {
            alert("Enter Selling Price");
            document.getElementById("spPrice").focus();
            return;
        }

        if(data.startTime === '') {
            alert("Select Start Time");
            document.getElementById("startTime").focus();
            return;
        }

        if(data.endTime === '') {
            alert("Select End Time");
            document.getElementById("endTime").focus();
            return;
        }

        if(data.foodImage === '') {
            alert("Select Food Image");
            document.getElementById("foodImage").focus();
            return;
        }

        if(data.menu === 'Select') {
            alert("Select Food Type");
            document.getElementById("menu").focus();
            return;
        }

        var myTab = document.getElementById("dataTable");
        if(myTab.rows.length === 0) {
            alert("Add Addons");
            return;
        }

        var pushid = ""


        firebase.firestore().collection('Vendor').doc(data.vendorId.value).collection("Products").add({
            ApprovalStatus: "Pending",
            STime: data.startTime,
            ETime: data.endTime,
            FoodType: data.menu,
            ItemCategory: "Restaurant",
            ItemDescription: data.itemDescription,
            ItemName: data.itemName,
            MarkettingPrice: data.mpPrice,
            SellingPrice: data.spPrice,
            NewFood: String(data.newFood),
            Popular: String(data.popular),
            Recomended: String(data.recomended),
            FoodImage: data.foodImage,
            Status: "Active"

        })
        .then(function(docRef) {

            pushid = docRef.id
        })


        setTimeout(
            function() {
                for(let i = 0; i< myTab.rows.length; i++) {
                console.log(i)
                    var objCells = myTab.rows.item(i).cells;
                    firebase.firestore().collection('Vendor').doc(data.vendorId.value).collection("Products").doc(pushid).collection("Weights").add ({
                        Name: (objCells.item(0).innerHTML),
                        Price: (objCells.item(1).innerHTML)
                    })
                .then(function(ref) {

                    comp.setState({
                        success_msg: true
                    })
                })
            }

            data.vendorId = []
            data.itemName = ""
            data.itemDescription = ""
            data.mpPrice = ""
            data.spPrice = ""
            data.startTime = ""
            data.endTime = ""
            data.foodImage = ""
            data.recomended = false
            data.newFood = false
            data.popular = false
            data.menu = "Select"
            data.name = ""
            data.price = ""
            data.weights = [{}]
            document.getElementById("create-form").reset()
    

        }, 2000)




    }  

    foodImageUpload = e =>{
        
        if(e.target.files[0] === 0){
           alert("Add Food Image");
           return;
       }
      
       const ref = firebase.storage().ref("/Restaurant/");
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
           foodImage: url
         })
       })
       .catch(console.error);         
      }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid={true}>

                        <Breadcrumbs title="Food" breadcrumbItem="Add Food Under Restaurant" />
                <Row>
                    <Col>
                        <Card>
                        <CardBody>
                            <Form id = "create-form">
                            <Row>
                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Vendor Id<span style = {{color: "red"}}>*</span></Label>
                                <Select
                                    className = "select1-selection"
                                    classNamePrefix = "select"
                                    isClearable = {this.state.isClearable}
                                    isSearchable = {this.state.isSearchable}
                                    options = {this.state.vendors}
                                    id = "vendorId"
                                    name = "vendorId"
                                    placeholder = "Select Vendor Id..."
                                    value = {this.state.vendorId}
                                    onChange = {this.vendorOnChange}
                                />
                            </FormGroup>
                            </Col>
                            </Row>

                            <Row>
                            <Col md = {{size: 4}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Item Name<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="itemName"
                                      placeholder="Item Name"
                                      type="text"
                                      className="form-control"
                                      id="itemName"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col> 

                            <Col md = {{size: 4, offset: 2}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Item Description<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="itemDescription"
                                      placeholder="Item Description"
                                      type="text"
                                      className="form-control"
                                      id="itemDescription"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md = {{size: 4}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Marketting Price<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="mpPrice"
                                      placeholder="Marketting Price"
                                      type="number"
                                      className="form-control"
                                      id="mpPrice"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col> 

                            <Col md = {{size: 4, offset: 2}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Selling Price<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="spPrice"
                                      placeholder="Selling Price"
                                      type="number"
                                      className="form-control"
                                      id="spPrice"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md = {{size: 4}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Start Time<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="startTime"
                                      placeholder="Start Time"
                                      type="time"
                                      className="form-control"
                                      id="startTime"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col> 

                            <Col md = {{size: 4, offset: 2}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">End Time<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="endTime"
                                      placeholder="End Time"
                                      type="time"
                                      className="form-control"
                                      id="endTime"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md = {{size: 4}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Food Image<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="foodImage"
                                      placeholder="Start Time"
                                      type="file"
                                      className="form-control"
                                      id="foodImage"
                                      onChange = {this.foodImageUpload}
                                    />
                                </FormGroup>
                            </Col> 

                            <Col md = {{size: 4, offset: 2}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Food Type<span style = {{color: "red"}}>*</span></Label>
                                    <Input type="select" id = "menu" name = "menu" onChange = {this.handleChange.bind(this)}>
                                    <option value = "Select">Select Food Type</option>
                                    <option value = "Veg">Veg</option>
                                    <option value = "Non Veg">Non Veg</option>
                                </Input>
                                </FormGroup>
                            </Col>

                            <Col md = "3">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id = "recomended" name = "recomended" onChange = {this.checkBoxOnChange.bind(this)} value = {this.state.recomended} />
                                    <label className="custom-control-label"  htmlFor="recomended">Recomended</label>
                                </div>
                            </Col>

                            <Col md = "3">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id = "popular" name = "popular" onChange = {this.checkBoxOnChange.bind(this)} value = {this.state.popular}/>
                                    <label className="custom-control-label"  htmlFor="popular">Popular</label>
                                </div>
                            </Col>

                            <Col md = "3">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id = "newFood" name = "newFood" onChange = {this.checkBoxOnChange.bind(this)} value = {this.state.newFood}/>
                                    <label className="custom-control-label"  htmlFor="newFood">New Food</label>
                                </div>
                            </Col>  
                        </Row>
                        <br />
                        <br />
                        <h5>Addons</h5>


                        <Row>
                            <Col md = {{size: 4}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Name<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="name"
                                      placeholder="Name"
                                      type="text"
                                      className="form-control"
                                      id="name"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md = {{size: 4}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Price<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="price"
                                      placeholder="Price"
                                      type="number"
                                      className="form-control"
                                      id="price"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md = {{size: 4}} style = {{margin: "auto"}}>
                                <Button color="primary" onClick = {this.addAddons.bind(this)}  type="submit">Add</Button>
                            </Col>

                            <Col md = "8">

                            <div className="table-responsive" data-pattern="priority-columns">
                                            <Table className="table mb-0 table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                            <th>Name</th>
                                                            <th>Price</th>
                                                            <th>Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody id = "dataTable">
                                                {this.state.weights.slice(1, this.state.weights.length).map((rowData, index) => (
                                                    <tr key = {index}>
                                                        <td>{rowData.Name}</td>
                                                        <td>{rowData.Price}</td>
                                                        <td onClick = {this.deleteRow.bind(this, index +1)}><i style = {{color : "red", fontSize: "20px", padding: "10px", cursor: "pointer"}} className="fas fa-trash"></i></td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </Table>
                                    </div>
                                    </Col>
                            
                        </Row>

                        <br />


                        
                                               
                        <Button color="primary" onClick = {this.handleSubmit.bind(this)}  type="submit">Submit</Button>
                                            {this.state.success_msg ? (
											<SweetAlert
												title="Great"
												success
												confirmBtnBsStyle="success"
												onConfirm={() => this.setState({ success_msg: false })}
											>
												Food Item Added Successfully!
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

export default AddFoodRestaurant;
