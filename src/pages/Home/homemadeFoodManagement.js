import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Button } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShieldAlt, faPuzzlePiece, faRedoAlt, faExclamationCircle, faMoneyBillWave, faSuitcase, faTimesCircle, faRupeeSign, faPrint, faSignInAlt, faCrosshairs, faSignOutAlt, faShare, faUndo, faCheck, faCheckCircle, faShareSquare } from "@fortawesome/free-solid-svg-icons";
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
// import '@fortawesome/fontawesome-free/css/all.min.css';


//Import Breadcrumb

class HomemadeFoodManagement extends Component {
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
                            <Col md="3">
                                <a href = "/add-Food-Homemade">
                                    <Card body className="text-center">
                                    <div><i style = {{color : "#343a40", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-hamburger"></i></div>
                                        <Button color = "dark">Add Food for Homemade</Button>
                                    </Card>
                                </a>
                            </Col>
                            <Col md="3">
                                <a href = "/food-Homemade-List">
                                    <Card body className="text-center">
                                    <div><i style = {{color : "#343a40", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-hamburger"></i></div>
                                        <Button color = "dark">Food Homemade List</Button>
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

export default HomemadeFoodManagement;
