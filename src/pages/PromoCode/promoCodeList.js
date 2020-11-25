import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Form, FormGroup, Input, Label, Button } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import firebase from '../../firebase';
import SweetAlert from "react-bootstrap-sweetalert";
import Select from 'react-select'

class PromoCodeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firebaseData: [],
            pushid: '',

            promocodeType: '',
            promoCodeName: '',
            discountPer: '',
            minAmount: '',
            maxAmount: '',
            status1: 'Select',
            discountSuccess:  false,

            flatPromoCodeName: '',
            flatMinAmount: '',
            flatAmount: '',
            flatStatus1: 'Select',
            flatSuccess:  false,

            cities: [],
            cityName: 'Select',
            delPromoCodeName: '',
            delMinAmount: '',
            delStatus: 'Select',
            delSuccess: false,

            resPromoCodeName: '',
            resMinAmount: '',
            resStatus: 'Select',
            resSuccess: false,
            vendorId: [],
            vendors: [],
            isClearable: true,
            isSearchable: true,
        };
    }

    componentDidMount(){

        let newData = []
        let newVendor = []
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

         firebase.firestore().collection("Vendor").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const lock = {
                    label: doc.data().UserId,
                    value: doc.id,
                }
                newVendor.push(lock)
            });
            this.setState({
                vendors: newVendor
            })
         });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
      }

      vendorOnChange = vendorId => {
        this.setState({ vendorId})
    }

    editRow(key) {

        document.getElementById("promocode-list").style.display = "none";
        document.getElementById("promocode-update").style.display = "block";
        let data = this.state  
        data.pushid = key.PushId

        if(key.Category === "Discount") {
            data.promocodeType = "Discount"
            data.promoCodeName = key.Name
            data.discountPer = key.Discount
            data.minAmount = key.MinAmount
            data.maxAmount = key.MaxAmount
            data.status1 = key.Status

            this.forceUpdate()

            setTimeout(
                function() {
                    document.getElementById("discount").checked = true
                    document.getElementById("promoCodeName").value = key.Name
                    document.getElementById("discountPer").value = key.Discount
                    document.getElementById("minAmount").value = key.MinAmount
                    document.getElementById("maxAmount").value = key.MaxAmount
                    document.getElementById("status1").value = key.Status
                    document.getElementById("cityName").value = data.cityName
            }, 1000)
        } else if(key.Category === "Flat") {
            data.promocodeType = "Flat"
            data.flatPromoCodeName = key.Name
            data.flatAmount = key.Discount
            data.flatMinAmount = key.MinAmount
            data.flatStatus1 = key.Status

            this.forceUpdate()

            setTimeout(
                function() {
                    document.getElementById("flat").checked = true
                    document.getElementById("flatPromoCodeName").value = key.Name
                    document.getElementById("flatAmount").value = key.Discount
                    document.getElementById("flatMinAmount").value = key.MinAmount
                    document.getElementById("flatStatus1").value = key.Status
                    document.getElementById("cityName").value = data.cityName
            }, 1000)
        } else if(key.Category === "Delivery") {
            data.promocodeType = "Delivery"
            data.delPromoCodeName = key.Name
            data.delMinAmount = key.MinAmount
            data.delStatus = key.Status

            this.forceUpdate()

            setTimeout(
                function() {
                    document.getElementById("delivery").checked = true
                    document.getElementById("delPromoCodeName").value = key.Name
                    document.getElementById("delMinAmount").value = key.MinAmount
                    document.getElementById("delStatus").value = key.Status
                    document.getElementById("cityName").value = data.cityName
            }, 1000)
        } else if(key.Category === "Restaurant") {
            data.promocodeType = "Restaurant"
            data.resPromoCodeName = key.Name
            data.resMinAmount = key.MinAmount
            data.resStatus = key.Status

            let ven = []

            ven.push({
                label: key.VendorId,
                value: key.VendorId
              })

              this.setState({
                vendorId: ven
            })


            this.forceUpdate()

            setTimeout(
                function() {
                    document.getElementById("restaurant").checked = true
                    document.getElementById("resPromoCodeName").value = key.Name
                    document.getElementById("resMinAmount").value = key.MinAmount
                    document.getElementById("resStatus").value = key.Status
                    document.getElementById("cityName").value = data.cityName
            }, 1000)
        }

    }

    back(){
        document.getElementById("promocode-list").style.display = "block";
        document.getElementById("promocode-update").style.display = "none";
    }

    handleSubmit(e) {
        e.preventDefault();

        let data = this.state
        let comp = this

        if(data.promoCodeName === '') {
            alert("Enter Promo Code");
            document.getElementById("promoCodeName").focus();
            return;
        }

        if(data.discountPer === '') {
            alert("Enter Discount Percentage");
            document.getElementById("discountPer").focus();
            return;
        }

        if(data.minAmount === '') {
            alert("Enter Minimum Amount");
            document.getElementById("minAmount").focus();
            return;
        }

        if(data.maxAmount === '') {
            alert("Enter Maximum Amount");
            document.getElementById("maxAmount").focus();
            return;
        }

        if(data.status1 === 'Select') {
            alert("Select Status");
            document.getElementById("status1").focus();
            return;
        }

        firebase.firestore().collection("City").doc(data.cityName).collection('PromoCode').doc(data.pushid).set({
            Discount: data.discountPer,
            MaxAmount: data.maxAmount,
            MinAmount: data.minAmount,
            Name: data.promoCodeName,
            Status: data.status1,
            Category: "Discount",
            Type: "General",
        })
        .then(function(docRef) {
            comp.setState({
                discountSuccess: true
              })
        })

        data.discount = ""
        data.maxAmount = ""
        data.minAmount = ""
        data.promoCodeName = ""
        data.status1 = ""
        document.getElementById("create-form").reset()
    } 

    flatSubmit(e) {
        e.preventDefault();

        let data = this.state
        let comp = this

        if(data.flatPromoCodeName === '') {
            alert("Enter Flat Promo Code");
            document.getElementById("flatPromoCodeName").focus();
            return;
        }

        if(data.flatAmount === '') {
            alert("Enter Flat Amount");
            document.getElementById("flatAmount").focus();
            return;
        }

        if(data.flatMinAmount === '') {
            alert("Enter Minimum Amount");
            document.getElementById("flatMinAmount").focus();
            return;
        }

        if(data.flatStatus1 === 'Select') {
            alert("Select Status");
            document.getElementById("flatStatus1").focus();
            return;
        }

        firebase.firestore().collection("City").doc(data.cityName).collection('PromoCode').doc(data.pushid).set({
            Discount: data.flatAmount,
            MinAmount: data.flatMinAmount,
            Name: data.flatPromoCodeName,
            Status: data.flatStatus1,
            Category: "Flat",
            Type: "General",
        })
        .then(function(docRef) {
            comp.setState({
                flatSuccess: true
              })
        })

        data.flatAmount = ""
        data.flatMinAmount = ""
        data.flatPromoCodeName = ""
        data.flatStatus1 = ""
        document.getElementById("create-form1").reset()
    }
    
    sweetAlertOnConfirm(){
        this.setState({
            discountSuccess: false
        })
        document.getElementById("promocode-list").style.display = "block";
        document.getElementById("promocode-update").style.display = "none";
    }

    sweetAlertOnConfirm1(){
        this.setState({
            flatSuccess: false
        })
        document.getElementById("promocode-list").style.display = "block";
        document.getElementById("promocode-update").style.display = "none";
    }

    sweetAlertOnConfirm2(){
        this.setState({
            delSuccess: false
        })
        document.getElementById("promocode-list").style.display = "block";
        document.getElementById("promocode-update").style.display = "none";
    }

    sweetAlertOnConfirm3(){
        this.setState({
            resSuccess: false
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

    deliverySubmit(e) {
        e.preventDefault();

        let data = this.state
        let comp = this

        if(data.cityName === 'Select') {
            alert("Select City Name");
            document.getElementById("cityName").focus();
            return;
        }

        if(data.delPromoCodeName === '') {
            alert("Enter Delivery Promo Code");
            document.getElementById("delPromoCodeName").focus();
            return;
        }

        if(data.delMinAmount === '') {
            alert("Enter Minimum Amount");
            document.getElementById("delMinAmount").focus();
            return;
        }

        if(data.delStatus === 'Select') {
            alert("Select Status");
            document.getElementById("delStatus").focus();
            return;
        }

        firebase.firestore().collection("City").doc(data.cityName).collection('PromoCode').doc(data.pushid).set({
            Discount: "",
            MinAmount: data.delMinAmount,
            Name: data.delPromoCodeName,
            Status: data.delStatus,
            Category: "Delivery",
            Type: "General",
        })
        .then(function(docRef) {
            comp.setState({
                delSuccess: true
              })
        })

        data.delMinAmount = ""
        data.delPromoCodeName = ""
        data.delStatus = ""
        document.getElementById("create-form2").reset()
    }

    restaurantSubmit(e) {
        e.preventDefault();

        let data = this.state
        let comp = this


        if(data.vendorId.length === 0) {
            alert("Select Vendor Id");
            document.getElementById("vendorId").focus();
            return;
        }

        if(data.resPromoCodeName === '') {
            alert("Enter Promo Code");
            document.getElementById("resPromoCodeName").focus();
            return;
        }

        if(data.resMinAmount === '') {
            alert("Enter Minimum Amount");
            document.getElementById("resMinAmount").focus();
            return;
        }

        if(data.resStatus === 'Select') {
            alert("Select Status");
            document.getElementById("resStatus").focus();
            return;
        }

        firebase.firestore().collection('City').doc(data.cityName).collection('PromoCode').doc(data.pushid).set({
            Discount: "",
            MinAmount: data.resMinAmount,
            Name: data.resPromoCodeName,
            Status: data.resStatus,
            Category: "Restaurant",
            Type: "Restaurant",
            VendorId: data.vendorId.value
        })
        .then(function(docRef) {
            comp.setState({
                resSuccess: true
              })
        })

        data.resMinAmount = ""
        data.resPromoCodeName = ""
        data.resStatus = ""
        data.vendorId = []
        document.getElementById("create-form3").reset()
    }
    
    cityOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

        let pushid = e.target.value
        let comp = this

        firebase.firestore().collection("City").doc(pushid).collection("PromoCode")
        .onSnapshot(function(querySnapshot) {
            var cities = [];
            querySnapshot.forEach(function(doc) {
              const lock = {
                Category: doc.data().Category,
                Discount: doc.data().Discount,
                MaxAmount: doc.data().MaxAmount,
                MinAmount: doc.data().MinAmount,
                Name:doc.data().Name,
                Status: doc.data().Status,
                PushId: doc.id,
                Type: doc.data().Type,
                VendorId: doc.data().VendorId
              }
              cities.push(lock)
            });
            comp.setState({
              firebaseData: cities
            })
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">
                    

                        <Breadcrumbs title="PromoCode" breadcrumbItem="PromoCode List" />

                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>

                                        <div id = "promocode-list">


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

                                        <div className="table-responsive" data-pattern="priority-columns">
                                            <Table className="table mb-0 table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                            <th>Sl.No</th>
                                                            <th>Name</th>
                                                            <th>Category</th>
                                                            <th>Discount</th>
                                                            <th>Min Amount</th>
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
                                                        <td>{rowData.Category}</td>
                                                        <td>{rowData.Discount}</td>
                                                        <td>{rowData.MinAmount}</td>
                                                        <td>{rowData.Status}</td>
                                                        <td onClick = {this.editRow.bind(this, rowData)}><i style = {{color : "#343a40", fontSize: "20px", padding: "10px", cursor: "pointer"}} className="fas fa-edit"></i></td>
                                                        <td onClick = {this.delete.bind(this, rowData)}><i style = {{color : "red", fontSize: "20px", padding: "10px", cursor: "pointer"}} className="fas fa-trash"></i></td>
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
                        <Row onChange = {this.handleChange.bind(this)}>
                            <div className="form-check mb-3" style = {{marginLeft: "10px"}}>
                                <input className="form-check-input" type="radio" name="promocodeType" id="discount" value="Discount" />
                                <label className="form-check-label" htmlFor="exampleRadios1">Discount</label>
                            </div>
                            <div className="form-check mb-3" style = {{marginLeft: "10px"}}>
                                <input className="form-check-input" type="radio" name="promocodeType" id="flat" value="Flat" />
                                <label className="form-check-label" htmlFor="exampleRadios1">Flat</label>
                            </div>
                            <div className="form-check mb-3" style = {{marginLeft: "10px"}}>
                                <input className="form-check-input" type="radio" name="promocodeType" id="delivery" value="Delivery" />
                                <label className="form-check-label" htmlFor="exampleRadios1">Delivery</label>
                            </div>
                            <div className="form-check mb-3" style = {{marginLeft: "10px"}}>
                                <input className="form-check-input" type="radio" name="promocodeType" id="restaurant" value="Restaurant" />
                                <label className="form-check-label" htmlFor="exampleRadios1">Restaurant</label>
                            </div>
                        </Row>

                        <Form id = "create-form">

                        {this.state.promocodeType === "Discount"?
                        <div>
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom03">PromoCode Name<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="promoCodeName"
                                      placeholder="PromoCode Name"
                                      type="text"
                                      className="form-control"
                                      id="promoCodeName"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Discount Percentage(%)<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="discountPer"
                                      placeholder="Discount Percentage"
                                      type="number"
                                      className="form-control"
                                      id="discountPer"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom04">Minimum Order Amount<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="minAmount"
                                      placeholder="Min Amount"
                                      type="number"
                                      className="form-control"
                                      id="minAmount"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom04">Maximum Discount Amount<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="maxAmount"
                                      placeholder="Max Amount"
                                      type="number"
                                      className="form-control"
                                      id="maxAmount"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            
                        </Row>
                        <Row>   
                        <Col md = "4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Status<span style = {{color: "red"}}>*</span></Label>
                                    <Input type="select" id = "status1" name = "status1" onChange = {this.handleChange.bind(this)}>
                                    <option value = "Select Status">Select Status</option>
                                    <option value = "Active">Active</option>
                                    <option value = "InActive">InActive</option>
                                </Input>
                                </FormGroup>
                            </Col>
                        </Row>

                        <br />


                        
                                               
                        <Button color="primary" onClick = {this.handleSubmit.bind(this)} type="submit">Update</Button>
                        <Button color="secondary" onClick = {this.back.bind(this)} style = {{marginLeft: "10px"}} >Back</Button>
                                            {this.state.discountSuccess ? (
											<SweetAlert
												title="Great"
												success
												confirmBtnBsStyle="success"
												onConfirm={this.sweetAlertOnConfirm.bind(this)}
											>
												Discount PromoCode Updated Successfully!
											</SweetAlert>
										) : null}
                        </div> : null } </Form>

                        <Form id = "create-form1">

                        {this.state.promocodeType === "Flat"?
                        <div>
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom03">PromoCode Name<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="flatPromoCodeName"
                                      placeholder="PromoCode Name"
                                      type="text"
                                      className="form-control"
                                      id="flatPromoCodeName"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Flat Amount<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="flatAmount"
                                      placeholder="Flat Amount"
                                      type="number"
                                      className="form-control"
                                      id="flatAmount"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom04">Minimum Order Amount<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="flatMinAmount"
                                      placeholder="Min Amount"
                                      type="number"
                                      className="form-control"
                                      id="flatMinAmount"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            
                        </Row>
                        <Row>   
                        <Col md = "4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Status<span style = {{color: "red"}}>*</span></Label>
                                    <Input type="select" id = "flatStatus1" name = "flatStatus1" onChange = {this.handleChange.bind(this)}>
                                    <option value = "Select Status">Select Status</option>
                                    <option value = "Active">Active</option>
                                    <option value = "InActive">InActive</option>
                                </Input>
                                </FormGroup>
                            </Col>
                        </Row>

                        <br />


                        
                                               
                        <Button color="primary" onClick = {this.flatSubmit.bind(this)} type="submit">Update</Button>
                        <Button color="secondary" onClick = {this.back.bind(this)} style = {{marginLeft: "10px"}} >Back</Button>
                                            {this.state.flatSuccess ? (
											<SweetAlert
												title="Great"
												success
												confirmBtnBsStyle="success"
												onConfirm={this.sweetAlertOnConfirm1.bind(this)}
											>
												Flat PromoCode Updated Successfully!
											</SweetAlert>
										) : null}
                        </div> : null } </Form>

                        <Form id = "create-form2">

                        {this.state.promocodeType === "Delivery"?
                        <div>
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom03">PromoCode Name<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                    name="delPromoCodeName"
                                    placeholder="PromoCode Name"
                                    type="text"
                                    className="form-control"
                                    id="delPromoCodeName"
                                    onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom04">Minimum Order Amount<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                    name="delMinAmount"
                                    placeholder="Min Amount"
                                    type="number"
                                    className="form-control"
                                    id="delMinAmount"
                                    onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            
                        </Row>
                        <Row>   
                        <Col md = "4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Status<span style = {{color: "red"}}>*</span></Label>
                                    <Input type="select" id = "delStatus" name = "delStatus" onChange = {this.handleChange.bind(this)}>
                                    <option value = "Select Status">Select Status</option>
                                    <option value = "Active">Active</option>
                                    <option value = "InActive">InActive</option>
                                </Input>
                                </FormGroup>
                            </Col>
                        </Row>

                        <br />



                                            
                        <Button color="primary" onClick = {this.deliverySubmit.bind(this)} type="submit">Update</Button>
                        <Button color="secondary" onClick = {this.back.bind(this)} style = {{marginLeft: "10px"}} >Back</Button>
                                            {this.state.delSuccess ? (
											<SweetAlert
												title="Great"
												success
												confirmBtnBsStyle="success"
												onConfirm={this.sweetAlertOnConfirm2.bind(this)}
											>
												Delivery PromoCode Updated Successfully!
											</SweetAlert>
										) : null}
                        </div> : null } </Form>

                        <Form id = "create-form3">

                        {this.state.promocodeType === "Restaurant"?
                        <div>
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

                            <Col md= {{size: 4, offset: 2}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom03">PromoCode Name<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                    name="resPromoCodeName"
                                    placeholder="PromoCode Name"
                                    type="text"
                                    className="form-control"
                                    id="resPromoCodeName"
                                    onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom04">Minimum Order Amount<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                    name="resMinAmount"
                                    placeholder="Min Amount"
                                    type="number"
                                    className="form-control"
                                    id="resMinAmount"
                                    onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            
                        </Row>
                        <Row>   
                        <Col md = "4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Status<span style = {{color: "red"}}>*</span></Label>
                                    <Input type="select" id = "resStatus" name = "resStatus" onChange = {this.handleChange.bind(this)}>
                                    <option value = "Select Status">Select Status</option>
                                    <option value = "Active">Active</option>
                                    <option value = "InActive">InActive</option>
                                </Input>
                                </FormGroup>
                            </Col>
                        </Row>

                        <br />



                                            
                        <Button color="primary" onClick = {this.restaurantSubmit.bind(this)} type="submit">Update</Button>
                        <Button color="secondary" onClick = {this.back.bind(this)} style = {{marginLeft: "10px"}} >Back</Button>
                                            {this.state.resSuccess ? (
                                            <SweetAlert
                                                title="Great"
                                                success
                                                confirmBtnBsStyle="success"
                                                onConfirm={this.sweetAlertOnConfirm3.bind(this)}
                                            >
                                                Restaurant PromoCode Updated Successfully!
                                            </SweetAlert>
                                        ) : null}
                        </div> : null } </Form>


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

export default PromoCodeList;
