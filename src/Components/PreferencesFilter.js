import { useState } from 'react';

const preferencesFilter = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterValue(value);

    const filtered = data.filter(item => {
      // Modify this condition based on your filtering requirements
      return item.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredData(filtered);
  };

  return (
    <MDBCol md="4" className="mb-4">
          
    {/* Preferences List (Checkboxes) - Right Column   */}
            <MDBCard className="mb-4">
              {/* <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">Your Preferences</MDBTypography>
              </MDBCardHeader> */}
  
              <MDBCardBody>
                <MDBListGroup flush>
                <MDBRow>
                    <select name='location' class="location-select-prefs">   {/* class="browser-default custom-select" */}
                        <option selected>Location</option>
                        <option value="1">Same as Mine</option>
                        <option value="2">New York</option>
                        <option value="3">Massachussetts</option>
                        <option value="4">Pennsylvania</option>
                        <option value="5">Washington</option>
                        <option value="6">Other/Decline to Share</option>
                    </select>
                  </MDBRow> 
  
                  <MDBRow>
                    <select name='gender_preference' class="gender-select-prefs">   {/* class="browser-default custom-select" */}
                        <option selected>Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Intersex</option>
                        <option value="4">Non-Binary</option>
                        <option value="5">Transgender</option>
                        <option value="6">Other</option>
                    </select>
  
                  </MDBRow>
  
                  <MDBRow>    
                    <select name='sexual_orientation_preference' class="orientation-select-prefs">   {/* class="browser-default custom-select" */}
                       <option selected>Orientation</option>
                       <option value="1">Heterosexual</option>
                       <option value="2">Pansexual</option>
                       <option value="3">BiSexual</option>
                       <option value="4">Homosexual</option>
                       <option value="5">Asexual</option>
                       <option value="6">Other/Decline to Share</option>
                    </select>
                  </MDBRow>
                    <MDBRow>
                      <MDBCheckbox
                        name="good_credit_preference"
                        // id="register-flexCheckDefault"
                        label=" Has Good Credit" /> 
                    </MDBRow>
  
                     {/* <MDBRow>
                      <MDBCheckbox
                        name="flexCheck"
                        // id="register-flexCheckDefault"
                        label="Has Employment" /> 
                    </MDBRow> */}
  
                    <MDBRow>
                      <MDBCheckbox
                        name="high_income_preference"
                        // id="register-flexCheckDefault"
                        label="Has High Income" /> 
                    </MDBRow> 
  
                    <MDBRow>
                      <MDBCheckbox
                        name="kids_preference"
                        // id="register-flexCheckDefault"
                        label="Has No Kids" /> 
                    </MDBRow> 
  
                    <MDBRow>
                      <MDBCheckbox
                        name="pets_preference"
                        // id="register-flexCheckDefault"
                        label="Has No Pets" /> 
                    </MDBRow> 
  
                    <MDBRow>
                      <MDBCheckbox
                        name="share_bills_preference"
                        // id="register-flexCheckDefault"
                        label="Agrees to Share Bills" /> 
                    </MDBRow> 
                
                  <MDBRow>
                    <MDBCheckbox
                      name="open_room_preference"
                      // id="register-flexCheckDefault"
                      label="Has Living Space"   /> 
                  </MDBRow>
                  
                  <MDBRow>
                      <MDBCheckbox
                        name="neat_preference"
                        // id="register-flexCheckDefault"
                        label=" Is Very Neat/Clean" /> 
                    </MDBRow>
  
                     <MDBRow>
                      <MDBCheckbox
                        name="smoker_preference"
                        // id="register-flexCheckDefault"
                        label="Non-Smoker" /> 
                    </MDBRow>
  
                    <MDBRow>
                      <MDBCheckbox
                        name="low_noise_preference"
                        // id="register-flexCheckDefault"
                        label="Low Noise LifeStyle" /> 
                    </MDBRow> 
  
                    <MDBRow>
                      <MDBCheckbox
                        name="religious_preference"
                        // id="register-flexCheckDefault"
                        label="Is Religious" /> 
                    </MDBRow> 
  
                    <MDBRow>
                      <MDBCheckbox
                        name="private_room_preference"
                        // id="register-flexCheckDefault"
                        label="Private Room" /> 
                    </MDBRow> 
                
                  <MDBRow>
                    <MDBCheckbox
                      name="private_bathroom_preference"
                      // id="register-flexCheckDefault"
                      label="Private Bathroom"   /> 
                  </MDBRow>
  
                  
                  {/* <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span><strong>$53.98</strong></span>
                  </MDBListGroupItem> */}
  
                </MDBListGroup>
  
                {/* <MDBBtn size="lg" block> */}
                <MDBBtn size="sm" >
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
  );
};

export default preferencesFilter;
