import React, { Component } from "react";
import { Card, CardBody, Col, Row, CardTitle, CardSubtitle,Container, Button, Input, Label, FormGroup, Form } from "reactstrap";
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import firebase from '../../firebase';
import SweetAlert from "react-bootstrap-sweetalert";

class AddCity extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           cityName: '',
           commission: '',
           radius: '',
           subscriptionRadius: '',
           deliveryCharges: '',
           packingCharges: '',
           basePrice: '',
           baseKM: '',
           extraPrice: '',
           isLoading: false,
           success_msg: false,
           address: '',
           cityLoc: '',
           stateLoc: '',
           overallRadius: '',
           latLong: '',
           price: '',
           menu: 'Select'
         };
    }

    componentDidMount() {

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

        if(data.cityLoc === '') {
            alert("Enter City Name");
            return;
        }

        if(data.commission === '') {
            alert("Enter Restaurant Commission");
            document.getElementById("commission").focus();
            return;
        }

        if(data.radius === '') {
            alert("Enter Radius");
            document.getElementById("radius").focus();
            return;
        }

        if(data.subscriptionRadius === '') {
            alert("Enter Subscription Radius");
            document.getElementById("subscriptionRadius").focus();
            return;
        }

        if(data.deliveryCharges === '') {
            alert("Enter Delivery Charges");
            document.getElementById("deliveryCharges").focus();
            return;
        }

        if(data.packingCharges === '') {
            alert("Enter Packing Charges");
            document.getElementById("packingCharges").focus();
            return;
        }

        if(data.basePrice === '') {
            alert("Enter Delivery Base Price");
            document.getElementById("basePrice").focus();
            return;
        }

        if(data.baseKM === '') {
            alert("Enter Delivery Base KM");
            document.getElementById("baseKM").focus();
            return;
        }

        if(data.extraPrice === '') {
            alert("Enter Delivery Extra Price");
            document.getElementById("extraPrice").focus();
            return;
        }

        if(data.overallRadius === '') {
            alert("Enter Overall Radius");
            document.getElementById("overallRadius").focus();
            return;
        }

        if(data.latLong === '') {
            alert("Enter Latitude, Longitude");
            document.getElementById("latLong").focus();
            return;
        }

        if(data.price === '') {
            alert("Enter Surge Pricing");
            document.getElementById("price").focus();
            return;
        }

        if(data.menu === 'Select') {
            alert("Select Status");
            document.getElementById("menu").focus();
            return;
        }

        firebase.firestore().collection('City').add({
            Name: data.cityLoc,
            Commission: data.commission,
            Radius: data.radius,
            Subscription: data.subscriptionRadius,
            DeliveryCharges: data.deliveryCharges,
            PackingCharges: data.packingCharges,
            Base: data.baseKM,
            Price: data.basePrice,
            Price1: data.extraPrice,
            OverallRadius: data.overallRadius,
            SurgePricing: data.price,
            Location: data.latLong,
            Status: data.menu
        })
        .then(function(docRef) {
            comp.setState({
                success_msg: true
              })
        })

        data.cityName = ""
        data.radius = ""
        data.commission = ""
        data.subscriptionRadius = ""
        data.deliveryCharges = ""
        data.packingCharges = ""
        data.baseKM = ""
        data.basePrice = ""
        data.extraPrice = ""
        data.address = ""
        data.cityLoc = ""
        data.stateLoc = ""
        data.overallRadius = ""
        data.latLong = ""
        data.price = ""
        data.menu = "Select"
        document.getElementById("create-form").reset()
    }

    setFormLocation = (googleLocation) => {
        // The Google result comes back as a comma-separated string:
        // "Austin, TX, USA". Parse it into usable data.
        let parsedLoc = googleLocation.split(', ')
        this.setState({
          cityLoc: parsedLoc[0],
          stateLoc: parsedLoc[1]
        })
      }
    
    handleSelect = (address) => {
        const setFormLocation = this.setFormLocation
    
        geocodeByAddress(address)
          .then(function(results){
            setFormLocation(results[0].formatted_address)
          })
          .catch(error => console.error('Error', error))
      }

      handleCityChange = (address) => {
        this.setState({ address })
      }



    render() {
        const renderInput = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
        <div className="autocomplete-root">
            <input className="form-control" {...getInputProps()} />
            <div className="autocomplete-dropdown-container">
                {suggestions.map(suggestion => {
                    const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                    const style = suggestion.active
                    ? { backgroundColor: '#F8F8FF', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                        <div {...getSuggestionItemProps(suggestion, {className, style})}>
                    <span>{suggestion.description}</span>
                    </div>
                    )
                })}
            </div>
        </div>
          );

        const searchOptions = {
            types: ['(cities)'],
            // componentRestrictions: {country: "us"}
           }
        return (

            <React.Fragment>
                <div className="page-content">
                    <Container fluid={true}>

                        <Breadcrumbs title="City" breadcrumbItem="Add City" />
                <Row>
                    <Col>
                        <Card>
                        <CardBody>
                        <Form id = "create-form">
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom03">City Name<span style = {{color: "red"}}>*</span></Label>
                                    <PlacesAutocomplete
                                        value={this.state.address}
                                        onChange={this.handleCityChange}
                                        onSelect={this.handleSelect}
                                        searchOptions={searchOptions}
                                    >
                                        {renderInput}
                                    </PlacesAutocomplete>
                                </FormGroup>
                            </Col>
                            <Col md={{size: 4, offset: 2}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Restaurant Commission(%)<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="commission"
                                      placeholder="Commission"
                                      type="number"
                                      className="form-control"
                                      id="commission"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            </Row>
                        <Row>
                            <Col md="4">
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
                            

                        <Col md={{size: 4, offset: 2}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Subscription Radius<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                    name="subscriptionRadius"
                                    placeholder="Subscription Radius"
                                    type="number"
                                    className="form-control"
                                    id="subscriptionRadius"
                                    onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom03">Delivery Charges<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="deliveryCharges"
                                      placeholder="Delivery Charges"
                                      type="number"
                                      className="form-control"
                                      id="deliveryCharges"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={{size: 4, offset: 2}}>
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Packing Charges<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                    name="packingCharges"
                                    placeholder="Packing Charges"
                                    type="number"
                                    className="form-control"
                                    id="packingCharges"
                                    onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Delivery Base Price<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                        name="basePrice"
                                        placeholder="Delivery Base Price"
                                        type="number"
                                        className="form-control"
                                        id="basePrice"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={{size: 4, offset: 2}}>
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Delivery Base KM<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="baseKM"
                                        placeholder="Delivery Base KM"
                                        type="number"
                                        className="form-control"
                                        id="baseKM"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                            </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Delivery Extra Price Per KM<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="extraPrice"
                                        placeholder="Delivery Extra Price Per KM"
                                        type="number"
                                        className="form-control"
                                        id="extraPrice"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                            </FormGroup>
                            </Col>
                            <Col md={{size: 4, offset: 2}}>
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Overall Radius<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="overallRadius"
                                        placeholder="Overall Radius..."
                                        type="number"
                                        className="form-control"
                                        id="overallRadius"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                            </FormGroup>
                            </Col>
                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Location  (Latitude, Longitude)<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="latLong"
                                        placeholder="Latitude, Longitude..."
                                        type="text"
                                        className="form-control"
                                        id="latLong"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                            </FormGroup>
                            </Col>
                            <Col md={{size: 4, offset: 2}}>
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Surge Pricing<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="price"
                                        placeholder="Surge Pricing.."
                                        type="number"
                                        className="form-control"
                                        id="price"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                            </FormGroup>
                            </Col>

                            <Col md={{size: 4}}>
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
												City  Added Successfully!
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

export default AddCity;
