import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Button } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShieldAlt, faPuzzlePiece, faRedoAlt, faExclamationCircle, faMoneyBillWave, faSuitcase, faTimesCircle, faRupeeSign, faPrint, faSignInAlt, faCrosshairs, faSignOutAlt, faShare, faUndo, faCheck, faCheckCircle, faShareSquare } from "@fortawesome/free-solid-svg-icons";
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
// import '@fortawesome/fontawesome-free/css/all.min.css';


//Import Breadcrumb

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                <br />
                    <Row>
                            <Col md = {{size: 2}}>
                                <a href = "/vendor-management">
                                    <Card body className="text-center">
                                        <div><i style = {{color : "#50a5f1", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-utensils"></i></div>
                                        <Button color = "info">Vendor Management</Button>
                                    </Card>
                                </a>
                            </Col>

                            <Col md="2">
                                <a href = "/user-management">
                                    <Card body className="text-center">
                                    <div><i style = {{color : "#f1b44c", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-user"></i></div>
                                        <Button color = "warning">User Management</Button>
                                    </Card>
                                </a>
                            </Col>

                            <Col md="2">
                                <a href = "/delivery-management">
                                    <Card body className="text-center">
                                    <div><i style = {{color : "#f46a6a", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-biking"></i></div>
                                        <Button color = "danger">Delivery Management</Button>
                                    </Card>
                                </a>
                            </Col>

                            <Col md="2">
                                <a href = "/order-management">
                                    <Card body className="text-center">
                                    <div><i style = {{color : "#343a40", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-shopping-cart"></i></div>
                                        <Button color = "dark">Order Management</Button>
                                    </Card>
                                </a>
                            </Col>
                            <Col md="2">
                                <a href = "/report">
                                    <Card body className="text-center">
                                    <div><i style = {{color : "#556ee6", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-chart-pie"></i></div>
                                        <Button color = "primary">Report</Button>
                                    </Card>
                                </a>
                            </Col>
                            <Col md="2">
                                <a href = "/master">
                                    <Card body className="text-center">
                                    <div><i style = {{color : "#34c38f", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-user-shield"></i></div>
                                        <Button color = "success">Master</Button>
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

export default LandingPage;
