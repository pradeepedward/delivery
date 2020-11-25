import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class OrdersDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                        <Breadcrumbs title="Orders" breadcrumbItem="Orders Dashboard" />

                        {/* <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>

                                     

                                    </CardBody>
                                </Card>
                            </Col>
                        </Row> */}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default OrdersDashboard;
