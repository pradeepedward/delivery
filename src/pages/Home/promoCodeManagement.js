import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Button } from "reactstrap";


//Import Breadcrumb

class PromocodeManagement extends Component {
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
                                <a href = "/add-promocode">
                                    <Card body className="text-center">
                                        <div><i style = {{color : "#343a40", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-percentage"></i></div>
                                        <Button color = "dark">Add Promocode</Button>
                                    </Card>
                                </a>
                            </Col>

                            <Col md="3">
                                <a href = "/promocode-list">
                                    <Card body className="text-center">
                                    <div><i style = {{color : "#343a40", fontSize: "60px", padding: "10px", cursor: "pointer"}} className="fas fa-percentage"></i></div>
                                        <Button color = "dark">Promocode List</Button>
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

export default PromocodeManagement;
