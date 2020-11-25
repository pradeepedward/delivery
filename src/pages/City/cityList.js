import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Form, FormGroup, Input, Label, Button } from "reactstrap";
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import firebase from '../../firebase';
import SweetAlert from "react-bootstrap-sweetalert";

class CityList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firebaseData: [],
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
            pushid :'',
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

         let comp = this
         firebase.firestore().collection("City")
         .onSnapshot(function(querySnapshot) {
             var cities = [];
             querySnapshot.forEach(function(doc) {
               const lock = {
                 Name: doc.data().Name,
                 Commission: doc.data().Commission,
                 Radius: doc.data().Radius,
                 Subscription: doc.data().Subscription,
                 DeliveryCharges:doc.data().DeliveryCharges,
                 PackingCharges: doc.data().PackingCharges,
                 DeliveryBasePrice: doc.data().Base,
                 Price: doc.data().Price,
                 Price1: doc.data().Price1,
                 Status: doc.data().Status,
                 OverallRadius: doc.data().OverallRadius,
                 SurgePricing: doc.data().SurgePricing,
                 Location: doc.data().Location,
                 PushId: doc.id
               }
               cities.push(lock)
             });
             comp.setState({
               firebaseData: cities
             })
         });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
      }

      editRow(key) {

        document.getElementById("city-list").style.display = "none";
        document.getElementById("city-update").style.display = "block";

        console.log(key.Name)

        let data = this.state
        data.commission = key.Commission
        data.radius = key.Radius
        data.pushid = key.PushId
        data.subscriptionRadius = key.Subscription
        data.deliveryCharges = key.DeliveryCharges
        data.packingCharges = key.PackingCharges
        data.basePrice = key.DeliveryBasePrice
        data.baseKM = key.Price
        data.extraPrice = key.Price1
        data.overallRadius = key.OverallRadius
        data.menu = key.Status
        data.price = key.SurgePricing
        data.latLong = key.Location
        data.address = key.Name
        data.cityLoc = key.Name

        this.forceUpdate()

        // document.getElementById("address").value = key.Name
        document.getElementById("radius").value = key.Radius
        document.getElementById("commission").value = key.Commission
        document.getElementById("subscriptionRadius").value = key.Subscription
        document.getElementById("deliveryCharges").value = key.DeliveryCharges
        document.getElementById("packingCharges").value = key.PackingCharges
        document.getElementById("baseKM").value = key.Price
        document.getElementById("basePrice").value = key.DeliveryBasePrice
        document.getElementById("extraPrice").value = key.Price1
        document.getElementById("overallRadius").value = key.OverallRadius
        document.getElementById("price").value = key.SurgePricing
        document.getElementById("latLong").value = key.Location
        document.getElementById("menu").value = key.Status

    }

    handleSubmit(e) {
        e.preventDefault();

        let data = this.state
        let comp = this


        if(data.address === '') {
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

        firebase.firestore().collection('City').doc(data.pushid).set({
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
    
    sweetAlertOnConfirm(){
        this.setState({
            success_msg: false
        })
        document.getElementById("city-list").style.display = "block";
        document.getElementById("city-update").style.display = "none";
    }

    back(){
      document.getElementById("city-list").style.display = "block";
      document.getElementById("city-update").style.display = "none";
  }

  delete(key) {
      if (window.confirm('Are you sure you want to delete the city?')) {
          firebase.firestore().collection('City').doc(key.PushId).delete()
          alert("Successfully Deleted!")
        } else {}

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
                    <div className="container-fluid">

                        <Breadcrumbs title="City" breadcrumbItem="City List" />

                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>

                                        <div id = "city-list">

                                        <div className="table-responsive" data-pattern="priority-columns">
                                            <Table className="table mb-0 table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                            <th>Sl.No</th>
                                                            <th>City</th>
                                                            <th>Commission</th>
                                                            <th>Radius</th>
                                                            <th>Delivery Charge</th>
                                                            <th>Packing Charges</th>
                                                            <th>Delivery Base Price</th>
                                                            <th>Delivery Base KM</th>
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
                                                        <td>{rowData.Commission}</td>
                                                        <td>{rowData.Radius}</td>
                                                        <td>{rowData.DeliveryCharges}</td>
                                                        <td>{rowData.PackingCharges}</td>
                                                        <td>{rowData.DeliveryBasePrice}</td>
                                                        <td>{rowData.Price}</td>
                                                        <td>{rowData.Status}</td>
                                                        <td onClick = {this.editRow.bind(this, rowData)}><i style = {{color : "#343a40", fontSize: "20px", padding: "10px", cursor: "pointer"}} className="fas fa-edit"></i></td>
                                                        <td onClick = {this.delete.bind(this, rowData)}><i style = {{color : "red", fontSize: "20px", padding: "10px", cursor: "pointer"}} className="fas fa-trash"></i></td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </Table>
                                        </div>
                                        </div>

                                        <div id = "city-update" style = {{display: "none"}}>
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

                        <Button color="primary" onClick = {this.handleSubmit.bind(this)} type="submit">Update</Button>
                        <Button color="secondary" onClick = {this.back.bind(this)} style = {{marginLeft: "10px"}} >Back</Button>
                                            {this.state.success_msg ? (
											<SweetAlert
												title="Great"
												success
												confirmBtnBsStyle="success"
                                                onConfirm={this.sweetAlertOnConfirm.bind(this)}
											>
												City Updated Successfully!
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

export default CityList;
