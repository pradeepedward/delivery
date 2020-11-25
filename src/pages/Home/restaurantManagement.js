import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Button } from "reactstrap";


//Import Breadcrumb

class RestaurantManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props.location.pathname)
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                <br />
                        <Row>
                            <Col md = {{size: 2}}>
                                <a href = "/restaurant-management">
                                    <Card body className="text-center">
                                        <Button color = "dark">Restaurant <br /> Management</Button>
                                    </Card>
                                </a>
                            </Col>

                            <Col md="2">
                                <a href = "/homemade-management">
                                    <Card body className="text-center">
                                        <Button color = "dark">Homemade  <br /> Management</Button>
                                    </Card>
                                </a>
                            </Col>

                            <Col md="2">
                                <a href = "/fastfood-management">
                                    <Card body className="text-center">
                                        <Button color = "dark">Fast Food  <br /> Management</Button>
                                    </Card>
                                </a>
                            </Col>

                            <Col md="2">
                                <a href = "/grocery-management">
                                    <Card body className="text-center">
                                        <Button color = "dark">Grocery  <br /> Management</Button>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RestaurantManagement;
