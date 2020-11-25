import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class CancelledOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                        <Breadcrumbs title="Orders" breadcrumbItem="Cancelled Orders" />

                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>

                                        <div className="table-responsive" data-pattern="priority-columns">
                                            <Table className="table mb-0 table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                            <th>Sl.No</th>
                                                            <th>Order Date</th>
                                                            <th>Order No</th>
                                                            <th>Customer Details</th>
                                                            <th>Chef Details</th>
                                                            <th>Items</th>
                                                            <th>Total</th>
                                                            <th>Payment</th>
                                                            <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                
                                                </tbody>
                                            </Table>
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CancelledOrders;
