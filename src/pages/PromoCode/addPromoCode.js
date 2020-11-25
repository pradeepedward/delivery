import React, { Component } from "react";
import { Card, CardBody, Col, Row, CardTitle, CardSubtitle,Container, Button, Input, Label, FormGroup, Form } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import firebase from '../../firebase';
import SweetAlert from "react-bootstrap-sweetalert";
import Select from 'react-select'

class AddPromoCode extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            promocodeType: 'Discount',
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

    componentDidMount() {
        if(this.state.promocodeType === "Discount") {
            document.getElementById("discount").checked = true
        }

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

    vendorOnChange = vendorId => {
        this.setState({ vendorId})
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

        firebase.firestore().collection('City').doc(data.cityName).collection('PromoCode').add({
            Discount: data.discountPer,
            MaxAmount: data.maxAmount,
            MinAmount: data.minAmount,
            Name: data.promoCodeName,
            Status: data.status1,
            Category: "Discount",
            Type: "General"
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

        if(data.cityName === 'Select') {
            alert("Select City Name");
            document.getElementById("cityName").focus();
            return;
        }

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

        firebase.firestore().collection('City').doc(data.cityName).collection('PromoCode').add({
            Discount: data.flatAmount,
            MinAmount: data.flatMinAmount,
            Name: data.flatPromoCodeName,
            Status: data.flatStatus1,
            Category: "Flat",
            Type: "General"
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

        firebase.firestore().collection('City').doc(data.cityName).collection('PromoCode').add({
            Discount: "",
            MinAmount: data.delMinAmount,
            Name: data.delPromoCodeName,
            Status: data.delStatus,
            Category: "Delivery",
            Type: "General"
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

        if(data.cityName === 'Select') {
            alert("Select City Name");
            document.getElementById("cityName").focus();
            return;
        }

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

        firebase.firestore().collection('City').doc(data.cityName).collection('PromoCode').add({
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
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid={true}>

                        <Breadcrumbs title="PromoCode" breadcrumbItem="Add PromoCode" />
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


                        
                                               
                        <Button color="primary" onClick = {this.handleSubmit.bind(this)} type="submit">Submit</Button>
                                            {this.state.discountSuccess ? (
											<SweetAlert
												title="Great"
												success
												confirmBtnBsStyle="success"
												onConfirm={() => this.setState({ discountSuccess: false })}
											>
												Discount PromoCode Added Successfully!
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


                        
                                               
                        <Button color="primary" onClick = {this.flatSubmit.bind(this)} type="submit">Submit</Button>
                                            {this.state.flatSuccess ? (
											<SweetAlert
												title="Great"
												success
												confirmBtnBsStyle="success"
												onConfirm={() => this.setState({ flatSuccess: false })}
											>
												Flat PromoCode Added Successfully!
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


                        
                                               
                        <Button color="primary" onClick = {this.deliverySubmit.bind(this)} type="submit">Submit</Button>
                                            {this.state.delSuccess ? (
											<SweetAlert
												title="Great"
												success
												confirmBtnBsStyle="success"
												onConfirm={() => this.setState({ delSuccess: false })}
											>
												Delivery PromoCode Added Successfully!
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



                                            
                        <Button color="primary" onClick = {this.restaurantSubmit.bind(this)} type="submit">Submit</Button>
                                            {this.state.resSuccess ? (
                                            <SweetAlert
                                                title="Great"
                                                success
                                                confirmBtnBsStyle="success"
                                                onConfirm={() => this.setState({ resSuccess: false })}
                                            >
                                                Restaurant PromoCode Added Successfully!
                                            </SweetAlert>
                                        ) : null}
                        </div> : null } </Form>


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

export default AddPromoCode;
