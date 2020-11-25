import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Input, Form, FormGroup, Label, Button } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';
import firebase from '../../../firebase';
import SweetAlert from "react-bootstrap-sweetalert";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class GroceryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firebaseData: [],
            restaurantName: '',
            mobileNumber: '',
            email: '',
            category: 'Select',
            city: 'Select',
            zone: 'Select',
            packingCharges: '',
            commission: '',
            cusines: '',
            openTime: '',
            closeTime: '',
            address: '',
            deliveryTime: '',
            poc: '',
            username: '',
            password: '',
            accountName: '',
            accountNumber: '',
            ifscCode: '',
            branchName: '',
            branchAddress: '',
            discountType: 'Select',
            targetAmount: '',
            offerAmount: '',
            restaurantImage: '',
            passbookImage: '',
            pancardImage: '',
            tax: '',
            gstNumber: '',
            gstImage: '',
            licNumber: '',
            licImage: '',
            fssaiNumber: '',
            fssaiExpiryDate: '',
            addressFSSAI: '',
            fssaiImage: '',
            cities: [],
            cityName: '', 
            zones: [],
            zoneName: '',
            success_msg: false,
            userId: ''
        };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
      }

    componentDidMount() {

        let newData = []
        firebase.firestore().collection("City").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const lock = {
                    Name: doc.data().Name,
                    PushId: doc.id,
                }
                newData.push(lock)
            });
            this.setState({
                cities: newData
            })
         });

        let comp = this
        firebase.firestore().collection("Vendor").where("Category", "==", "Grocery")
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

    handleSubmit(e) {
        e.preventDefault();

        let data = this.state
        let comp = this

        if(data.restaurantName === '') {
            alert("Enter Vendor Name");
            document.getElementById("restaurantName").focus();
            return;
        }

        if(data.mobileNumber === '') {
            alert("Enter Mobile Number");
            document.getElementById("mobileNumber").focus();
            return;
        }

        if(data.mobileNumber.length != 10) {
            alert("Enter Correct Mobile Number");
            document.getElementById("mobileNumber").focus();
            return;
        }

        if(data.email === '') {
            alert("Enter Email");
            document.getElementById("email").focus();
            return;
        }

        if(data.city === 'Select') {
            alert("Select City");
            document.getElementById("city").focus();
            return;
        }

        if(data.zone === 'Select') {
            alert("Select Zone");
            document.getElementById("zone").focus();
            return;
        }

        if(data.packingCharges === '') {
            alert("Enter Packing Charges");
            document.getElementById("packingCharges").focus();
            return;
        }

        if(data.commission === '') {
            alert("Enter Commission");
            document.getElementById("commission").focus();
            return;
        }

        if(data.cusines === '') {
            alert("Enter Cuisines");
            document.getElementById("cusines").focus();
            return;
        }

        if(data.openTime === '') {
            alert("Enter Open Time");
            document.getElementById("openTime").focus();
            return;
        }

        if(data.closeTime === '') {
            alert("Enter Close Time");
            document.getElementById("closeTime").focus();
            return;
        }

        if(data.address === '') {
            alert("Enter Address");
            document.getElementById("address").focus();
            return;
        }

        if(data.deliveryTime === '') {
            alert("Enter Estimated Preparing Time");
            document.getElementById("deliveryTime").focus();
            return;
        }

        if(data.poc === '') {
            alert("Enter POC Designation");
            document.getElementById("poc").focus();
            return;
        }

        if(data.username === '') {
            alert("Enter Username");
            document.getElementById("username").focus();
            return;
        }

        if(data.password === '') {
            alert("Enter Password");
            document.getElementById("password").focus();
            return;
        }

        if(data.accountName === '') {
            alert("Enter Account Name");
            document.getElementById("accountName").focus();
            return;
        }

        if(data.accountNumber === '') {
            alert("Enter Account Number");
            document.getElementById("accountNumber").focus();
            return;
        }

        if(data.ifscCode === '') {
            alert("Enter IFSC Code");
            document.getElementById("ifscCode").focus();
            return;
        }

        if(data.branchName === '') {
            alert("Enter Branch Name");
            document.getElementById("branchName").focus();
            return;
        }

        if(data.branchAddress === '') {
            alert("Enter Branch Address");
            document.getElementById("branchAddress").focus();
            return;
        }

        if(data.restaurantImage === '') {
            alert("Select Vendor Image");
            document.getElementById("restaurantImage").focus();
            return;
        }

        if(data.passbookImage === '') {
            alert("Select Passbook Image");
            document.getElementById("passbookImage").focus();
            return;
        }

        if(data.pancardImage === '') {
            alert("Select Pancard Image");
            document.getElementById("pancardImage").focus();
            return;
        }

        if(data.gstImage === '') {
            alert("Select GST Image");
            document.getElementById("gstImage").focus();
            return;
        }

        if(data.gstNumber === '') {
            alert("Enter GST Number");
            document.getElementById("gstNumber").focus();
            return;
        }

        if(data.licImage === '') {
            alert("Select LIC Image");
            document.getElementById("licImage").focus();
            return;
        }

        if(data.licNumber === '') {
            alert("Enter LIC Number");
            document.getElementById("licNumber").focus();
            return;
        }

        if(data.fssaiImage === '') {
            alert("Select FSSAI Image");
            document.getElementById("fssaiImage").focus();
            return;
        }

        if(data.fssaiNumber === '') {
            alert("Enter FSSAI Number");
            document.getElementById("fssaiNumber").focus();
            return;
        }

        if(data.fssaiExpiryDate === '') {
            alert("Select FSSAI Expiry Date");
            document.getElementById("fssaiExpiryDate").focus();
            return;
        }

        if(data.addressFSSAI === '') {
            alert("Enter FSSAI Address");
            document.getElementById("addressFSSAI").focus();
            return;
        }

        if(data.tax === '') {
            alert("Enter Tax");
            document.getElementById("tax").focus();
            return;
        }

                firebase.firestore().collection('Vendor').doc(data.userId).set({
                    Name: data.restaurantName,
                    Email: data.email,
                    MobileNumber: data.mobileNumber,
                    Category: "Grocery",
                    City: data.cityName,
                    CityPushId: data.city,
                    Zone: data.zoneName,
                    ZonePushId: data.zone,
                    PackingCharges: data.packingCharges,
                    Commission: data.commission,
                    Cuisines: data.cusines,
                    OpenTime: data.openTime,
                    CloseTime: data.closeTime,
                    Address: data.address,
                    PreparationTime: data.deliveryTime,
                    POC: data.poc,
                    Username: data.username,
                    Password: data.password,
                    AccountName: data.accountName,
                    AccountNumber: data.accountNumber,
                    IFSCCode: data.ifscCode,
                    BranchName: data.branchName,
                    BranchAddress: data.branchAddress,
                    DiscountType: data.discountType,
                    TargetAmount: data.targetAmount,
                    OfferAmount: data.offerAmount,
                    VendorImage: data.restaurantImage,
                    PassbookImage: data.passbookImage,
                    PancardImage: data.pancardImage,
                    Tax: data.tax,
                    GSTNumber: data.gstNumber,
                    GSTImage: data.gstImage,
                    LICNumber: data.licNumber,
                    LICImage: data.licImage,
                    FSSAINumber: data.fssaiNumber,
                    FSSAIExpiryDate: data.fssaiExpiryDate,
                    FSSAIAddress: data.addressFSSAI,
                    FSSAIImage: data.fssaiImage,
                    Status: "Active",
                    UserId: data.userId,
                    ApprovalStatus: "Pending",
                })
                .then(function(docRef) {
                    comp.setState({
                        success_msg: true
                    })
                })

                data.restaurantName = ""
                data.email = ""
                data.mobileNumber = ""
                data.category = "Select"
                data.city = "Select"
                data.cityName =''
                data.zone = 'Select'
                data.zoneName = ''
                data.packingCharges = ""
                data.commission = ""
                data.cusines = ""
                data.openTime = ""
                data.closeTime = ""
                data.address = ""
                data.deliveryTime = ""
                data.poc = ""
                data.username = ""
                data.password = ""
                data.accountName = ""
                data.accountNumber = ""
                data.ifscCode = ""
                data.branchName = ""
                data.branchAddress = ""
                data.discountType = "Select"
                data.targetAmount = ""
                data.offerAmount = ""
                data.restaurantImage = ""
                data.passbookImage =''
                data.pancardImage = ''
                data.tax = ''
                data.gstImage = ""
                data.gstNumber = ""
                data.licNumber = ""
                data.licImage = ""
                data.fssaiNumber = ""
                data.fssaiExpiryDate = ""
                data.addressFSSAI = ""
                data.fssaiImage = ""
                document.getElementById("create-form").reset()     
    }

    cityOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

        firebase.firestore().collection("City").doc(e.target.value).get().then((querySnapshot) => {
            this.setState({
                cityName:querySnapshot.data().Name
            })
        })

        let newData = []
        firebase.firestore().collection("City").doc(e.target.value).collection("Zone").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const lock = {
                    Name: doc.data().Name,
                    PushId: doc.id,
                }
                newData.push(lock)
            });
            this.setState({
                zones: newData
            })
         });
    }

    zoneOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

        firebase.firestore().collection("City").doc(this.state.city).collection("Zone").doc(e.target.value).get().then((querySnapshot) => {
            this.setState({
                zoneName:querySnapshot.data().Name
            })
        })
    }

    restaurantUpload = e =>{
        
        if(e.target.files[0] === 0){
           alert("Add Vendor Image");
           return;
       }
      
       const ref = firebase.storage().ref("/Grocery/");
       const file = e.target.files[0];
       const name = e.target.files[0] + Date();
       const metadata = {
       contentType: file.type
       };
       const task = ref.child(name).put(file, metadata);
       task
       .then(snapshot => snapshot.ref.getDownloadURL())
       .then((url) => {
         this.setState({
           restaurantImage: url
         })
       })
       .catch(console.error);         
      }

      panUpload = e =>{
        
        if(e.target.files[0] === 0){
           alert("Add PanCard Image");
           return;
       }
      
       const ref = firebase.storage().ref("/Grocery/");
       const file = e.target.files[0];
       const name = e.target.files[0] + Date();
       const metadata = {
       contentType: file.type
       };
       const task = ref.child(name).put(file, metadata);
       task
       .then(snapshot => snapshot.ref.getDownloadURL())
       .then((url) => {
         this.setState({
           pancardImage: url
         })
       })
       .catch(console.error);         
      }

      passbookUpload = e =>{
        
        if(e.target.files[0] === 0){
           alert("Add Passbook Image");
           return;
       }
      
       const ref = firebase.storage().ref("/Grocery/");
       const file = e.target.files[0];
       const name = e.target.files[0] + Date();
       const metadata = {
       contentType: file.type
       };
       const task = ref.child(name).put(file, metadata);
       task
       .then(snapshot => snapshot.ref.getDownloadURL())
       .then((url) => {
         this.setState({
           passbookImage: url
         })
       })
       .catch(console.error);         
      }

      gstUpload = e =>{
        
        if(e.target.files[0] === 0){
           alert("Add GST Image");
           return;
       }
      
       const ref = firebase.storage().ref("/Grocery/");
       const file = e.target.files[0];
       const name = e.target.files[0] + Date();
       const metadata = {
       contentType: file.type
       };
       const task = ref.child(name).put(file, metadata);
       task
       .then(snapshot => snapshot.ref.getDownloadURL())
       .then((url) => {
         this.setState({
           gstImage: url
         })
       })
       .catch(console.error);         
      }

      licUpload = e =>{
        
        if(e.target.files[0] === 0){
           alert("Add LIC Image");
           return;
       }
      
       const ref = firebase.storage().ref("/Grocery/");
       const file = e.target.files[0];
       const name = e.target.files[0] + Date();
       const metadata = {
       contentType: file.type
       };
       const task = ref.child(name).put(file, metadata);
       task
       .then(snapshot => snapshot.ref.getDownloadURL())
       .then((url) => {
         this.setState({
           licImage: url
         })
       })
       .catch(console.error);         
      }

      fssaiUplaod = e =>{
        
        if(e.target.files[0] === 0){
           alert("Add FSSAI Image");
           return;
       }
      
       const ref = firebase.storage().ref("/Grocery/");
       const file = e.target.files[0];
       const name = e.target.files[0] + Date();
       const metadata = {
       contentType: file.type
       };
       const task = ref.child(name).put(file, metadata);
       task
       .then(snapshot => snapshot.ref.getDownloadURL())
       .then((url) => {
         this.setState({
           fssaiImage: url
         })
       })
       .catch(console.error);         
      }

      sweetAlertOnConfirm(){
        this.setState({
            success_msg: false
        })
        document.getElementById("ven-list").style.display = "block";
        document.getElementById("ven-update").style.display = "none";
    }

    editRow(key) {
        document.getElementById("ven-list").style.display = "none";
        document.getElementById("ven-update").style.display = "block";


        let data = this.state
        data.restaurantName = key.Name
        data.email = key.Email
        data.mobileNumber = key.MobileNumber
        data.cityName = key.City
        data.city = key.CityPushId
        data.zoneName = key.Zone
        data.zone = key.ZonePushId
        data.packingCharges = key.PackingCharges
        data.commission = key.Commission
        data.cusines = key.Cuisines
        data.openTime = key.OpenTime
        data.closeTime = key.CloseTime
        data.address = key.Address
        data.deliveryTime = key.PreparationTime
        data.poc = key.POC
        data.username = key.Username
        data.password = key.Password
        data.accountName = key.AccountName
        data.accountNumber = key.AccountNumber
        data.ifscCode = key.IFSCCode
        data.branchName = key.BranchName
        data.branchAddress = key.BranchAddress
        data.discountType = key.DiscountType
        data.targetAmount = key.TargetAmount
        data.offerAmount = key.OfferAmount
        data.insuranceNumber = key.InsuranceNumber
        data.restaurantImage = key.RestaurantImage
        data.passbookImage = key.PassbookImage
        data.pancardImage = key.PancardImage
        data.tax = key.Tax
        data.gstNumber = key.GSTNumber
        data.gstImage = key.GSTImage
        data.licNumber = key.LICNumber
        data.licImage = key.LICImage
        data.fssaiNumber = key.FSSAINumber
        data.fssaiExpiryDate  = key.FSSAIExpiryDate
        data.addressFSSAI = key.FSSAIAddress
        data.fssaiImage = key.FSSAIImage
        data.userId = key.UserId

        document.getElementById("restaurantName").value = key.Name
        document.getElementById("email").value = key.Email
        document.getElementById("mobileNumber").value = key.MobileNumber
        document.getElementById("city").value = key.CityPushId

        let newData = []
        firebase.firestore().collection("City").doc(key.CityPushId).collection("Zone").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const lock = {
                    Name: doc.data().Name,
                    PushId: doc.id,
                }
                newData.push(lock)
            });
            this.setState({
                zones: newData
            })
            document.getElementById("zone").value = key.ZonePushId
         });

        document.getElementById("packingCharges").value = key.PackingCharges
        document.getElementById("commission").value = key.Commission
        document.getElementById("cusines").value = key.Cuisines
        document.getElementById("openTime").value = key.OpenTime
        document.getElementById("closeTime").value = key.CloseTime
        document.getElementById("address").value = key.Address
        document.getElementById("deliveryTime").value = key.PreparationTime
        document.getElementById("poc").value = key.POC
        document.getElementById("username").value = key.Username 
        document.getElementById("password").value = key.Password 
        document.getElementById("accountName").value = key.AccountName
        document.getElementById("accountNumber").value = key.AccountNumber
        document.getElementById("ifscCode").value = key.IFSCCode
        document.getElementById("branchName").value = key.BranchName
        document.getElementById("branchAddress").value = key.BranchAddress
        document.getElementById("discountType").value = key.DiscountType
        document.getElementById("targetAmount").value = key.TargetAmount
        document.getElementById("offerAmount").value = key.OfferAmount
        document.getElementById("tax").value = key.Tax
        document.getElementById("gstNumber").value = key.GSTNumber
        document.getElementById("licNumber").value = key.LICNumber
        document.getElementById("fssaiNumber").value = key.FSSAINumber
        document.getElementById("fssaiExpiryDate").value = key.FSSAIExpiryDate
        document.getElementById("addressFSSAI").value = key.FSSAIAddress

    }

    back(){
        document.getElementById("ven-list").style.display = "block";
        document.getElementById("ven-update").style.display = "none";
    }

    delete(key) {
        if (window.confirm('Are you sure you want to delete the grocery vendor?')) {
            firebase.firestore().collection('Vendor').doc(key.UserId).delete()
            alert("Successfully Deleted!")
          } else {}
    }

    myFunction() {
        var input, filter, table, tr, td1,td2,td3,td4,td5,td6;
        var i,txtValue1,txtValue2,txtValue3,txtValue4,txtValue5,txtValue6;
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
        if (td1) {
          txtValue1 = td1.textContent || td1.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          txtValue3 = td3.textContent || td3.innerText;
          txtValue4 = td4.textContent || td4.innerText;
          txtValue5 = td5.textContent || td5.innerText;
          txtValue6 = td6.textContent || td6.innerText;
        
         var main = txtValue1+ txtValue2+txtValue3+txtValue4+txtValue5+txtValue6;
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

                        <Breadcrumbs title="Grocery" breadcrumbItem="Grocery List" />

                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>
                                        <div id = "ven-list">

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
                                                filename="VendorGroceryReport"  
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
                                                            <th>Id</th>
                                                            <th>Name</th>
                                                            <th>Mobile Number</th>
                                                            <th>Email</th>
                                                            <th>City</th>
                                                            <th>Zone</th>
                                                            <th>Details</th>
                                                            <th>Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.state.firebaseData.map((rowData, index) => (
                                                    <tr key = {index}>
                                                        <td>{index + 1}</td>
                                                        <td>{rowData.UserId}</td>
                                                        <td>{rowData.Name}</td>
                                                        <td>{rowData.MobileNumber}</td>
                                                        <td>{rowData.Email}</td>
                                                        <td>{rowData.City}</td>
                                                        <td>{rowData.Zone}</td>
                                                        <td onClick = {this.editRow.bind(this, rowData)}><i style = {{color : "#343a40", fontSize: "20px", padding: "10px", cursor: "pointer"}} className="fas fa-edit"></i></td>
                                                        <td onClick = {this.delete.bind(this, rowData)}><i style = {{color : "red", fontSize: "20px", padding: "10px", cursor: "pointer"}} className="fas fa-trash"></i></td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </Table>
                                        </div>
                                        </div>

                                        <div id = "ven-update" style = {{display: "none"}}>
                                        <Form id = "create-form">
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom03">Vendor Name<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="restaurantName"
                                      placeholder="Vendor Name"
                                      type="text"
                                      className="form-control"
                                      id="restaurantName"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md = "4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Mobile Number<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                    name="mobileNumber"
                                    placeholder="Moile Number"
                                    type="number"
                                    className="form-control"
                                    id="mobileNumber"
                                    onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                                
                            </Col>
                        <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom03">Email<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="email"
                                      placeholder="Email"
                                      type="text"
                                      className="form-control"
                                      id="email"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>   
                            
                        </Row>
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">City<span style = {{color: "red"}}>*</span></Label>
                                    <Input type="select" id = "city" name = "city" onChange = {this.cityOnChange.bind(this)}>
                                        <option value = "Select">Select City</option>
                                        {this.state.cities.map((city, index) => {
                                            return (
                                                <option key = {index} value={city.PushId}>{city.Name}</option>
                                            );
                                        })};
                                    </Input> 
                                </FormGroup>
                            </Col>
                            <Col md = "4">
                            <FormGroup>

                                <Label htmlFor="validationCustom05">Zone<span style = {{color: "red"}}>*</span></Label>
                                <Input type="select" id = "zone" name = "zone" onChange = {this.zoneOnChange.bind(this)}>
                                    <option value = "Select">Select Zone</option>
                                    {this.state.zones.map((city, index) => {
                                        return (
                                            <option key = {index} value={city.PushId}>{city.Name}</option>
                                        );
                                    })};
                                </Input> 
                            </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Packing Charges<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="packingCharges"
                                      placeholder="Packing Charges"
                                      type="number"
                                      className="form-control"
                                      id="packingCharges"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Commission<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="commission"
                                      placeholder="Commission"
                                      type="number"
                                      className="form-control"
                                      id="commission"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            
                           
                        </Row>

                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Cuisines<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                        name="cusines"
                                        placeholder="Cusines"
                                        type="text"
                                        className="form-control"
                                        id="cusines"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Open Time<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                        name="openTime"
                                        placeholder="Open Time"
                                        type="time"
                                        className="form-control"
                                        id="openTime"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md= "4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Close Time<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                        name="closeTime"
                                        placeholder="Close Time"
                                        type="time"
                                        className="form-control"
                                        id="closeTime"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Address<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                        name="address"
                                        placeholder="Address"
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Estimated Preparing Time<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                        name="deliveryTime"
                                        placeholder="Preparing Time"
                                        type="text"
                                        className="form-control"
                                        id="deliveryTime"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">POC Designation<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                        name="poc"
                                        placeholder="POC Designation"
                                        type="text"
                                        className="form-control"
                                        id="poc"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <br />

                        <h5>Login Credentials</h5>
                        <Row>
                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Username<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="username"
                                        placeholder="Username"
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        onChange = {this.handleChange.bind(this)}
                                    /> 
                            </FormGroup>
                            </Col>
                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Password<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="password"
                                        placeholder="Password"
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                            </FormGroup>
                            </Col>
                        </Row>
                        <br />
                        

                        <h5>Bank Details</h5>
                        <Row>
                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Bank Account Name<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="accountName"
                                        placeholder="Account Name"
                                        type="text"
                                        className="form-control"
                                        id="accountName"
                                        onChange = {this.handleChange.bind(this)}
                                    /> 
                            </FormGroup>
                            </Col>
                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Bank Account Number<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="accountNumber"
                                        placeholder="Account Number"
                                        type="number"
                                        className="form-control"
                                        id="accountNumber"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                            </FormGroup>
                            </Col>
                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Bank IFSC Code<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="ifscCode"
                                        placeholder="IFSC Code"
                                        type="text"
                                        className="form-control"
                                        id="ifscCode"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                            </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                        <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Branch Name<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="branchName"
                                        placeholder="Branch Name"
                                        type="text"
                                        className="form-control"
                                        id="branchName"
                                        onChange = {this.handleChange.bind(this)}
                                    /> 
                            </FormGroup>
                            </Col>
                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Branch Address<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="branchAddress"
                                        placeholder="Branch Address"
                                        type="text"
                                        className="form-control"
                                        id="branchAddress"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                            </FormGroup>
                            </Col>
                        </Row>
                        <br />

                        <h5>Offer Settings</h5>
                        <Row>
                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Dicount Type</Label>
                                <Input type="select" id = "discountType" name = "discountType" onChange = {this.handleChange.bind(this)}>
                                    <option value = "Select">Select</option>
                                    <option value = "Flat Offer">Flat Offer</option>
                                    <option value = "Discount">Discount</option>
                                </Input> 
                            </FormGroup>
                            </Col>
                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Target Amount</Label>
                                <Input
                                        name="targetAmount"
                                        placeholder="Target Amount"
                                        type="number"
                                        className="form-control"
                                        id="targetAmount"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                            </FormGroup>
                            </Col>
                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Offer Amount</Label>
                                <Input
                                        name="offerAmount"
                                        placeholder="Offer Amount"
                                        type="number"
                                        className="form-control"
                                        id="offerAmount"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                            </FormGroup>
                            </Col>
                        </Row>

                        <br />
                        <h5>Documents Upload</h5>
                        <Row>
                        <Col md = "8">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Vendor Image<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="restaurantImage"
                                        placeholder="Offer Amount"
                                        type="file"
                                        className="form-control"
                                        id="restaurantImage"
                                        onChange = {this.restaurantUpload}
                                    />
                            </FormGroup>
                            </Col>

                            <Col md = "8">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Passbook/Bank Statetment<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="passbookImage"
                                        placeholder="Offer Amount"
                                        type="file"
                                        className="form-control"
                                        id="passbookImage"
                                        onChange = {this.passbookUpload}
                                    />
                            </FormGroup>
                            </Col>

                            <Col md = "8">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Pan Card<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="pancardImage"
                                        placeholder="Offer Amount"
                                        type="file"
                                        className="form-control"
                                        id="pancardImage"
                                        onChange = {this.panUpload}
                                    />
                            </FormGroup>
                            </Col>


                            <Col md = "8">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">GST<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="gstImage"
                                        placeholder="Offer Amount"
                                        type="file"
                                        className="form-control"
                                        id="gstImage"
                                        onChange = {this.gstUpload}
                                    />
                            </FormGroup>
                            </Col>

                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">GST Number<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="gstNumber"
                                        placeholder="GST Number"
                                        type="text"
                                        className="form-control"
                                        id="gstNumber"
                                        onChange = {this.handleChange.bind(this)}
                                    /> 
                            </FormGroup>
                            </Col>

                            <Col md = "8">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">LIC<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="licImage"
                                        placeholder="Offer Amount"
                                        type="file"
                                        className="form-control"
                                        id="licImage"
                                        onChange = {this.licUpload}
                                    />
                            </FormGroup>
                            </Col>


                        <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">LIC Number<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="licNumber"
                                        placeholder="LIC Number"
                                        type="text"
                                        className="form-control"
                                        id="licNumber"
                                        onChange = {this.handleChange.bind(this)}
                                    /> 
                            </FormGroup>
                            </Col>

                            <Col md = "8">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">FSSAI<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="fssaiImage"
                                        placeholder="Offer Amount"
                                        type="file"
                                        className="form-control"
                                        id="fssaiImage"
                                        onChange = {this.fssaiUplaod}
                                    />
                            </FormGroup>
                            </Col>


                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">FSSAI License Number<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="fssaiNumber"
                                        placeholder="FSSAI License Number"
                                        type="text"
                                        className="form-control"
                                        id="fssaiNumber"
                                        onChange = {this.handleChange.bind(this)}
                                    /> 
                            </FormGroup>
                            </Col>


                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">FSSAI Expiry date<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="fssaiExpiryDate"
                                        placeholder="FSSAI Expiry date"
                                        type="date"
                                        className="form-control"
                                        id="fssaiExpiryDate"
                                        onChange = {this.handleChange.bind(this)}
                                    /> 
                            </FormGroup>
                            </Col>

                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Address on FSSAI<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="addressFSSAI"
                                        placeholder="FSSAI Address"
                                        type="text"
                                        className="form-control"
                                        id="addressFSSAI"
                                        onChange = {this.handleChange.bind(this)}
                                    /> 
                            </FormGroup>
                            </Col>


                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Tax<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="tax"
                                        placeholder="Tax"
                                        type="text"
                                        className="form-control"
                                        id="tax"
                                        onChange = {this.handleChange.bind(this)}
                                    /> 
                            </FormGroup>
                            </Col>
                        </Row>
                        </Form>
                        <br />
                        <Button color="primary" onClick = {this.handleSubmit.bind(this)} type="submit">Update</Button>
                                            <Button color="secondary" onClick = {this.back.bind(this)} style = {{marginLeft: "10px"}} >Back</Button>
                                            {this.state.success_msg ? (
											<SweetAlert
												title="Great"
												success
												confirmBtnBsStyle="success"
                                                onConfirm={this.sweetAlertOnConfirm.bind(this)}
											>
												Grocery Vendor Updated Successfully!
											</SweetAlert>
										) : null}
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

export default GroceryList;
