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
          threesharingno:"",
          singlesharingrent:"",
          doublesharingrent:"",
          triplesharingrent:"",
          deposit:"",
          selectedFile:null,
           landmarks:[],  
           propertyimageOne:null,
           specialfeatures:"",
          ac: "",
          cooler:"",
          wifi: "",
          laundry:"",
          washingmachine: "",
          fridge: "",
          tv: "",
          elevator: "",
          kitchen: "",
          geyser: "",
          powerbackup: "",
          parking: "",
          heater: "",
          cctv: "",
          payment: "",
          table: "",
          chair: "",
          cot: "",
          mattress: "",
          pillow: "",
          cupboard: "",
        
          messveg: "",
          messnonveg:"",
          transportation: "",
          roomcleaning: "",
        };
        this.changehandler=this.changehandler.bind(this);
        this.handleAmentiesChange = this.handleAmentiesChange.bind(this);
        this.handleServicesChange = this.handleServicesChange.bind(this);
        this.submithandler = this.submithandler.bind(this);
        
     }
     changehandler = (e) => {
      //we can extract event values
      //saving into state property
      this.setState({
        [e.target.name]: e.target.value,
      });
     };
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
     addlandmark(){
       this.setState({landmarks:[...this.state.landmarks,""]})
     }

     handlechangelandmark(e,index)
     {
           this.state.landmarks[index]=e.target.value;
           this.setState({landmarks:this.state.landmarks})
     }
     handlechangelandmarkdistance(e,index)
     {
           this.state.landmarks[index].distance=e.target.value
           this.setState({landmarks:this.state.landmarks})
           console.log("landmark array",this.landmarks);
     }
     onFileChangeHandler = (e) => {
      e.preventDefault();
      console.log("file uploadded",e.target.files[0])
      console.log("length--",e.target.files.length);
    
      this.setState({
        selectedFile: e.target.files[0],
        propertyimageOne:e.target.files[0],
        propertyImageTwo:e.target.files[1],
        propertyImageThree:e.target.files[2],
        propertyImageFour:e.target.files[3]
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
     handleRemove(index)
     {
       this.state.landmarks.splice(index,1)
       console.log(this.state.landmarks,'$$$$');
       this.setState({landmarks:this.state.landmarks})
     }

     changedropdown = (event) => {
      this.setState({ [event.target.name]: event.target.value });

    };

    changelandmarkdesc=(e)=>
    {
           
           this.setState({   })
    }
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
            propertyType: this.state.propertycategory,
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
              deposit:this.state.deposit,
              propertyRestriction:this.state.restriction,
              specialFeatures:this.state.specialfeatures

            },
            PropertyImage: {
              propertyImageOne: this.state.selectedFile,
              propertyImageTwo: this.state.propertyImageTwo,
              propertyImageThree: this.state.propertyImageThree,
              propertyImageFour: this.state.propertyImageFour,
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
               Institute:"",
            },
    
            amenities: {
              ac: this.state.ac,
              cooler:this.state.cooler,
              wifi: this.state.wifi,
              laundry:this.state.laundry,
              washingmachine: this.state.washingmachine,
              freeze: this.state.fridge,
              tv: this.state.tv,
              Elevator: this.state.elevator,
              Kitchen: this.state.kitchen,
              Geyser: this.state.geyser,
              Powerbackup: this.state.powerbackup,
              ParkingFacility: this.state.parking,
              RoomHeater: this.state.heater,
              CCTVCameras: this.state.cctv,
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
                                     <input type="text" name="propertyname" placeholder="Property Name" onChange={this.changehandler}/>
                              </div>
                              <div class="field">
                                  <label>Property Type</label>
                                    <select   name="propertytype" onChange={this.changedropdown}>
                                     <option value="">Property Type</option>
                                     <option value="pg">PG</option>
                                     <option value="hostel">Hostel</option>
                                    </select>
                              </div>
                           </div>
                    </div>
                    <div class="field">
                           <div class="two fields">
                              <div class="field">
                                <label>Property Category</label>
                                   <select 
                                      value={this.state.value}
                                       name="propertycategory"
                                       onChange={this.changedropdown}>
                                     <option value="disabled">Property Category</option>
                                     <option value="girls">Girls</option>
                                     <option value="boys">Boys</option>
                                   </select>
                              </div>
                              <div class="field">
                                <label>Property Address (Short)</label>
                                    <input type="text" name="propertyaddressshort" placeholder="Property Address Short" onChange={this.changehandler}/> 
                              </div>
                           </div>
                    </div>
                    <div class="field">
                      <div class="two fields">
                        <div class="field">
                           <label>Property Address(Full)</label>
                              <input type="text" name="propertyaddressfull" placeholder="Property Address" onChange={this.changehandler}/>
                        </div>
                        <div class="field">
                            <label>Property Street</label>
                                <input type="text" name="propertystreet" placeholder="Property Street" onChange={this.changehandler}/>
                        </div>
                     </div>
                  </div>
                  <div class="field">
                     <div class="two fields">
                        <div class="field">
                          <label>State</label>
                               <input type="text" name="state" placeholder="State" onChange={this.changehandler}/>
                        </div>
                        <div class="field">
                            <label>PinCode</label>
                               <input type="text" name="pincode" placeholder="Pincode" onChange={this.changehandler}/>
                        </div>
                    </div>
                 </div>
                 <div class="field">
                   <div class="two fields">
                      <div class="field">
                          <label>City</label>
                               <input type="text" name="city" placeholder="City" onChange={this.changehandler}/>
                      </div>
                    <div class="field">
                        <label>Property Rating</label>
                           <input type="text" name="rating" placeholder="Rating" onChange={this.changehandler}/>
                    </div>
                  </div>
                </div>
                <div class="field">
                   <div class="two fields">
                       <div class="field">
                           <label>Mobile Number one</label>
                                <input type="text" name="mobileone" placeholder="Mobile No One" onChange={this.changehandler}/>
                        </div>
                        <div class="field">
                            <label>Mobile No. Two</label>
                                 <input type="text" name="mobiletwo" placeholder="Mobile No Two" onChange={this.changehandler}/>
                        </div>
                  </div>
                </div>
                <div class="field">
                   <div class="two fields">
                      <div class="field">
                         <label>No. of Rooms in property</label>
                             <input type="text" name="totalRooms" placeholder="Total No of ROoms" onChange={this.changehandler}/>
                      </div>
                      <div class="field">
                         <label>No. of Single Sharing Room</label>
                                <input type="text" name="singlesharingeno" placeholder="No of Single Sharing" onChange={this.changehandler}/>
                     </div> 
                   </div>
                </div> 
                <div class="field">
                    <div class="two fields">
                       <div class="field">
                            <label>No. of Double Sharing Room</label>
                                   <input type="text" name="doublesharingno" placeholder="No. of Double Sharing Room" onChange={this.changehandler}/>
                       </div>
                       <div class="field">
                           <label>No. of Triple Sharing Room</label>
                                  <input type="text" name="threesharingno" placeholder="No. of triple Sharing Room" onChange={this.changehandler}/>
                       </div> 
                  </div>
                </div>
                <div class="field">
                    <div class="two fields">
                       <div class="field">
                            <label>Single Sharing Rent</label>
                                   <input type="text" name="singlesharingrent" placeholder="Single Sharing Rent" onChange={this.changehandler}/>
                       </div>
                       <div class="field">
                           <label>Double Sharing Rent</label>
                                  <input type="text" name="doublesharingrent" placeholder="Double Sharing Rent" onChange={this.changehandler}/>
                       </div> 
                  </div>
                </div>    
                <div class="field">
                  <div class="two fields">
                     <div class="field">
                        <label>Triple Sharing Rent</label>
                             <input type="text" name="triplesharingrent" placeholder="Triple Sharing Rent" onChange={this.changehandler}/>
                     </div>
                     <div class="field">
                        <label>Deposit</label>
                            <input type="text" name="deposit" placeholder="Deposit" onChange={this.changehandler}/>
                     </div>   
                  </div>
                </div> 
                <div class="field">
                <div class="two fields">
                   <div class="field">
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
                   </div>   
                </div>
              </div> 
              </div>
      {/*}          <div className="field">
                      <div class="two fields">
                              <div className="field">
                                <label>Landmark </label>
                                   <select  
                                      multiple="" className="ui multiple selection fluid dropdown"
                                      value={this.state.value}
                                      name="landmark"
                                      onChange={this.changedropdown}  
                                            >
                                      <option value="">Landmark</option>
                                     <option value="Institute">Institute</option>
                                     <option value="Hospital">Hospital</option>
                                     <option value="Market">Markets</option>
                                   </select>
                              </div>
                              <div className="field">
                                 <label>{this.state.landmark} distance from PG/Hostel</label>
                                 <input type="text" name="landmarkdesc" value={this.state.value} onChange={this.changelandmarkdesc}/>
                              </div>
                       </div>  
               </div>
        */}
               <div class="field">
                   <div class="two fields">
                      <div class="field">
                      <label>Landmark Name</label>
                       {this.state.landmarks.map((landmark,index)=>
                         {
                           return(
                             <div key={index}>
                             <input name="name" onChange={(e)=>this.handlechangelandmark(e,index)}
                               value={landmark}/>
                          {/*}    <input  name="distance" placeholder="landmark distance" onChange={(e)=>this.handlechangelandmarkdistance(e,index)}/>
                           */}  
                              <button onClick={(e)=>this.handleRemove(e)}>Remove</button>
                             </div>

                           )
                            })}
                    </div>
                     <div class="field">
                        
                         <button onClick={(e)=>this.addlandmark(e)} >Add LandMark</button>
                     </div>
                  </div>
               </div>
               <div class="field">
                      <div class="two fields">
                        <div class="field">
                           <label>Property Owner Name</label>
                              <input type="text" name="ownername" placeholder="Property owner name" onChange={this.changehandler}/>
                        </div>
                        <div class="field">
                            <label>Property/Owner Email</label>
                                <input type="email" name="email" placeholder="Email" onChange={this.changehandler}/>
                        </div>
                     </div>
               </div>
               <div class="field">
                <div class="two fields">
                 <div class="field">
                    <label>Property Restriction</label>
                       <input type="text" name="restriction" placeholder="Restriction" onChange={this.changehandler}/>
                 </div>
                 <div class="field">
                     <label>Special Features</label>
                         <input type="text" name="specialfeatures" placeholder="SpecialFeatures" onChange={this.changehandler}/>
                 </div>
               </div>
              </div>
               <div class="field">
                 <label>Amenties Type</label>
                    <div class="two fields">
                     <div className="field">
                      <div className="ui checkbox">
                       <input  name="ac"type="checkbox"  onChange={this.handleAmentiesChange} />
                       <label>AC</label>
                     </div> 
                   </div>
                   <div className="field">
                      <div className="ui checkbox">
                       <input type="checkbox" name="cooler"  onChange={this.handleAmentiesChange}/>
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
                          <input name="kitchen" type="checkbox"  onChange={this.handleAmentiesChange} />
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

