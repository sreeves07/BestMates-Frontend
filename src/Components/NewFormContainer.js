import React from 'react'
import NewForm from './NewForm'
// import UploadWidget from '../Components/UploadWidget'
// import PreferenceIndex from './PreferenceIndex'
import "../Components/NewForm.css"
function NewFormContainer() {
  return (
    <div className='newFormContainer'>
      {/* <div> <UploadWidget/> </div> */}
        <div> <NewForm/> </div>

        {/* <div><PreferenceIndex/></div> */}
    </div>
  )
}

export default NewFormContainer