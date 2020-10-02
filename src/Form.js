import React, { Component } from "react";
import "./Form.scss";
import M from "materialize-css";
import axios from "axios";
import FormData from "form-data";
//import ImageUploader from 'react-images-upload';
export default class Form extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll("select");
      var options = {};
      var instances = M.FormSelect.init(elems, options);
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      companyname: "",
      companyaddress: "",
      email: "",
      mobileno: "",
      Description: "",
      companycountry: "",
      companystate: "",
      companytype: "",
      propertyname: "",
      state: "",
      pincode: "",
      country: "",
      phonenumber1: "",
      phonenumber2: "",
      emailid: "",
      propertyaddress: "",
      noofFloors: "",
      noofRooms: "",
      twosharing: "",
      threesharing: "",
      foursharing: "",
      onesharingvacant: "",
      twosharingvacant: "",
      threesharingvacant: "",
      foursharingvacant: "",
      fivesharingvacant: "",
      propertylandmark: "",

      ac: "",
      wifi: "",
      washingmachine: "",
      fridge: "",
      tv: "",
      elevator: "",
      kitchen: "",
      geyser: "",
      powerbackup: "",
      parking: "",
      heater: "",
      camera: "",
      payment: "",
      table: "",
      chair: "",
      cot: "",
      mattress: "",
      pillow: "",
      cupboard: "",
      selectedFile: "",
      food: "",
      transportation: "",
      sanitization: "",
      roomcleaning: "",
    };
    this.changehandler = this.changehandler.bind(this);
    this.submithandler = this.submithandler.bind(this);
    this.handleAmentiesChange = this.handleAmentiesChange.bind(this);
    this.handleServicesChange = this.handleServicesChange.bind(this);
    this.changedropdown = this.changedropdown.bind(this);
    // this.changehandler=this.changehandler.bind(this);
  }

  onFileChangeHandler = (e) => {
    e.preventDefault();
    this.setState({
      selectedFile: e.target.files[0],
    });
    const formData = new FormData();
    formData.append("file", this.state.selectedFile);
    //Append the rest data then send
    axios({
      method: "post",
      url: "http://localhost:3001/postImage",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log("Error");
      }
    );
  };
  changedropdown = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  changehandler = (e) => {
    //we can extract event values
    //saving into state property
    this.setState({
      [e.target.name]: e.target.value,
    });
    {
      console.log(this.state);
    }
  };
  handleAmentiesChange = (e) => {
    //  const amenties = e.target.checked;
    //  this.setState({ amenties });
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  };
  handleServicesChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  };

  submithandler = (e) => {
    e.preventDefault();
    var companydetails = {
      companyName: this.state.companyname,
      address: this.state.companyaddress,
      email: this.state.email,
      mobileNumber: this.state.mobileno,
      description: this.state.companydesc,
      country: this.state.country,
      state: this.state.companystate,
      companyType: this.state.companytype,

      property: {
        propertyName: this.state.propertyname,
        propertyType: this.state.propertytype,
        profileDesc: this.state.profiledesc,
        propertyAddress: {
          propertyNumber: "",
          street: "",
          location: "",
          address: this.state.propertyaddress,
          city_code: "",
          city_Description: "",
          state: this.state.propertystate,
          pincode: this.state.pincode,
          state_code: "",
          country: this.state.country,
          phone_Number_First: this.state.phonenumber1,
          phone_Number_Second: this.state.phonenumber2,
          email: this.state.emailid,
          website: "",
          street_Code: "",
        },
        propertyDescription: {
          noOfFloor: this.state.noofFloors,
          noOfRoomsAvailable: this.state.noofRooms,
          oneSharing: this.state.oneSharing,
          twoSharing: this.state.twosharing,
          threeSharing: this.state.threesharing,
          fourSharing: "",
          fiveSharing: "",
          sixSharing: "",
          oneSharingVacant: this.state.onesharingvacant,
          twoSharingVacant: this.state.twosharingvacant,
          threeSharingVacant: this.state.threesharingvacant,
          fourSharingVacant: this.state.foursharingvacant,
          fiveSharingVacant: this.state.fivesharingvacant,
          sixSharingVacant: "",
          oneSharingRent: "",
          doubleSharingRent: "",
          tripleSharingRent: "",
        },
        PropertyImage: {
          propertyImageOne: this.state.selectedFile,
          propertyImageTwo: "",
          propertyImageThree: "",
          propertyImageFour: "",
          propertyImageFive: "",
          propertyImageSix: " ",
          propertyImageSeven: "",
          propertyImageEight: "",
          propertyImageNine: "",
          propertyImageTen: "",
          propertyImageEleven: "",
          propertyImageTwelve: "",
        },
        PropertyLandmarks: {
          Hospital: "",
          School: "",
          itPark: "",
          superMarket: "",
          railwayStation: "",
          busStop: "",
          eduInstitute: "",
          college: "",
          medicalStore: "",
          airport: "",
          heartofTheCity: "",
          autoStand: "",
          vegetableShop: "",
        },

        amenities: {
          ac: this.state.ac,
          wifi: this.state.wifi,
          washingmachine: this.state.washingmachine,
          freeze: this.state.fridge,
          tv: this.state.tv,
          Elevator: this.state.elevator,
          Kitchen: this.state.kitchen,
          Geyser: this.state.geyser,
          Powerbackup: this.state.powerbackup,
          ParkingFacility: this.state.parking,
          RoomHeater: this.state.heater,
          CCTVCameras: this.state.camera,
          CardPayments: this.state.payment,
          Table: this.state.table,
          Chair: this.state.sofa,
          Cot: this.state.cot,
          Mattress: this.state.mattress,
          Pillow: this.state.pillow,
          Cupboard: this.state.cupboard,
        },
        services: {
          Food: this.state.food,
          Roomcleaning: this.state.roomcleaning,
          Transportation: this.state.transportation,
          Sanitization: this.state.sanitization,
        },
      },
    };

    console.log("companydetails:", companydetails);

    axios
      .post(`http://localhost:8080/api/dtoty`, companydetails)
      .then((res) => {
        console.log("posted!", res);
      });
  };

  render() {
    // const {companyname ,companyaddress ,companystate,email,mobileno,desc,ac,wifi ,scc,optio}=this.state
    return (
      <div className="container formprop">
        {console.log(this.state)}
        <form onSubmit={this.submithandler}>
          {/* Row Started */}
          <div className="row">
            <h3 className="center">PG Details Form</h3>
            <div className="col s5">
              <label>
                Property Name
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="propertyname"
                  onChange={this.changehandler}
                />
              </label>
            </div>
            <div className="col s5">
            <div className="input-field col s12">
            <select
              value={this.state.value}
              name="propertytype"
              onChange={this.changedropdown}
            >
              <option value="no" disabled>
                Property Type
              </option>
              <option value="pg">PG</option>
              <option value="hostel">Hostel</option>
            </select>
          </div>
            </div>
          </div>
          {/* Row ended */}
          <div className="row">
            <div className="col s5">
            <select
              value={this.state.value}
              name="propertycategory"
              onChange={this.changehandler}
              >
            <option value="" disabled>
              Property Category
             </option>
             <option value="girls">Girls</option>
             <option value="boys">Boys</option>
            </select>
              {/*<label>
                Email
                <input
                  type="email"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="email"
                  onChange={this.changehandler}
                />
                </label> */}
            </div>
            <div className="col s5">
              <label>
                Mobile No.
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="mobileno"
                  onChange={this.changehandler}
                />
              </label>
            </div>
          </div>
          {/* Row ended */}
          <div className="row">
            <div className="col s5">
              <label>
                Description
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="companydesc"
                  onChange={this.changehandler}
                />
              </label>
            </div>
            <div className="col s5">
              <label>
                Country
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="companycountry"
                  onChange={this.changehandler}
                />
              </label>
            </div>
          </div>
          {/*row ended */}
          <div className="row">
            <div className="col s5">
              <label>
                State
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="companystate"
                  onChange={this.changehandler}
                />
              </label>
            </div>

            <div className="col s5">
              
            </div>
          </div>
          {/* Form ended */}
          <div className="row">
            <div className="col s5">
              <label>
                PropertyName
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="propertyname"
                  onChange={this.changehandler}
                />
              </label>
            </div>
            <div className="col s5">
              <div className="input-field col s12">
               
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s5">
              <label>
                Property Address
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="propertyaddress"
                  onChange={this.changehandler}
                />
              </label>
            </div>
            <div className="col s5">
              <label>
                State
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="state"
                  onChange={this.changehandler}
                />
              </label>
            </div>
          </div>
          {/* Row ended */}
          {/* Row Started */}
          <div className="row">
            <div className="col s5">
              <label>
                Pincode
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="pincode"
                  onChange={this.changehandler}
                />
              </label>
            </div>
            <div className="col s5">
              <label>
                Country
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="country"
                  onChange={this.changehandler}
                />
              </label>
            </div>
          </div>
          {/* Row ended */}
          {/* Row Started */}
          <div className="row">
            <div className="col s5">
              <label>
                Phone Number1
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="phonenumber1"
                  onChange={this.changehandler}
                />
              </label>
            </div>
            <div className="col s5">
              <label>
                Phone Number2
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="phonenumber2"
                  onChange={this.changehandler}
                />
              </label>
            </div>
          </div>
          {/* Row ended */}
          {/* Row Started */}
          <div className="row">
            <div className="col s5">
              <label>
                Email ID
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="emailid"
                  onChange={this.changehandler}
                />
              </label>
            </div>
            <div className="col s5">
              <label>
                Property Address
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="propertyaddress"
                  onChange={this.changehandler}
                />
              </label>
            </div>
          </div>
          {/* Row ended */}
          {/* Row Started */}
          <div className="row">
            <div className="col s5">
              <label>
                No.Of Floors
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="noofFloors"
                  onChange={this.changehandler}
                />
              </label>
            </div>

            <div className="col s5">
              <label>
                No. of Rooms Available
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="noofRooms"
                  onChange={this.changehandler}
                />
              </label>
            </div>
          </div>
          {/* Row ended */}
          {/* Row Started */}
          <div className="row">
            <div className="col s5">
              <label>
                One Sharing
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="onesharing"
                  onChange={this.changehandler}
                />
              </label>
            </div>
            <div className="col s5">
              <label>
                Two Sharing
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="twosharing"
                  onChange={this.changehandler}
                />
              </label>
            </div>
          </div>
          {/* Row ended */}
          {/* Row Started */}
          <div className="row">
            <div className="col s5">
              <label>
                Three Sharing
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="threesharing"
                  onChange={this.changehandler}
                />
              </label>
            </div>
            <div className="col s5">
              <label>
                One Sharing Vacant
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="onesharingvacant"
                  onChange={this.changehandler}
                />
              </label>
            </div>
          </div>
          {/* Row ended */}
          {/* Row Started */}
          <div className="row">
            <div className="col s5">
              <label>
                Two Sharing Vacant
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="twosharingvacant"
                  onChange={this.changehandler}
                />
              </label>
            </div>
            <div className="col s5">
              <label>
                Three Sharing Vacant
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="threesharingvacant"
                  onChange={this.changehandler}
                />
              </label>
            </div>
          </div>
          {/* Row ended */}
          {/* Row Started */}
          <div className="row">
            <div className="col s5">
              <label>
                Four Sharing Vacant
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="foursharingvacant"
                  onChange={this.changehandler}
                />
              </label>
            </div>
            <div className="col s5">
              <label>
                Five Sharing Vacant
                <input
                  type="text"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  name="fivesharingvacant"
                  onChange={this.changehandler}
                />
              </label>
            </div>
          </div>
          {/* Row ended */}
          {/* Row Started */}
          <div className="row">
            <div className="col s5">
              <div className="file-field input-field">
                <div className="btn">
                  <span>File</span>
                  <input
                    type="file"
                    name="propertyimage"
                    accept=".jpg, .jpeg, .png"
                    onChange={this.onFileChangeHandler}
                    multiple
                  />
                </div>
                <div className="file-path-wrapper">
                  <input
                    className="file-path validate"
                    type="text"
                    placeholder="Upload one or more files"
                  />
                </div>
              </div>
            </div>
            <div className="col s5">
              <label>
                Property Landmark
                <input
                  type="text"
                  name="propertylandmark"
                  style={{
                    border: "solid",
                    borderStyle: "groove",
                    color: "grey",
                  }}
                  onChange={this.changehandler}
                />
              </label>
            </div>
          </div>
          {/* Row ended */}
          {/* Row Started */}
          <div className="row">
            <label>Amenties:</label>
          </div>
          <div className="row">
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  style={{ textAlign: "left" }}
                  name="ac"
                  onChange={this.handleAmentiesChange}
                />
                <span>AC</span>
              </label>
            </div>
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  style={{ textAlign: "left" }}
                  name="wifi"
                  onChange={this.handleAmentiesChange}
                />
                <span>WIFI</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  name="washingmachine"
                  onChange={this.handleAmentiesChange}
                />
                <span>Washing Machine</span>
              </label>
            </div>

            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  name="fridge"
                  onChange={this.handleAmentiesChange}
                />
                <span>Fridge</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  name="tv"
                  onChange={this.handleAmentiesChange}
                />
                <span>TV</span>
              </label>
            </div>

            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  name="elevator"
                  onChange={this.handleAmentiesChange}
                />
                <span>Elevator</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  name="selfcooking"
                  onChange={this.handleAmentiesChange}
                />{" "}
                <span>Kitchen(Self-Cooking)</span>
              </label>
            </div>

            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  name="geyser"
                  onChange={this.handleAmentiesChange}
                />
                <span>Geyser</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  name="powerbackup"
                  onChange={this.handleAmentiesChange}
                />
                <span>Power Backup</span>
              </label>
            </div>
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  name="parking"
                  onChange={this.handleAmentiesChange}
                />
                <span>Parking Facility(Open/Close)</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  name="heater"
                  onChange={this.handleAmentiesChange}
                />
                <span>Room Heater</span>
              </label>
            </div>
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  name="camera"
                  onChange={this.handleAmentiesChange}
                />
                <span>CCTV Camera</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  name="payment"
                  onChange={this.handleAmentiesChange}
                />
                <span>Card Payments</span>
              </label>
            </div>
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  name="table"
                  onChange={this.handleAmentiesChange}
                />
                <span>Table</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  name="chair"
                  onChange={this.handleAmentiesChange}
                />
                <span>Chair/sofa</span>
              </label>
            </div>
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  name="cot"
                  onChange={this.handleAmentiesChange}
                />
                <span>Cot</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  name="mattress"
                  onChange={this.handleAmentiesChange}
                />
                <span>Mattress</span>
              </label>
            </div>
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  name="pillow"
                  onChange={this.handleAmentiesChange}
                />
                <span>Pillow</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  name="cupboard"
                  onChange={this.handleAmentiesChange}
                />
                <span>Cupboard</span>
              </label>
            </div>
          </div>
          <div className="row">
            <label>Services:</label>
          </div>
          <div className="row">
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  style={{ textAlign: "left" }}
                  name="food"
                  onChange={this.handleServicesChange}
                />
                <span>Food</span>
              </label>
            </div>
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  style={{ textAlign: "left" }}
                  name="roomcleaning"
                  onChange={this.handleServicesChange}
                />
                <span>Roomcleaning</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  style={{ textAlign: "left" }}
                  name="transportation"
                  onChange={this.handleServicesChange}
                />
                <span>Transportation</span>
              </label>
            </div>
            <div className="col s6">
              <label>
                <input
                  type="checkbox"
                  style={{ textAlign: "left" }}
                  name="sanitization"
                  onChange={this.handleServicesChange}
                />
                <span>Sanitization</span>
              </label>
            </div>
          </div>
          <div>
            {/* Row ended */}
            <button type="submit">Submit</button>
            <br></br>
            <br />
          </div>
        </form>
      </div>
    );
  }
}
