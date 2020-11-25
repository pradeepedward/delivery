import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import firebase from '../../firebase';

class DeliveryBoyDocument extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firebaseData: []
        };
    }

    componentDidMount() {
        let comp = this
        firebase.firestore().collection("DeliveryBoy")
        .onSnapshot(function(querySnapshot) {
            var cities = [];
            querySnapshot.forEach(function(doc) {
              const lock = {
                AadharImage: doc.data().AadharImage,
                AccountName: doc.data().AccountName,
                AccountNumber: doc.data().AccountNumber,
                Address1: doc.data().Address1,
                Address2:doc.data().Address2,
                BranchAddress: doc.data().BranchAddress,
                BranchName: doc.data().BranchName,
                Cash: doc.data().Cash,
                City: doc.data().City,
                CityPushId: doc.data().CityPushId,
                Zone: doc.data().Zone,
                ZonePushId: doc.data().ZonePushId,
                DLNumber: doc.data().DLNumber,
                DlImage: doc.data().DlImage,
                Email:doc.data().Email,
                IFSCCode: doc.data().IFSCCode,
                InsuranceImage: doc.data().InsuranceImage,
                InsuranceNumber: doc.data().InsuranceNumber,
                MobileNumber: doc.data().MobileNumber,
                Name: doc.data().Name,
                PassbookImage: doc.data().PassbookImage,
                PaymentType: doc.data().PaymentType,
                ProfileImage: doc.data().ProfileImage,
                RCImage: doc.data().RCImage,
                RCNumber:doc.data().RCNumber,
                Receipt: doc.data().Receipt,
                Status: doc.data().Status,
                VehicleName: doc.data().VehicleName,
                VehicleNumber: doc.data().VehicleNumber,
                PushId: doc.id
              }
              cities.push(lock)
            });
            comp.setState({
              firebaseData: cities
            })
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                        <Breadcrumbs title="Document" breadcrumbItem="Delivery Boy Document" />

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
                                                            <th>Mobile Number</th>
                                                            <th>RC Number</th>
                                                            <th>DL Number</th>
                                                            <th>Insurance Number</th>
                                                            <th>Profile Image</th>
                                                            <th>Aadhar card</th>
                                                            <th>Passbook/bank Statement</th>
                                                            <th>RC Book</th>
                                                            <th>Driving License</th>
                                                            <th>Insurance Image</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.state.firebaseData.map((rowData, index) => (
                                                    <tr key = {index}>
                                                        <td>{index + 1}</td>
                                                        <td>{rowData.Name}</td>
                                                        <td>{rowData.MobileNumber}</td>
                                                        <td>{rowData.RCNumber}</td>
                                                        <td>{rowData.DLNumber}</td>
                                                        <td>{rowData.InsuranceNumber}</td>
                                                        <td><img src= {rowData.ProfileImage} alt = "profile" className="img-responsive inline-block" width="150" height="150" /></td>
                                                        <td><img src= {rowData.AadharImage} alt = "profile" className="img-responsive inline-block" width="150" height="150" /></td>
                                                        <td><img src= {rowData.PassbookImage} alt = "profile" className="img-responsive inline-block" width="150" height="150" /></td>
                                                        <td><img src= {rowData.RCImage} alt = "profile" className="img-responsive inline-block" width="150" height="150" /></td>
                                                        <td><img src= {rowData.DlImage} alt = "profile" className="img-responsive inline-block" width="150" height="150" /></td>
                                                        <td><img src= {rowData.InsuranceImage} alt = "profile" className="img-responsive inline-block" width="150" height="150" /></td>
                                                    </tr>
                                                ))}
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

export default DeliveryBoyDocument;
