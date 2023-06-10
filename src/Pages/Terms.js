import React from 'react'
import { Link } from "react-router-dom";

import {
  MDBCol,
  MDBRow,
  MDBTypography,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn,
} 
from "mdb-react-ui-kit";

function Terms() {
  return (
          <div className='terms-box .overflow-hidden'>
            
            <MDBCard className="terms-card col-10">
              <MDBCardHeader className=" terms-headerCard py-2">
                <MDBTypography tag="h4" className="mb-3 termsHdg" >Terms and Conditions of Use for BestMates</MDBTypography>
              </MDBCardHeader>
                <br></br>
                <MDBRow>
                  <Link style={{display: "flex", alignItems: "center", justifyContent: "center"}} to={`/signin/`}>
                    <MDBBtn className='sign-in-btn' 
                    onClick={()=>window.close()}>Close</MDBBtn>
                  </Link>
                </MDBRow>

              <MDBCardBody className='terms-cardBody'>
                <MDBRow className="mb-5 terms-intro">These Terms and Conditions ("Agreement") govern your use of BestMates ("App"), including any features, services, and content provided by the App.  By accessing or using the App, you agree to be bound by this Agreement. If you do not agree with these terms, please refrain from using the App.
                </MDBRow>

                <MDBRow> <MDBTypography tag="h5" className="mb-4" >Account Registration</MDBTypography></MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="1" className="mb-1">1.1 </MDBCol>
                  <MDBCol md="11" className="mb-2" >You must be at least 18 years old to use the App. By creating an account, you represent and warrant that you are of legal age.
                  </MDBCol>   
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="1" >1.2 </MDBCol>
                  <MDBCol md="11">You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized access or use of your account.
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol md="1" className="mb-1">1.3 </MDBCol>
                  <MDBCol md="9" >You are responsible for any activity that occurs under your account. We are not liable for any loss or damage arising from your failure to comply with this section.
                  </MDBCol>  <br/>
                </MDBRow>
                <MDBRow className="mb-3"> <MDBTypography tag="h5"  >User Conduct</MDBTypography></MDBRow> 
                
                <MDBRow className="mb-3">
                  <MDBCol md="1" className="mb-1">2.1 </MDBCol>
                  <MDBCol md="9" >You agree to use the App in compliance with all applicable laws and regulations.
                  </MDBCol>   
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="1" className="mb-1">2.2 </MDBCol>
                  <MDBCol md="9" >You will not use the App for any unlawful, abusive, or harmful purpose, or in any way that violates this Agreement.
                  </MDBCol>   
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="1" className="mb-1">2.3 </MDBCol>
                  <MDBCol md="9" >You will not engage in any fraudulent activity or impersonate any person or entity.
                  </MDBCol>   
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol md="1" className="mb-1">2.4 </MDBCol>
                  <MDBCol md="9" >You will not transmit any viruses, malware, or other harmful code through the App.
                  </MDBCol>   
                </MDBRow>

                <MDBRow> <MDBTypography tag="h5" className="mb-3" >User Content </MDBTypography></MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="1" className="mb-1">3.1 </MDBCol>
                  <MDBCol md="9" >By using the App, you may contribute content such as profiles, listings, messages, and reviews ("User Content").
                  </MDBCol>   
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="1" className="mb-1">3.2 </MDBCol>
                  <MDBCol md="9" >You retain ownership of your User Content. However, by submitting User Content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, distribute, and display your User Content for the purposes of operating and improving the App.
                  </MDBCol>   
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="1" className="mb-1">3.3 </MDBCol>
                  <MDBCol md="9" >You represent and warrant that your User Content does not infringe any intellectual property rights or violate any third-party rights.
                  </MDBCol>   
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol md="1" className="mb-1">3.4 </MDBCol>
                  <MDBCol md="9" >We reserve the right to remove or modify any User Content that violates this Agreement or is otherwise objectionable.
                  </MDBCol>   
                </MDBRow>

              <MDBRow> <MDBTypography tag="h5" className="mb-4 " >Privacy</MDBTypography></MDBRow>
              <MDBRow className="mb-3">
                  <MDBCol md="1" className="mb-4">4.1 </MDBCol>
                  <MDBCol md="9" >We collect and process personal information in accordance with our Privacy Policy. By using the App, you consent to our collection and use of your personal information as described in the Privacy Policy.
                  </MDBCol>   
                </MDBRow>

              <MDBRow> <MDBTypography tag="h5" className="mb-3" >Disclaimer of Warranties </MDBTypography></MDBRow>
              <MDBRow className="mb-3">
                  <MDBCol md="1" className="mb-1">5.1 </MDBCol>
                  <MDBCol md="9" >The App is provided on an "as is" and "as available" basis. We make no warranties or representations, express or implied, regarding the App's availability, reliability, accuracy, or fitness for a particular purpose.
                  </MDBCol>   
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol md="1" className="mb-4">5.2 </MDBCol>
                  <MDBCol md="9" >We do not endorse, guarantee, or verify the accuracy or authenticity of User Content or any other information provided by users of the App.
                  </MDBCol>   
                </MDBRow>

                <MDBRow> <MDBTypography tag="h5" className="mb-3" > Limitation of Liability </MDBTypography></MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="1" className="mb-1">6.1 </MDBCol>
                  <MDBCol md="9" >To the maximum extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use or inability to use the App.
                  </MDBCol>   
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol md="1" className="mb-1">6.2 </MDBCol>
                  <MDBCol md="9" >We are not responsible for any disputes, interactions, or transactions between users of the App. You agree to release us from any claims, demands, or damages arising from such disputes.
                  </MDBCol>   
                </MDBRow>

                <MDBRow> <MDBTypography tag="h5" className="mb-3" > Intellectual Property </MDBTypography></MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="1" className="mb-1">7.1 </MDBCol>
                  <MDBCol md="9" >The App and its content are protected by copyright, trademark, and other intellectual property laws. You may not modify, reproduce, distribute, or create derivative works based on the App or its content without our prior written consent.
                  </MDBCol>   
                </MDBRow>

                <MDBRow><MDBTypography tag="h5" className="mb-3">Modifications</MDBTypography></MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="1" className="mb-1">8.1 </MDBCol>
                  <MDBCol md="9">We reserve the right to modify or terminate the App or this Agreement at any time without prior notice. Any changes will be effective immediately upon posting.
                  </MDBCol>   
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol md="1" className="mb-1">8.2 </MDBCol>
                  <MDBCol md="9" >It is your responsibility to review this Agreement periodically. Continued use of the App after any modifications constitutes acceptance of the updated terms.
                  </MDBCol>   
                </MDBRow>

                <MDBRow> <MDBTypography tag="h5" className="mb-4" >Governing Law   </MDBTypography></MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="1" className="mb-1">9.1 </MDBCol>
                  <MDBCol md="9" >This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising out of or relating to this Agreement shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction].
                  </MDBCol>   
                </MDBRow> 
            
                <MDBRow> <MDBTypography tag="h5" className="mb-4" >Severability</MDBTypography></MDBRow>
                <MDBRow className="mb-0">
                  <MDBCol md="1" className="mb-1">10.1 </MDBCol>
                  <MDBCol md="9" >If any provision of this Agreement is held to be invalid, illegal, or unenforceable, the validity, legality, or enforceability of the remaining provisions shall not be affected or impaired.
                  </MDBCol>   
                </MDBRow>
                <br></br>
                <MDBRow>
                  <Link style={{display: "flex", alignItems: "center", justifyContent: "center"}} to={`/signin`}>
                    <MDBBtn className='sign-in-btn'onClick={()=>window.close()}>Close</MDBBtn>
                  </Link>
                </MDBRow>          
              </MDBCardBody>
          </MDBCard>
      </div>
  )
}

export default Terms