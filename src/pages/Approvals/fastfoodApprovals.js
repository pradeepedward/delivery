import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Input } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class FastFoodApprovals extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                        <Breadcrumbs title="Approvals" breadcrumbItem="FastFood Vendor Approvals" />

                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>

                                    <Row>
                                            <Col md = "6">
                                            <form>
                                                <Input
                                                    placeholder="Search for..."
                                                    value={this.state.query}
                                                    onChange={this.handleInputChange}
                                                    className = "form-control"
                                                />
                                                </form>
                                            </Col>
                                        </Row>
                                        <br /><br />

                                        <div className="table-responsive" data-pattern="priority-columns">
                                            <Table className="table mb-0 table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                            <th>Sl.No</th>
                                                            <th>Name</th>
                                                            <th>Mobile Number</th>
                                                            <th>Email</th>
                                                            <th>Image</th>
                                                            <th>Address</th>
                                                            <th>Status</th>
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

export default FastFoodApprovals;
