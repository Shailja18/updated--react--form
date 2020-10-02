import React, { Component } from 'react'
import axios from "axios";
import FormData from "form-data";

export default class PGForm extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          propertyname: "",
          propertytype: "",
          propertycategory:"",
          propertyaddressshort:"",
          propertyaddressfull:"",
          propertystreet:"",
          state:"",
          pincode:"",
          city:"",
          rating:"",
          mobileone: "",
          mobiletwo: "",
          ownername:"",
          owneremail:"",
          totalRooms: "",
          singlesharingeno:"",
          doublesharingeno:"",
          triplesharingeno:"",
          singlesharingrent:"",
          doublesharingrent:"",
          triplesharingrent:"",
          deposit:"",
             

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
          messveg: "",
          messnonveg:"",
          transportation: "",
          roomcleaning: "",
        };
        this.handleAmentiesChange = this.handleAmentiesChange.bind(this);
        this.handleServicesChange = this.handleServicesChange.bind(this);
        this.submithandler = this.submithandler.bind(this);
        
     }
     handleAmentiesChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
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
          ownername: this.state.ownername,
          address: this.state.propertyaddressshort,
          email: this.state.email,
          mobileNumberone: this.state.mobileone,
          city:this.state.city,
          state: this.state.state,
          companyType: this.state.propertytype,
    
          property: {
            propertyName: this.state.propertyname,
            propertyType: this.state.propertytype,
            profileDesc: this.state.profiledesc,
            propertyAddress: this.state.propertyaddressfull,
            city:this.state.city,
            state:this.state.state,
            street:this.state.propertystreet,
            pincode:this.state.pincode,
            phonenumberfirst:this.state.mobileone,
            phonenumbersecond:this.state.mobiletwo,
            email:this.state.email,
            
            propertyDescription: {
              rating:this.state.rating,
              noOfRoomsAvailable: this.state.totalRooms,
              noOfOneSharing: this.state.singlesharingeno,
              noOfTwoSharing: this.state.doublesharingno,
              noOfThreeSharing: this.state.threesharingno,
              oneSharingRent: this.state.singlesharingrent,
              doubleSharingRent: this.state.doublesharingrent,
              tripleSharingRent: this.state.triplesharingrent,
              deposit:this.state.deposit
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
              MessVeg: this.state.messveg,
              MessNonveg:this.state.messnonveg,
              Roomcleaning: this.state.roomcleaning,
              Transportation: this.state.transportation,
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
    componentDidMount()
    {
        
    }

    render()
    {
        return(
            <div className="ui container">
            <form class="ui form success" onSubmit={this.submithandler}>
                <h2 class="ui  header">PG Form Details</h2>
                   <div class="field">
                           <div class="two fields">
                              <div class="field">
                                 <label>Property Name</label>
                                     <input type="text" name="firstname" placeholder="Property Name"/>
                              </div>
                              <div class="field">
                                  <label>Property Type</label>
                                    <select>
                                     <option value="">Property Type</option>
                                     <option value="1">PG</option>
                                     <option value="0">Hostel</option>
                                    </select>
                              </div>
                           </div>
                    </div>
                    <div class="field">
                           <div class="two fields">
                              <div class="field">
                                <label>Property Category</label>
                                   <select>
                                     <option value="">Property Category</option>
                                     <option value="1">Girls</option>
                                     <option value="0">Boys</option>
                                   </select>
                              </div>
                              <div class="field">
                                <label>Property Address (Short)</label>
                                    <input type="text" name="propertyaddress" placeholder="Property Address Short"/> 
                              </div>
                           </div>
                    </div>
                    <div class="field">
                      <div class="two fields">
                        <div class="field">
                           <label>Property Address(Full)</label>
                              <input type="text" name="propertyaddressfull" placeholder="Property Address"/>
                        </div>
                        <div class="field">
                            <label>Property Street</label>
                                <input type="text" name="propertystreet" placeholder="Property Street"/>
                        </div>
                     </div>
                  </div>
                  <div class="field">
                     <div class="two fields">
                        <div class="field">
                          <label>State</label>
                               <input type="text" name="state" placeholder="State"/>
                        </div>
                        <div class="field">
                            <label>PinCode</label>
                               <input type="text" name="pincode" placeholder="Pincode"/>
                        </div>
                    </div>
                 </div>
                 <div class="field">
                   <div class="two fields">
                      <div class="field">
                          <label>City</label>
                               <input type="text" name="city" placeholder="City"/>
                      </div>
                    <div class="field">
                        <label>Property Rating</label>
                           <input type="text" name="rating" placeholder="Rating"/>
                    </div>
                  </div>
                </div>
                <div class="field">
                   <div class="two fields">
                       <div class="field">
                           <label>Mobile Number one</label>
                                <input type="text" name="mobileone" placeholder="Mobile No One"/>
                        </div>
                        <div class="field">
                            <label>Mobile No. Two</label>
                                 <input type="text" name="mobiletwo" placeholder="Mobile No Two"/>
                        </div>
                  </div>
                </div>
                <div class="field">
                   <div class="two fields">
                      <div class="field">
                         <label>No. of Rooms in property</label>
                             <input type="text" name="totalroom" placeholder="Mobile No One"/>
                      </div>
                      <div class="field">
                         <label>No. of Single Sharing Room</label>
                                <input type="text" name="singlesharingeno" placeholder="Mobile No Two"/>
                     </div> 
                   </div>
                </div> 
                <div class="field">
                    <div class="two fields">
                       <div class="field">
                            <label>No. of Double Sharing Room</label>
                                   <input type="text" name="doublesharingno" placeholder="No. of Double Sharing Room"/>
                       </div>
                       <div class="field">
                           <label>No. of Triple Sharing Room</label>
                                  <input type="text" name="triplesharingno" placeholder="No. of triple Sharing Room"/>
                       </div> 
                  </div>
                </div>
                <div class="field">
                    <div class="two fields">
                       <div class="field">
                            <label>Single Sharing Rent</label>
                                   <input type="text" name="singlesharingrent" placeholder="Single Sharing Rent"/>
                       </div>
                       <div class="field">
                           <label>Double Sharing Rent</label>
                                  <input type="text" name="doublesharingrent" placeholder="Double Sharing Rent"/>
                       </div> 
                  </div>
                </div>    
                <div class="field">
                  <div class="two fields">
                     <div class="field">
                        <label>Triple Sharing Rent</label>
                             <input type="text" name="triplesharingrent" placeholder="Triple Sharing Rent"/>
                     </div>
                     <div class="field">
                        <label>Deposit</label>
                            <input type="text" name="deposit" placeholder="Deposit"/>
                     </div> 
                  </div>
                </div> 
                <div className="field">
                  <div className="two fields">
                     <div className="field">
                       <label>Landmark Type</label>
                          <select multiple={true} className="ui dropdown">
                             <option value="">Select Landmark</option>
                             <option value="s">School</option>
                             <option value="AF">Hospital</option>
                          </select>
                     </div>
                    
                  </div>
               </div>  
               <div class="field">
                      <div class="two fields">
                        <div class="field">
                           <label>Property Owner Name</label>
                              <input type="text" name="ownername" placeholder="Property owner name"/>
                        </div>
                        <div class="field">
                            <label>Property/Owner Email</label>
                                <input type="email" name="email" placeholder="Email"/>
                        </div>
                     </div>
                  </div>
               <div class="field">
                 <label>Amenties Type</label>
                    <div class="two fields">
                     <div className="field">
                      <div className="ui checkbox">
                       <input  value="ac"type="checkbox"  onChange={this.handleAmentiesChange} />
                       <label>AC</label>
                     </div>
                   </div>
                   <div className="field">
                      <div className="ui checkbox">
                       <input type="checkbox" value="cooler"  onChange={this.handleAmentiesChange}/>
                       <label>Cooler</label>
                     </div>
                   </div>
                  </div> 
               </div>
               <div class="field">
                    <div class="two fields">
                     <div className="field">
                      <div className="ui checkbox">
                       <input  name="washingmachine"type="checkbox"  onChange={this.handleAmentiesChange} />
                       <label>Washing Machine</label>
                     </div>
                   </div>
                   <div className="field">
                      <div className="ui checkbox">
                       <input name="laundry" type="checkbox"   onChange={this.handleAmentiesChange}/>
                       <label>Laundry</label>
                     </div>
                   </div>
                  </div> 
               </div>
               <div class="field">
                  <div class="two fields">
                   <div className="field">
                     <div className="ui checkbox">
                         <input  name="tv"type="checkbox"  onChange={this.handleAmentiesChange}/>
                        <label>TV</label>
                     </div>
                   </div>
                   <div className="field">
                      <div className="ui checkbox">
                          <input name="selfcooking" type="checkbox"  onChange={this.handleAmentiesChange} />
                           <label>SelfCookingKitchen</label>
                     </div>
                   </div>
                 </div> 
            </div>
            <div class="field">
              <div class="two fields">
                <div className="field">
                  <div className="ui checkbox">
                   <input  name="powerbackup"type="checkbox"  onChange={this.handleAmentiesChange} />
                  <label>PowerBackup</label>
                 </div>
                </div>
                <div className="field">
                   <div className="ui checkbox">
                     <input name="cardpayment" type="checkbox"  onChange={this.handleAmentiesChange} />
                      <label>CardPayment</label>
                  </div>
                </div>
              </div> 
           </div>
           <div class="field">
             <div class="two fields">
                 <div className="field">
                     <div className="ui checkbox">
                        <input  name="chair"type="checkbox"  onChange={this.handleAmentiesChange} />
                         <label>Chair</label>
                     </div>
                 </div>
                 <div className="field">
                    <div className="ui checkbox">
                       <input name="mattress" type="checkbox"   onChange={this.handleAmentiesChange}/>
                        <label>Mattress</label>
                     </div>
                 </div>
             </div> 
          </div>
           <div class="field">
              <div class="two fields">
                   <div className="field">
                       <div className="ui checkbox">
                          <input  name="cupboard"type="checkbox"  onChange={this.handleAmentiesChange}/>
                          <label>Cupboard</label>
                        </div>
                    </div>
                   <div className="field">
                       <div className="ui checkbox">
                         <input name="wifi" type="checkbox"  onChange={this.handleAmentiesChange} />
                         <label>WIFI</label>
                      </div>
                  </div>
              </div> 
           </div>
           <div class="field">
             <div class="two fields">
                <div className="field">
                    <div className="ui checkbox">
                       <input  name="fridge"type="checkbox"  onChange={this.handleAmentiesChange}/>
                       <label>Fridge</label>
                     </div>
                 </div>
                <div className="field">
                    <div className="ui checkbox">
                      <input name="elevator" type="checkbox"  onChange={this.handleAmentiesChange} />
                      <label>Elevator</label>
                   </div>
                 </div>
               </div> 
            </div>
            <div class="field">
              <div class="two fields">
                <div className="field">
                   <div className="ui checkbox">
                      <input  name="geyser"type="checkbox"  onChange={this.handleAmentiesChange}/>
                        <label>Geyser</label>
                   </div>
                </div>
                 <div className="field">
                    <div className="ui checkbox">
                      <input name="parking" type="checkbox"  onChange={this.handleAmentiesChange} />
                       <label>Parking</label>
                    </div>
                </div>
              </div> 
            </div>
            <div class="field">
               <div class="two fields">
                 <div className="field">
                   <div className="ui checkbox">
                     <input  name="cctv"type="checkbox"  onChange={this.handleAmentiesChange} />
                       <label>CCTV</label>
                   </div>
                 </div>
                 <div className="field">
                   <div className="ui checkbox">
                    <input name="table" type="checkbox"  onChange={this.handleAmentiesChange}  />
                      <label>Table</label>
                   </div>
                 </div>
                </div> 
            </div>
            <div class="field">
               <div class="two fields">
                 <div className="field">
                    <div className="ui checkbox">
                       <input  name="cot"type="checkbox"  onChange={this.handleAmentiesChange} />
                         <label>COT/Bed</label>
                   </div>
                 </div>
                 <div className="field">
                   <div className="ui checkbox">
                     <input name="pillow" type="checkbox"  onChange={this.handleAmentiesChange} />
                        <label>Pillow</label>
                   </div>
                 </div>
                </div> 
            </div>
            <div class="field">
               <label>Property Services</label>
                  <div class="two fields">
                     <div className="field">
                         <div className="ui checkbox">
                            <input  name="messveg"type="checkbox"  onChange={this.handleServicesChange} />
                               <label>Mess Veg</label>
                        </div>
                    </div>
                   <div className="field">
                        <div className="ui checkbox">
                         <input name="messnonveg" type="checkbox"  onChange={this.handleServicesChange} />
                             <label>Mess NonVeg</label>
                        </div>
                   </div>
                 </div> 
            </div>
            <div class="field">
                 <div class="two fields">
                    <div className="field">
                      <div className="ui checkbox">
                         <input  name="roomcleaning"type="checkbox"  onChange={this.handleServicesChange}/>
                            <label>Room Cleaning</label>
                      </div>
                    </div>
                    <div className="field">
                       <div className="ui checkbox">
                          <input name="transportation" type="checkbox"  onChange={this.handleServicesChange} />
                           <label>Transportation</label>
                       </div>
                   </div>
                </div> 
             </div>
              <div>
               <br/>
                <br/>
               <button className="ui toggle button active" type="submit">Submit</button> 
               <br/>
               <br/>
              </div>
             </form>
           </div>   
    
        );

    }



}

