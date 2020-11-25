import React, { Component } from "react";
import { Card, CardBody, Col, Row, CardTitle, CardSubtitle,Container, Button, Input, Label, FormGroup, Form } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';
import firebase from '../../../firebase';
import SweetAlert from "react-bootstrap-sweetalert";

class AddGrocery extends Component {
    constructor(props) {
        super(props);
        this.state = { 
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
            success_msg: false
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
            alert("Enter Vendor Open Time");
            document.getElementById("openTime").focus();
            return;
        }

        if(data.closeTime === '') {
            alert("Enter Vendor Close Time");
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

              let gr = 0
    
                firebase.firestore().collection("CategoryIdentity").doc("Grocery").get().then((querySnapshot) => {
                    gr = querySnapshot.data().entity
                })
    
                setTimeout(
                    function() {
                        gr = gr + 1

                firebase.firestore().collection('Vendor').doc("GR"+gr).set({
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
                    UserId: "GR"+ gr,
                    ApprovalStatus: "Pending",
                    Location: "",
                })
                .then(function(docRef) {
                    comp.setState({
                        success_msg: true
                    })
                })

                var ref = firebase.firestore().collection('CategoryIdentity').doc('Grocery');
                            ref.update({
                                entity: firebase.firestore.FieldValue.increment(1)
                            });

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

                },1000
            );     
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

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid={true}>

                        <Breadcrumbs title="Grocery" breadcrumbItem="Add Grocery Vendor" />
                <Row>
                    <Col>
                        <Card>
                        <CardBody>
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
                        
                                               
                        <Button color="primary" onClick = {this.handleSubmit.bind(this)} type="submit">Submit</Button>
                                            {this.state.success_msg ? (
											<SweetAlert
												title="Great"
												success
												confirmBtnBsStyle="success"
												onConfirm={() => this.setState({ success_msg: false })}
											>
												Grocery Vendor Successfully Added!
											</SweetAlert>
										) : null}

                            </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default AddGrocery;
