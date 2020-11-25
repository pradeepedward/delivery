import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Button } from "reactstrap";


//Import Breadcrumb

class DeliveryManagement extends Component {
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
                                <a href = "/add-delivery-boy">
                                    <Card body className="text-center">
                                        <div><i style = {{color : "#343a40", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-biking"></i></div>
                                        <Button color = "dark">Add Delivery Boy</Button>
                                    </Card>
                                </a>
                            </Col>

                            <Col md="2">
                                <a href = "/delivery-boy-list">
                                    <Card body className="text-center">
                                    <div><i style = {{color : "#343a40", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-biking"></i></div>
                                        <Button color = "dark">Delivery Boy List</Button>
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

export default DeliveryManagement;
