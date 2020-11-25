import React, { Component } from "react";
import { Card, CardBody, Col, Row, CardTitle, CardSubtitle,Container, Button, Input, Label, FormGroup } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class AddRestaurantBanner extends Component {
    constructor(props) {
        super(props);
        this.state = { customchk: true, toggleSwitch: true };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
      }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid={true}>

                        <Breadcrumbs title="Restaurant Banner" breadcrumbItem="Add Vendor Banner" />
                <Row>
                    <Col>
                        <Card>
                        <CardBody>

                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label htmlFor="validationCustom03">Restaurant Name</Label>
                                    <Input type="select" id = "restaurantName" name = "restaurantName">
                                    <option value = "Select Area">Select Restaurant</option>
                                    {/* {this.state.branchs.map((city, index) => {
                                        return (
                                            <option key = {index} value={city.PushId}>{city.Name}</option>
                                        );
                                    })}; */}
                                </Input> 
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>

                        <Col md = "6">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Image<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="image"
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                            </FormGroup>
                            </Col>
                        </Row>

                        <Row>   
                        <Col md = "6">
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Status<span style = {{color: "red"}}>*</span></Label>
                                    <Input type="select" id = "status1" name = "status1">
                                    <option value = "Select Status">Select Status</option>
                                    <option value = "Active">Active</option>
                                    <option value = "InActive">InActive</option>
                                </Input>
                                </FormGroup>
                            </Col>
                        </Row>

                        <br />


                        
                                               
                        <Button color="primary" type="submit">Submit</Button>
                                            {/* {this.state.success_msg ? (
											<SweetAlert
												title="Great"
												success
												confirmBtnBsStyle="success"
												onConfirm={() => this.setState({ success_msg: false })}
											>
												Successfully Updated!
											</SweetAlert>
										) : null} */}

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

export default AddRestaurantBanner;
