import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Button } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShieldAlt, faPuzzlePiece, faRedoAlt, faExclamationCircle, faMoneyBillWave, faSuitcase, faTimesCircle, faRupeeSign, faPrint, faSignInAlt, faCrosshairs, faSignOutAlt, faShare, faUndo, faCheck, faCheckCircle, faShareSquare } from "@fortawesome/free-solid-svg-icons";
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
// import '@fortawesome/fontawesome-free/css/all.min.css';


//Import Breadcrumb

class CityManagement extends Component {
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
                            <Col md = {{size: 3}}>
                                <a href = "/add-city">
                                    <Card body className="text-center">
                                        <div><i style = {{color : "#343a40", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-map-marker-alt"></i></div>
                                        <Button color = "dark">Add City</Button>
                                    </Card>
                                </a>
                            </Col>

                            <Col md="3">
                                <a href = "/city-list">
                                    <Card body className="text-center">
                                    <div><i style = {{color : "#343a40", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-map-marker-alt"></i></div>
                                        <Button color = "dark">City List</Button>
                                    </Card>
                                </a>
                            </Col>
                            <Col md = {{size: 3}}>
                                <a href = "/add-zone">
                                    <Card body className="text-center">
                                        <div><i style = {{color : "#343a40", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-city"></i></div>
                                        <Button color = "dark">Zone</Button>
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

export default CityManagement;
