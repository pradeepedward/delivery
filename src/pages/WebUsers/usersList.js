import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import firebase from '../../firebase';

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firebaseData: []
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                        <Breadcrumbs title="User Management" breadcrumbItem="Users List" />

                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>

                                        <div className="table-responsive" data-pattern="priority-columns">
                                            <Table className="table mb-0 table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                            <th>Sl.No</th>
                                                            <th>Name</th>
                                                            <th>Username</th>
                                                            <th>Password</th>
                                                            <th>Action</th>
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

export default UsersList;
