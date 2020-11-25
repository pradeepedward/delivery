import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Button } from "reactstrap";


//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class DeliveryProfile extends Component {
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

                <Breadcrumbs title="Delivery" breadcrumbItem="Delivery Profile" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default DeliveryProfile;
