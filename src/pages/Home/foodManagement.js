import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Button } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShieldAlt, faPuzzlePiece, faRedoAlt, faExclamationCircle, faMoneyBillWave, faSuitcase, faTimesCircle, faRupeeSign, faPrint, faSignInAlt, faCrosshairs, faSignOutAlt, faShare, faUndo, faCheck, faCheckCircle, faShareSquare } from "@fortawesome/free-solid-svg-icons";
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
// import '@fortawesome/fontawesome-free/css/all.min.css';


//Import Breadcrumb

class FoodManagement extends Component {
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
                            <Col md = {{size: 3}}>
                                <a href = "/add-Food-Category">
                                    <Card body className="text-center">
                                        <div><i style = {{color : "#343a40", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-hamburger"></i></div>
                                        <Button color = "dark">Food Categories</Button>
                                    </Card>
                                </a>
                            </Col>

                            <Col md="3">
                                <a href = "/food-Category">
                                    <Card body className="text-center">
                                    <div><i style = {{color : "#343a40", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-hamburger"></i></div>
                                        <Button color = "dark">Category List</Button>
                                    </Card>
                                </a>
                            </Col>
                            <Col md="3">
                                <a href = "/add-Food-Restaurant">
                                    <Card body className="text-center">
                                    <div><i style = {{color : "#343a40", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-hamburger"></i></div>
                                        <Button color = "dark">Add Food for Restaurant</Button>
                                    </Card>
                                </a>
                            </Col>
                            <Col md="3">
                                <a href = "/food-Restaurant-List">
                                    <Card body className="text-center">
                                    <div><i style = {{color : "#343a40", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-hamburger"></i></div>
                                        <Button color = "dark">Food Restaurant List</Button>
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

export default FoodManagement;
