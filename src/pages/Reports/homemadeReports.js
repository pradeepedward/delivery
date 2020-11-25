import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, FormGroup, Label, Input, Button } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import firebase from '../../firebase';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class HomemadeReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firebaseData: []
        };
    }

    componentDidMount() {

        let comp = this
        firebase.firestore().collection("Vendor").where("Category", "==", "Homemade")
        .onSnapshot(function(querySnapshot) {
            var cities = [];
            querySnapshot.forEach(function(doc) {
              const lock = {
                AccountName: doc.data().AccountName,
                AccountNumber: doc.data().AccountNumber,
                Address: doc.data().Address,
                BranchAddress: doc.data().BranchAddress,
                BranchName: doc.data().BranchName,
                Category: doc.data().Category,
                City: doc.data().City,
                CityPushId: doc.data().CityPushId,
                CloseTime: doc.data().CloseTime,
                Commission: doc.data().Commission,
                Cuisines: doc.data().Cuisines,
                DiscountType: doc.data().DiscountType,
                Zone: doc.data().Zone,
                ZonePushId: doc.data().ZonePushId,
                Email: doc.data().Email,
                FSSAIAddress: doc.data().FSSAIAddress,
                FSSAIExpiryDate:doc.data().FSSAIExpiryDate,
                FSSAINumber: doc.data().FSSAINumber,
                FSSAIImage: doc.data().FSSAIImage,
                GSTImage: doc.data().GSTImage,
                GSTNumber: doc.data().GSTNumber,
                IFSCCode: doc.data().IFSCCode,
                LICNumber: doc.data().LICNumber,
                LICImage: doc.data().LICImage,
                MobileNumber: doc.data().MobileNumber,
                Name: doc.data().Name,
                OfferAmount: doc.data().OfferAmount,
                OpenTime: doc.data().OpenTime,
                POC: doc.data().POC,
                PackingCharges:doc.data().PackingCharges,
                PancardImage: doc.data().PancardImage,
                PassbookImage: doc.data().PassbookImage,
                Password: doc.data().Password,
                PreparationTime: doc.data().PreparationTime,
                RestaurantImage: doc.data().VendorImage,
                Status: doc.data().Status,
                TargetAmount: doc.data().TargetAmount,
                Tax: doc.data().Tax,
                UserId: doc.data().UserId,
                Username: doc.data().Username
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

                        <Breadcrumbs title="Reports" breadcrumbItem="Homemade Vendor Report" />
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
                                                placeholder= "Search for Name, Number......"
                                                onKeyUp = {this.myFunction.bind(this)}
                                            />
                                                </form>
                                            </Col>

                                            <Col md = {{size: 2, offset: 4}}>
                                            <ReactHTMLTableToExcel  
                                                className="btn btn-primary"  
                                                table="dataTable"  
                                                filename="HomemadeVendorReport"  
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
                                                </Row> */}
                                                <br />
                                                <br />

                                        <div className="table-responsive" data-pattern="priority-columns">
                                            <Table className="table mb-0 table-striped table-bordered" id = "dataTable">
                                            <thead>
                                                    <tr>
                                                            <th>Sl.No</th>
                                                            <th>Vendor Id</th>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Mobile Number</th>
                                                            <th>Category</th>
                                                            <th>City</th>
                                                            <th>Zone</th>
                                                            <th>Packing Charges</th>
                                                            <th>Commission</th>
                                                            <th>Cuisines</th>
                                                            <th>Restaurant Open Time</th>
                                                            <th>Restaurant Close Time</th>
                                                            <th>Address</th>
                                                            <th>Estimated Preparation Time</th>
                                                            <th>POC Designation</th>
                                                            <th>Username</th>
                                                            <th>Password</th>
                                                            <th>Bank Account Name</th>
                                                            <th>Bank Account Number</th>
                                                            <th>IFSC Code</th>
                                                            <th>Branch Name</th>
                                                            <th>Branch Address</th>
                                                            <th>Discount Type</th>
                                                            <th>Target Amount</th>
                                                            <th>Offer Amount</th>
                                                            <th>Tax</th>
                                                            <th>GST Number</th>
                                                            <th>LIC Number</th>
                                                            <th>FSSAI License Number</th>
                                                            <th>FSSAI Expiry Date</th>
                                                            <th>FSSAI Address</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.state.firebaseData.map((rowData, index) => (
                                                    <tr key = {index}>
                                                        <td>{index + 1}</td>
                                                        <td>{rowData.UserId}</td>
                                                        <td>{rowData.Name}</td>
                                                        <td>{rowData.Email}</td>
                                                        <td>{rowData.MobileNumber}</td>
                                                        <td>{rowData.Category}</td>
                                                        <td>{rowData.City}</td>
                                                        <td>{rowData.Zone}</td>
                                                        <td>{rowData.PackingCharges}</td>
                                                        <td>{rowData.Commission}</td>
                                                        <td>{rowData.Cuisines}</td>
                                                        <td>{rowData.OpenTime}</td>
                                                        <td>{rowData.CloseTime}</td>
                                                        <td>{rowData.Address}</td>
                                                        <td>{rowData.PreparationTime}</td>
                                                        <td>{rowData.POC}</td>
                                                        <td>{rowData.Username}</td>
                                                        <td>{rowData.Password}</td>
                                                        <td>{rowData.AccountName}</td>
                                                        <td>{rowData.AccountNumber}</td>
                                                        <td>{rowData.IFSCCode}</td>
                                                        <td>{rowData.BranchName}</td>
                                                        <td>{rowData.BranchAddress}</td>
                                                        <td>{rowData.DiscountType}</td>
                                                        <td>{rowData.TargetAmount}</td>
                                                        <td>{rowData.OfferAmount}</td>
                                                        <td>{rowData.Tax}</td>
                                                        <td>{rowData.GSTNumber}</td>
                                                        <td>{rowData.LICNumber}</td>
                                                        <td>{rowData.FSSAINumber}</td>
                                                        <td>{rowData.FSSAIExpiryDate}</td>
                                                        <td>{rowData.FSSAIAddress}</td>
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

export default HomemadeReport;
