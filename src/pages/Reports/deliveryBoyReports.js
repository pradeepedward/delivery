import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, FormGroup, Label, Button, Input } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import firebase from '../../firebase';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class DeliveryBoyReport extends Component {
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

    myFunction() {
        var input, filter, table, tr, td1,td2,td3,td4,td5,td6,td7,td8,td9,td10,td11,td12,td13,td14,td15,td16,td17;
        var i,txtValue1,txtValue2,txtValue3,txtValue4,txtValue5,txtValue6,txtValue7,txtValue8,txtValue9,txtValue10,txtValue11,txtValue12,txtValue13,txtValue14,txtValue15,txtValue16,txtValue17;
        input = document.getElementById("search");
        filter = input.value.toUpperCase();
        table = document.getElementById("dataTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
        td1 = tr[i].getElementsByTagName("td")[1];
        td2 = tr[i].getElementsByTagName("td")[2];
        td3 = tr[i].getElementsByTagName("td")[3];
        td4 = tr[i].getElementsByTagName("td")[4];
        td5 = tr[i].getElementsByTagName("td")[5];
        td6 = tr[i].getElementsByTagName("td")[6];
        td7 = tr[i].getElementsByTagName("td")[7];
        td8 = tr[i].getElementsByTagName("td")[8];
        td9 = tr[i].getElementsByTagName("td")[9];
        td10 = tr[i].getElementsByTagName("td")[10];
        td11 = tr[i].getElementsByTagName("td")[11];
        td12 = tr[i].getElementsByTagName("td")[12];
        td13 = tr[i].getElementsByTagName("td")[13];
        td14 = tr[i].getElementsByTagName("td")[14];
        td15 = tr[i].getElementsByTagName("td")[15];
        td16 = tr[i].getElementsByTagName("td")[16];
        td17 = tr[i].getElementsByTagName("td")[17];
        if (td1) {
          txtValue1 = td1.textContent || td1.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          txtValue3 = td3.textContent || td3.innerText;
          txtValue4 = td4.textContent || td4.innerText;
          txtValue5 = td5.textContent || td5.innerText;
          txtValue6 = td6.textContent || td6.innerText;
          txtValue7 = td7.textContent || td7.innerText;
          txtValue8 = td8.textContent || td8.innerText;
          txtValue9 = td9.textContent || td9.innerText;
          txtValue10 = td10.textContent || td10.innerText;
          txtValue11 = td11.textContent || td11.innerText;
          txtValue12 = td12.textContent || td12.innerText;
          txtValue13 = td13.textContent || td13.innerText;
          txtValue14 = td14.textContent || td14.innerText;
          txtValue15 = td15.textContent || td15.innerText;
          txtValue16 = td16.textContent || td16.innerText;
          txtValue17 = td17.textContent || td17.innerText;
        
         var main = txtValue1+ txtValue2+txtValue3+txtValue4+txtValue5+txtValue6+txtValue7+txtValue8+txtValue9+txtValue10+txtValue11+txtValue12+txtValue13+txtValue14+txtValue15+txtValue16+txtValue17;
           if (main.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
        }
        }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                        <Breadcrumbs title="Reports" breadcrumbItem="DeliveryBoy Report" />
                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>

                                    <Row>
                                            <Col md = "6">
                                            <form>
                                            <Input
                                                type="text"
                                                name="search"
                                                id= "search"
                                                placeholder= "Search......"
                                                onKeyUp = {this.myFunction.bind(this)}
                                            />
                                                </form>
                                            </Col>

                                            <Col md = {{size: 2, offset: 4}}>
                                            <ReactHTMLTableToExcel  
                                                className="btn btn-primary"  
                                                table="dataTable"  
                                                filename="DeliveryBoyReport"  
                                                sheet="Sheet"  
                                                buttonText="Excel" />  
                                            </Col>
                                        </Row>
                                        <br /><br />

                                                {/* <Row>
                                                    <Col md="3">
                                                        <FormGroup>
                                                            <Label htmlFor="validationCustom02">From Date<span style = {{color: "red"}}>*</span></Label>
                                                            <Input
                                                            name="fromDate"
                                                            placeholder="Category Name"
                                                            type="date"
                                                            className="form-control"
                                                            id="fromDate"
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
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md = "3" style= {{margin: "auto"}}>
                                                        <Button color="primary" type="submit">Submit</Button>
                                                    </Col>            
                                                </Row> */}
                                                <br />
                                                <br />

                                        <div className="table-responsive" data-pattern="priority-columns">
                                            <Table className="table mb-0 table-striped table-bordered" id = "dataTable">
                                                <thead>
                                                    <tr>
                                                            <th>Sl.No</th>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Mobile Number</th>
                                                            <th>Address</th>
                                                            <th>City</th>
                                                            <th>Zone</th>
                                                            <th>Bank Account Name</th>
                                                            <th>Bank Account Number</th>
                                                            <th>IFSC Code</th>
                                                            <th>Branch Name</th>
                                                            <th>Branch Address</th>
                                                            <th>Vehicle Name</th>
                                                            <th>Vehicle Number</th>
                                                            <th>RC Number</th>
                                                            <th>DL Number</th>
                                                            <th>Insurance Number</th>
                                                            <th>Cash</th>
                                                            <th>Payment Type</th>
                                                            <th>Receipt</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.state.firebaseData.map((rowData, index) => (
                                                    <tr key = {index}>
                                                        <td>{index + 1}</td>
                                                        <td>{rowData.Name}</td>
                                                        <td>{rowData.Email}</td>
                                                        <td>{rowData.MobileNumber}</td>
                                                        <td>{rowData.Address1}</td>
                                                        <td>{rowData.City}</td>
                                                        <td>{rowData.Zone}</td>
                                                        <td>{rowData.AccountName}</td>
                                                        <td>{rowData.AccountNumber}</td>
                                                        <td>{rowData.IFSCCode}</td>
                                                        <td>{rowData.BranchName}</td>
                                                        <td>{rowData.BranchAddress}</td>
                                                        <td>{rowData.VehicleName}</td>
                                                        <td>{rowData.VehicleNumber}</td>
                                                        <td>{rowData.RCNumber}</td>
                                                        <td>{rowData.DLNumber}</td>
                                                        <td>{rowData.InsuranceNumber}</td>
                                                        <td>{rowData.Cash}</td>
                                                        <td>{rowData.PaymentType}</td>
                                                        <td>{rowData.Receipt}</td>
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

export default DeliveryBoyReport;
