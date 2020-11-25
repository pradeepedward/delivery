import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, FormGroup, Label, Input, Button } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class GroceryPayouts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                        <Breadcrumbs title="Payouts" breadcrumbItem="Grocery Vendor Payouts" />

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
                                            <Row>
                                                    <Col md="3">
                                                        <FormGroup>
                                                            <Label htmlFor="validationCustom02">From Date<span style = {{color: "red"}}>*</span></Label>
                                                            <Input
                                                            name="fromDate"
                                                            placeholder="Category Name"
                                                            type="date"
                                                            className="form-control"
                                                            id="fromDate"
                                                            // onChange = {this.handleChange.bind(this)}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="3">
                                                        <FormGroup>
                                                            <Label htmlFor="validationCustom04">To Date<span style = {{color: "red"}}>*</span></Label>
                                                            <Input
                                                            name="toDate"
                                                            placeholder="Category Image"
                                                            type="date"
                                                            className="form-control"
                                                            id="toDate"
                                                            // onChange = {this.imageUpload}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md = "3" style= {{margin: "auto"}}>
                                                        <Button color="primary" type="submit">Submit</Button>
                                                    </Col>            
                                                </Row>
                                                <br />
                                                <br />

                                        <div className="table-responsive" data-pattern="priority-columns">
                                            <Table className="table mb-0 table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                            <th>Sl.No</th>
                                                            <th>Name</th>
                                                            <th>City</th>
                                                            <th>Contact Details</th>
                                                            <th>Image</th>
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

export default GroceryPayouts;
