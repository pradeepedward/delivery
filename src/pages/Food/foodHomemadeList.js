import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Form, FormGroup, Input, Label, Button } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import firebase from '../../firebase';
import SweetAlert from "react-bootstrap-sweetalert";
import Select from 'react-select'
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FoodHomemadeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firebaseData: [],
            pushid: '',
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
            index: ''
        };
    }

    componentDidMount(){

        let newData = []
        firebase.firestore().collection("Vendor").where("Category", "==", "Homemade")
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

    foodImageUpload = e =>{
        
        if(e.target.files[0] === 0){
           alert("Add Food Image");
           return;
       }
      
       const ref = firebase.storage().ref("/Homemade/");
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

    editRow(key) {

        document.getElementById("promocode-list").style.display = "none";
        document.getElementById("promocode-update").style.display = "block";
        let comp = this
        let data = this.state  
        data.pushid = key.PushId
        

            data.itemName = key.ItemName
            data.itemDescription = key.ItemDescription
            data.mpPrice = key.MarkettingPrice
            data.spPrice = key.SellingPrice
            data.startTime = key.STime
            data.endTime = key.ETime
            data.foodImage = key.FoodImage
            data.menu = key.FoodType
            if(key.Recomended === "true") {  
                data.recomended = true 
                document.getElementById("recomended").checked = true
            }
            if(key.Popular === "true") {
                data.popular = true
                document.getElementById("popular").checked = true
            }
            if(key.NewFood === "true") {
                data.newFood = true
                document.getElementById("newFood").checked = true
            }

            firebase.firestore().collection("Vendor").doc(data.vendorId.value).collection("Products").doc(data.pushid).collection("Weights")
            .onSnapshot(function(querySnapshot) {
                var cities = [];
                querySnapshot.forEach(function(doc) {
                  const lock = {
                    Name: doc.data().Name,
                    Price: doc.data().Price,
                    WeightPushId: doc.id
    
                  }
                  cities.push(lock)
                });
                comp.setState({
                  weights: cities
                })
            });





                    document.getElementById("itemName").value = key.ItemName
                    document.getElementById("itemDescription").value = key.ItemDescription
                    document.getElementById("mpPrice").value = key.MarkettingPrice
                    document.getElementById("spPrice").value = key.SellingPrice
                    document.getElementById("startTime").value = key.STime
                    document.getElementById("endTime").value = key.ETime
                    document.getElementById("menu").value = key.FoodType


        

    }

    back(){
        document.getElementById("promocode-list").style.display = "block";
        document.getElementById("promocode-update").style.display = "none";
    }

    handleSubmit(e) {
        e.preventDefault();

        let data = this.state

        let comp = this


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

        var myTab = document.getElementById("weightTable");
        if(myTab.rows.length === 0) {
            alert("Add Addons");
            return;
        }

        var pushid = ""


        firebase.firestore().collection('Vendor').doc(data.vendorId.value).collection("Products").doc(data.pushid).set({
            ApprovalStatus: "Pending",
            STime: data.startTime,
            ETime: data.endTime,
            FoodType: data.menu,
            ItemCategory: "Homemade",
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
        })


        setTimeout(
            function() {
                for(let i = 0; i< myTab.rows.length; i++) {
                    var objCells = myTab.rows.item(i).cells;

                    if(objCells.item(0).innerHTML === '') {
                        firebase.firestore().collection('Vendor').doc(data.vendorId.value).collection("Products").doc(data.pushid).collection("Weights").add ({
                            Name: (objCells.item(1).innerHTML),
                            Price: (objCells.item(2).innerHTML)
                        })
                        .then(function(ref) {
                        })
                    } else {
                        firebase.firestore().collection('Vendor').doc(data.vendorId.value).collection("Products").doc(data.pushid).collection("Weights").doc(objCells.item(0).innerHTML).set({
                            Name: (objCells.item(1).innerHTML),
                            Price: (objCells.item(2).innerHTML)
                        })
                        .then(function(ref) {
                        })
                    }
            }
            comp.setState({
                success_msg: true
            })

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
    

        }, 1000)
    } 
    
    sweetAlertOnConfirm(){
        this.setState({
            success_msg: false
        })
        document.getElementById("promocode-list").style.display = "block";
        document.getElementById("promocode-update").style.display = "none";
    }

    delete(key) {
        if (window.confirm('Are you sure you want to delete the promocode?')) {
            firebase.firestore().collection("City").doc(this.state.cityName).collection('PromoCode').doc(key.PushId).delete()
            alert("Successfully Deleted!")
          } else {}
  
    }
    
    vendorOnChange = vendorId => {
        this.setState({ vendorId})

        let comp = this

        let data = this.state
        if(vendorId.value.length > 0) {
            let userid = vendorId.value


        firebase.firestore().collection("Vendor").doc(userid).collection("Products")
        .onSnapshot(function(querySnapshot) {
            var cities = [];
            querySnapshot.forEach(function(doc) {
              const lock = {
                ApprovalStatus: doc.data().ApprovalStatus,
                ETime: doc.data().ETime,
                FoodImage: doc.data().FoodImage,
                FoodType: doc.data().FoodType,
                ItemCategory:doc.data().ItemCategory,
                ItemDescription: doc.data().ItemDescription,
                ItemName: doc.data().ItemName,
                MarkettingPrice: doc.data().MarkettingPrice,
                SellingPrice:doc.data().SellingPrice,
                NewFood: doc.data().NewFood,
                Popular: doc.data().Popular,
                Recomended: doc.data().Recomended,
                STime: doc.data().STime,
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
}

editWeights(key, index) {

    let data = this.state
  
    document.getElementById("add").style.display = "none"
    document.getElementById("update").style.display = "block"
  
    data.name = key.Name
    data.price = key.Price
  
    document.getElementById("name").value = key.Name;
    document.getElementById("price").value = key.Price;
  
    this.setState({
      index: index
    })
  }

  updateAddons(e) {
      e.preventDefault()
    let data = this.state;
  
    if(data.name === ""){
      alert("Enter Name");
      document.getElementById("name").focus();
      return;
    }
  
    if(data.price === ""){
      alert("Enter Price");
      document.getElementById("price").focus();
      return;
    }

    var row = document.getElementById('weightTable').rows[parseInt(data.index)].cells;
    row[parseInt(1)].innerHTML= data.name;
    row[parseInt(2)].innerHTML= data.price;
  
      data.name = ""
      data.price = ""

      document.getElementById("name").value = "";
      document.getElementById("price").value = "";

      document.getElementById("add").style.display = "block"
      document.getElementById("update").style.display = "none"
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">
                    

                    <Breadcrumbs title="Homemade" breadcrumbItem="Homemade Food List" />

                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>

                                        <div id = "promocode-list">


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

                                        <div className="table-responsive" data-pattern="priority-columns">
                                            <Table className="table mb-0 table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                            <th>Sl.No</th>
                                                            <th>Food Image</th>
                                                            <th>Item Name</th>
                                                            <th>Item Description</th>
                                                            <th>Marketting Price</th>
                                                            <th>Selling Price</th>
                                                            <th>Start Time</th>
                                                            <th>End Time</th>
                                                            <th>Details</th>
                                                            {/* <th>Delete</th> */}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.state.firebaseData.map((rowData, index) => (
                                                    <tr key = {index}>
                                                        <td>{index + 1}</td>
                                                        <td><img src= {rowData.FoodImage} alt = "category" className="img-responsive inline-block" width="100" height="100" /></td>
                                                        <td>{rowData.ItemName}</td>
                                                        <td>{rowData.ItemDescription}</td>
                                                        <td>{rowData.MarkettingPrice}</td>
                                                        <td>{rowData.SellingPrice}</td>
                                                        <td>{rowData.STime}</td>
                                                        <td>{rowData.ETime}</td>
                                                        <td onClick = {this.editRow.bind(this, rowData)}><i style = {{color : "#343a40", fontSize: "20px", padding: "10px", cursor: "pointer"}} className="fas fa-edit"></i></td>
                                                        {/* <td onClick = {this.delete.bind(this, rowData)}><i style = {{color : "red", fontSize: "20px", padding: "10px", cursor: "pointer"}} className="fas fa-trash"></i></td> */}
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </Table>
                                        </div>
                                        </div>

                                        <div id = "promocode-update" style = {{display: "none"}}>
                                        <Row>
                    <Col>
                        <Card>
                        <CardBody>
                            <Form id = "create-form">
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
                                <Button color="primary" id = "add" onClick = {this.addAddons.bind(this)}  type="submit">Add</Button>
                                <Button color="primary" id = "update" style = {{display: "none"}} onClick = {this.updateAddons.bind(this)}  type="submit">Update</Button>
                            </Col>

                            <Col md = "8">

                            <div className="table-responsive" data-pattern="priority-columns">
                                            <Table className="table mb-0 table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                            <th>Name</th>
                                                            <th>Price</th>
                                                            <th>Edit</th>
                                                    </tr>
                                                </thead>
                                                <tbody id = "weightTable">
                                                    {this.state.weights.map((rowData, index) => (
                                                    <tr key = {index}>
                                                        <td style = {{display: "none"}}>{rowData.WeightPushId}</td>
                                                        <td>{rowData.Name}</td>
                                                        <td>{rowData.Price}</td>
                                                        <td onClick = {this.editWeights.bind(this,rowData, index)}><FontAwesomeIcon style = {{color :"Blue", fontSize: "20px", cursor: "pointer"}} icon={faEdit}/></td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                    </div>
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
												Food Item Updated Successfully!
											</SweetAlert>
										) : null}
                                </Form>
                            </CardBody>
                            </Card>
                        </Col>
                    </Row>



                    
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

export default FoodHomemadeList;
