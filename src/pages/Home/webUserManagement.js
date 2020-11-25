import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Button } from "reactstrap";


//Import Breadcrumb

class WebUserManagement extends Component {
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
                                <a href = "/add-webuser">
                                    <Card body className="text-center">
                                        <div><i style = {{color : "#343a40", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-user"></i></div>
                                        <Button color = "dark">Add Web User</Button>
                                    </Card>
                                </a>
                            </Col>

                            <Col md="3">
                                <a href = "/webuser-list">
                                    <Card body className="text-center">
                                    <div><i style = {{color : "#343a40", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-user"></i></div>
                                        <Button color = "dark">Webuser List</Button>
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

export default WebUserManagement;
