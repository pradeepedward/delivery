import React, { Component } from "react";
import { Card, CardBody, Col, Row, CardTitle, CardSubtitle,Container, Button, Input, Label, FormGroup, Form } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import firebase from '../../firebase';
import SweetAlert from "react-bootstrap-sweetalert";

class AddDeliveryBoy extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            driverName: '',
            email: '',
            mobileNumber: '',
            address1: '',
            address2: '',
            city: 'Select',
            zone: 'Select',
            accountName: '',
            accountNumber: '',
            ifscCode: '',
            branchName: '',
            branchAddress: '',
            vehicleName: '',
            vehicleNumber: '',
            insuranceNumber: '',
            rcNumber: '',
            dlNumber: '',
            amount: '',
            paymentType: 'Select',
            receipt: '',
            profileImage: '',
            aadharImage: '',
            passbookImage: '',
            rcImage: '',
            dlImage: '',
            insuranceImage: '',
            cities: [],
            cityName: '', 
            zones: [],
            zoneName: '',
            success_msg: false
        };
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

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
      }

      handleSubmit(e) {
        e.preventDefault();

        let data = this.state
        let comp = this

        if(data.driverName === '') {
            alert("Enter Driver Name");
            document.getElementById("driverName").focus();
            return;
        }

        if(data.email === '') {
            alert("Enter Email");
            document.getElementById("email").focus();
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

        if(data.address1 === '') {
            alert("Enter Address 1");
            document.getElementById("address1").focus();
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

        if(data.vehicleName === '') {
            alert("Enter Vehicle Name");
            document.getElementById("vehicleName").focus();
            return;
        }

        if(data.vehicleNumber === '') {
            alert("Enter Vehicle Number");
            document.getElementById("vehicleNumber").focus();
            return;
        }

        if(data.rcNumber === '') {
            alert("Enter RC Number");
            document.getElementById("rcNumber").focus();
            return;
        }

        if(data.dlNumber === '') {
            alert("Enter DL Number");
            document.getElementById("dlNumber").focus();
            return;
        }

        if(data.insuranceNumber === '') {
            alert("Enter Insurance Number");
            document.getElementById("insuranceNumber").focus();
            return;
        }

        if(data.amount === '') {
            alert("Enter Deposit Amount");
            document.getElementById("amount").focus();
            return;
        }

        if(data.paymentType === 'Select') {
            alert("Select Payment Type");
            document.getElementById("paymentType").focus();
            return;
        }

        if(data.receipt === '') {
            alert("Enter Receipt Number");
            document.getElementById("receipt").focus();
            return;
        }

        if(data.profileImage === '') {
            alert("Select Profile Image");
            document.getElementById("profileImage").focus();
            return;
        }

        if(data.aadharImage === '') {
            alert("Select Aadhar Image");
            document.getElementById("aadharImage").focus();
            return;
        }

        if(data.passbookImage === '') {
            alert("Select Passbook Image");
            document.getElementById("passbookImage").focus();
            return;
        }

        if(data.rcImage === '') {
            alert("Select RC Image");
            document.getElementById("rcImage").focus();
            return;
        }

        if(data.dlImage === '') {
            alert("Select DL Image");
            document.getElementById("dlImage").focus();
            return;
        }

        if(data.insuranceImage === '') {
            alert("Select Insurance Image");
            document.getElementById("insuranceImage").focus();
            return;
        }

        firebase.firestore().collection('DeliveryBoy').doc(data.mobileNumber).set({
            Name: data.driverName,
            Email: data.email,
            MobileNumber: data.mobileNumber,
            Address1: data.address1,
            Address2: data.address2,
            City: data.cityName,
            CityPushId: data.city,
            Zone: data.zoneName,
            ZonePushId: data.zone,
            AccountName: data.accountName,
            AccountNumber: data.accountNumber,
            IFSCCode: data.ifscCode,
            BranchName: data.branchName,
            BranchAddress: data.branchAddress,
            VehicleName: data.vehicleName,
            VehicleNumber: data.vehicleNumber,
            RCNumber: data.rcNumber,
            DLNumber: data.dlNumber,
            InsuranceNumber: data.insuranceNumber,
            Cash: data.amount,
            PaymentType: data.paymentType,
            Receipt: data.receipt,
            ProfileImage: data.profileImage,
            AadharImage: data.aadharImage,
            PassbookImage: data.passbookImage,
            RCImage: data.rcImage,
            DlImage: data.dlImage,
            InsuranceImage: data.insuranceImage,
            Status: "Active"
        })
        .then(function(docRef) {
            comp.setState({
                success_msg: true
              })
        })

        data.driverName = ""
        data.email = ""
        data.mobileNumber = ""
        data.address2 = ""
        data.address1 = ""
        data.city = "Select"
        data.cityName =''
        data.zone = 'Select'
        data.zoneName = ''
        data.accountName = ""
        data.accountNumber = ""
        data.ifscCode = ""
        data.branchName = ""
        data.branchAddress = ""
        data.vehicleName = ""
        data.vehicleNumber = ""
        data.rcNumber = ""
        data.dlNumber = ""
        data.insuranceNumber =''
        data.paymentType = 'Select'
        data.amount = ''
        data.receipt = ""
        data.profileImage = ""
        data.aadharImage = ""
        data.dlImage = ""
        data.rcImage = ""
        data.passbookImage = ""
        data.insuranceImage = ""
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

      profileUpload = e =>{
        
        if(e.target.files[0] === 0){
           alert("Add Profile Image");
           return;
       }
      
       const ref = firebase.storage().ref("/DeliveryBoy/");
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
           profileImage: url
         })
       })
       .catch(console.error);         
      }

      aadharUpload = e =>{
        
        if(e.target.files[0] === 0){
           alert("Add Aadhar Image");
           return;
       }
      
       const ref = firebase.storage().ref("/DeliveryBoy/");
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
           aadharImage: url
         })
       })
       .catch(console.error);         
      }

      passbookUpload = e =>{
        
        if(e.target.files[0] === 0){
           alert("Add Passbook Image");
           return;
       }
      
       const ref = firebase.storage().ref("/DeliveryBoy/");
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

      rcUpload = e =>{
        
        if(e.target.files[0] === 0){
           alert("Add RC Image");
           return;
       }
      
       const ref = firebase.storage().ref("/DeliveryBoy/");
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
           rcImage: url
         })
       })
       .catch(console.error);         
      }

      dlUpload = e =>{
        
        if(e.target.files[0] === 0){
           alert("Add DL Image");
           return;
       }
      
       const ref = firebase.storage().ref("/DeliveryBoy/");
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
           dlImage: url
         })
       })
       .catch(console.error);         
      }

      insuranceUpload = e =>{
        
        if(e.target.files[0] === 0){
           alert("Add Insurance Image");
           return;
       }
      
       const ref = firebase.storage().ref("/DeliveryBoy/");
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
           insuranceImage: url
         })
       })
       .catch(console.error);         
      }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid={true}>

                        <Breadcrumbs title="Delivery Boy" breadcrumbItem="Add Delivery Boy" />
                <Row>
                    <Col>
                        <Card>
                        <CardBody>
                            <Form id = "create-form">

                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom03">Driver Name<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="driverName"
                                      placeholder="Driver Name"
                                      type="text"
                                      className="form-control"
                                      id="driverName"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom02">Email<span style = {{color: "red"}}>*</span></Label>
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
                                    <Label htmlFor="validationCustom03">Address Line1 <span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="address1"
                                      placeholder="Address1"
                                      type="text"
                                      className="form-control"
                                      id="address1"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Address Line2</Label>
                                    <Input
                                    name="address2"
                                    placeholder="Address2"
                                    type="text"
                                    className="form-control"
                                    id="address2"
                                    onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
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

                        <h5>Vehicle Details</h5>
                        <Row>
                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Vehicle Name<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="vehicleName"
                                        placeholder="Vehicle Name"
                                        type="text"
                                        className="form-control"
                                        id="vehicleName"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                            </FormGroup>
                            </Col>
                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Vehicle Number<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="vehicleNumber"
                                        placeholder="Vehicle Number"
                                        type="text"
                                        className="form-control"
                                        id="vehicleNumber"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                            </FormGroup>
                            </Col>
                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">RC Number<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="rcNumber"
                                        placeholder="RC Number"
                                        type="text"
                                        className="form-control"
                                        id="rcNumber"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                            </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">DL Number<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="dlNumber"
                                        placeholder="DL Number"
                                        type="text"
                                        className="form-control"
                                        id="dlNumber"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                            </FormGroup>
                            </Col>
                            <Col md = "4">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Insurance Number<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="insuranceNumber"
                                        placeholder="Insurance Number"
                                        type="number"
                                        className="form-control"
                                        id="insuranceNumber"
                                        onChange = {this.handleChange.bind(this)}
                                    />
                            </FormGroup>
                            </Col>
                        </Row>

                        <br />

                        <h5>Deposit Payment Details</h5>
                        <Row>
                        <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Amount<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                    name="amount"
                                    placeholder="Amount"
                                    type="number"
                                    className="form-control"
                                    id="amount"
                                    onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                        <Col md = "4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom05">Payment Type<span style = {{color: "red"}}>*</span></Label>
                                    <Input type="select" id = "paymentType" name = "paymentType" onChange = {this.handleChange.bind(this)}>
                                    <option value = "Select">Select Payment</option>
                                    <option value = "Cash">Cash</option>
                                    <option value = "Online">Online</option>
                                </Input>
                                </FormGroup>
                                
                            </Col>
                            <Col md="4">
                                <FormGroup>
                                    <Label htmlFor="validationCustom03">Recipt/ Reference Number<span style = {{color: "red"}}>*</span></Label>
                                    <Input
                                      name="receipt"
                                      placeholder="Receipt/ Reference No"
                                      type="text"
                                      className="form-control"
                                      id="receipt"
                                      onChange = {this.handleChange.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            </Row>
                            <br />

                        <h5>Documents Upload</h5>
                        <Row>
                        <Col md = "6">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">PassPort Size Photo<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="profileImage"
                                        type="file"
                                        className="form-control"
                                        id="profileImage"
                                        onChange = {this.profileUpload}
                                    />
                            </FormGroup>
                            </Col>

                            <Col md = "6">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Aadhar Card<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="aadharImage"
                                        type="file"
                                        className="form-control"
                                        id="aadharImage"
                                        onChange = {this.aadharUpload}
                                    />
                            </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                        <Col md = "6">
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

                            <Col md = "6">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">RC Book<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="rcImage"
                                        type="file"
                                        className="form-control"
                                        id="rcImage"
                                        onChange = {this.rcUpload}
                                    />
                            </FormGroup>
                            </Col>
                        </Row>

                        
                        <Row>
                        <Col md = "6">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Driving License<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="dlImage"
                                        placeholder="Offer Amount"
                                        type="file"
                                        className="form-control"
                                        id="dlImage"
                                        onChange = {this.dlUpload}
                                    />
                            </FormGroup>
                            </Col>

                            <Col md = "6">
                            <FormGroup>
                                <Label htmlFor="validationCustom05">Insurance Image<span style = {{color: "red"}}>*</span></Label>
                                <Input
                                        name="insuranceImage"
                                        type="file"
                                        className="form-control"
                                        id="insuranceImage"
                                        onChange = {this.insuranceUpload}
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
												Successfully Added!
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

export default AddDeliveryBoy;
