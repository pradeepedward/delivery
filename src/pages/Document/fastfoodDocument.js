import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Input } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import firebase from '../../firebase';

class FastFoodDocument extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firebaseData: []
        };
    }


    componentDidMount() {

        let comp = this
        firebase.firestore().collection("Vendor").where("Category", "==", "FastFood")
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
        var input, filter, table, tr, td1,td2,td3,td4,td5,td6,td7,td8;
        var i,txtValue1,txtValue2,txtValue3,txtValue4,txtValue5,txtValue6,txtValue7,txtValue8;
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
        if (td1) {
          txtValue1 = td1.textContent || td1.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          txtValue3 = td3.textContent || td3.innerText;
          txtValue4 = td4.textContent || td4.innerText;
          txtValue5 = td5.textContent || td5.innerText;
          txtValue6 = td6.textContent || td6.innerText;
          txtValue7 = td7.textContent || td7.innerText;
          txtValue8 = td8.textContent || td8.innerText;
        
         var main = txtValue1+ txtValue2+txtValue3+txtValue4+txtValue5+txtValue6+txtValue7+txtValue8;
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

                        <Breadcrumbs title="Document" breadcrumbItem="FastFood Vendor Document" />

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
                                                filename="VendorFastFoodReport"  
                                                sheet="Sheet"  
                                                buttonText="Excel" />  
                                            </Col>
                                        </Row>
                                        <br /><br />

                                        <div className="table-responsive" data-pattern="priority-columns">
                                            <Table className="table mb-0 table-striped table-bordered" id = "dataTable">
                                                <thead>
                                                    <tr>
                                                            <th>Sl.No</th>
                                                            <th>Vendor Id</th>
                                                            <th>Name</th>
                                                            <th>Tax</th>
                                                            <th>GST Number</th>
                                                            <th>LIC Number</th>
                                                            <th>FSSAI License Number</th>
                                                            <th>FSSAI Expiry Date</th>
                                                            <th>FSSAI Address</th>
                                                            <th>Vendor Image</th>
                                                            <th>Passbook</th>
                                                            <th>Pancard</th>
                                                            <th>GST</th>
                                                            <th>LIC</th>
                                                            <th>FSSAI</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.state.firebaseData.map((rowData, index) => (
                                                    <tr key = {index}>
                                                        <td>{index + 1}</td>
                                                        <td>{rowData.UserId}</td>
                                                        <td>{rowData.Name}</td>
                                                        <td>{rowData.Tax}</td>
                                                        <td>{rowData.GSTNumber}</td>
                                                        <td>{rowData.LICNumber}</td>
                                                        <td>{rowData.FSSAINumber}</td>
                                                        <td>{rowData.FSSAIExpiryDate}</td>
                                                        <td>{rowData.FSSAIAddress}</td>
                                                        <td><img src= {rowData.RestaurantImage} alt = "profile" className="img-responsive inline-block" width="150" height="150" /></td>
                                                        <td><img src= {rowData.PassbookImage} alt = "profile" className="img-responsive inline-block" width="150" height="150" /></td>
                                                        <td><img src= {rowData.PancardImage} alt = "profile" className="img-responsive inline-block" width="150" height="150" /></td>
                                                        <td><img src= {rowData.GSTImage} alt = "profile" className="img-responsive inline-block" width="150" height="150" /></td>
                                                        <td><img src= {rowData.LICImage} alt = "profile" className="img-responsive inline-block" width="150" height="150" /></td>
                                                        <td><img src= {rowData.FSSAIImage} alt = "profile" className="img-responsive inline-block" width="150" height="150" /></td>
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

export default FastFoodDocument;
