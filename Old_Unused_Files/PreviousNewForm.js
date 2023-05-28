import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow,MDBRadio, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import "../Components/NewForm.css"


function PreviousNewForm() {
  return (
    <div className="mx-auto mt-5" style={{ maxWidth: '900px' }}>
      <MDBRow>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">New Account Form</MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <form>


{/*Basic Info -  Row 1 */}
                <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='First name' type='text' /> 
                    </MDBCol>

                     <MDBCol>
                        <MDBInput label='Last name' type='text' />
                     </MDBCol>
                </MDBRow>
{/*Basic Info -  Row 2 */}
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label='City' type='text' />
                  </MDBCol>

                  <MDBCol>
                    <MDBInput label='State' type='text' />
                  </MDBCol>

                  <MDBCol>
                    <MDBInput label='Zip Code' type='number' />
                  </MDBCol>
                </MDBRow>
{/*Basic Info - Row 3 */}
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput className='birthdate-MDB-input' label='Date of Birth' type='date' />
                  </MDBCol>

                  <MDBCol>
                  {/* <MDBInput label='Gender' type='text' /> */}
                  {/* <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Male' />
                  <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='Female' defaultChecked /> */}
                  {/* React Select dropdown - no label */}
                  {/* <Select options={options} /> */}

                  <select class="gender-select">   {/* class="browser-default custom-select" */}
                      <option selected>Gender</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Intersex</option>
                      <option value="4">Non-Binary</option>
                      <option value="5">Transgender</option>
                      <option value="6">Other/Decline to Share</option>
                    </select>

                  </MDBCol>

                   <MDBCol>    <select class="orientation-select">   {/* class="browser-default custom-select" */}
                      <option selected>Orientation</option>
                      <option value="1">Heterosexual</option>
                      <option value="2">Pansexual</option>
                      <option value="3">BiSexual</option>
                      <option value="4">Homosexual</option>
                      <option value="5">Asexual</option>
                      <option value="6">Other/Decline to Share</option>
                    </select>
               </MDBCol>

                </MDBRow>
 {/*Basic Info -  Row 4 */}
                <MDBRow>
                  <MDBCol>
                    <MDBInput label='Email' type='text' className="mb-4" />
                  </MDBCol>
                  
                  <MDBCol>
                    <MDBInput label='Move-In Date Range' type='date' />
                  </MDBCol>
          
                  <MDBCol>
                    <MDBInput label='Credit Level' type='text' />
                  </MDBCol>
                </MDBRow>

 {/*Basic Info -  Row 5 */}
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label='Income Level' type='text' />
                  </MDBCol>

                  <MDBCol>
                    <MDBInput label="Maximum Rent Budget" type='number' />                 
                  </MDBCol> 
                </MDBRow>

 {/*Basic Info -  Row 6 */}
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Agree To Share Bills" />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Have Living Space"/> 
                  </MDBCol> 
                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Very Neat" /> 
                 </MDBCol> 

                 <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Low Noise Lifestyle" /> 
                 </MDBCol> 
                </MDBRow>

                <MDBRow className="mb-4">
                  <MDBCol>
                  <MDBCheckbox
                    name="flexCheck"
                    // id="register-flexCheckDefault"
                    label="Religious"/>
                  </MDBCol>

                  <MDBCol>
                  <MDBCheckbox
                    name="flexCheck"
                    // id="register-flexCheckDefault"
                    label="Have Kids"
                 />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                        name="flexCheck"
                        // id="register-flexCheckDefault"
                        label="Have Pets"
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                        name="flexCheck"
                        // id="register-flexCheckDefault"
                        label="Smoker"
                    />
                  </MDBCol>
                </MDBRow>

{/* Checkboxes - Row 3 */}

                <MDBRow className="mb-4">
                  <MDBCol>
                  <MDBCheckbox
                    name="flexCheck"
                    // id="register-flexCheckDefault"
                    label="Student"
                 />
                  </MDBCol>

                  <MDBCol>
                  <MDBCheckbox
                    name="flexCheck"
                    // id="register-flexCheckDefault"
                    label="Musician"
                 />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                        name="flexCheck"
                        // id="register-flexCheckDefault"
                        label="Singer"
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                        name="flexCheck"
                        // id="register-flexCheckDefault"
                        label="Host Parties"
                        required
                    />
                  </MDBCol>
                </MDBRow>

               
                {/* <MDBTextArea label='Additional information' rows={4} className="mb-4" /> */}

                <div className="d-flex justify-content-center">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Create an account?' defaultChecked />
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4">
          
  {/* Preferences List (Checkboxes) - Right Column   */}
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">Your Preferences</MDBTypography>
            </MDBCardHeader>

            <MDBCardBody>
              <MDBListGroup flush>
              <MDBRow>
                  <select class="location-select-prefs">   {/* class="browser-default custom-select" */}
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
                  <select class="gender-select-prefs">   {/* class="browser-default custom-select" */}
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
                  <select class="orientation-select-prefs">   {/* class="browser-default custom-select" */}
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
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label=" Has Good Credit" /> 
                  </MDBRow>

                   <MDBRow>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Has Employment" /> 
                  </MDBRow>

                  <MDBRow>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Has High Income" /> 
                  </MDBRow> 

                  <MDBRow>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Has No Kids" /> 
                  </MDBRow> 

                  <MDBRow>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Has No Pets" /> 
                  </MDBRow> 

                  <MDBRow>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Agrees to Share Bills" /> 
                  </MDBRow> 
              
                <MDBRow>
                  <MDBCheckbox
                    name="flexCheck"
                    // id="register-flexCheckDefault"
                    label="Has Living Space"   /> 
                </MDBRow>
                
                <MDBRow>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label=" Is Very Neat/Clean" /> 
                  </MDBRow>

                   <MDBRow>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Non-Smoker" /> 
                  </MDBRow>

                  <MDBRow>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Low Noise LifeStyle" /> 
                  </MDBRow> 

                  <MDBRow>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Is Religious" /> 
                  </MDBRow> 

                  <MDBRow>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Private Room" /> 
                  </MDBRow> 
              
                <MDBRow>
                  <MDBCheckbox
                    name="flexCheck"
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
                Save Preferences
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );

}
export default PreviousNewForm
