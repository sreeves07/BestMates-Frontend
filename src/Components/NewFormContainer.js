import React from 'react'
import NewForm from './NewForm'
import PreferenceIndex from './PreferenceIndex'
import "../Components/NewForm.css"
function NewFormContainer() {
  return (
    <div className='newFormContainer'>
        <div><NewForm/></div>
        <div><PreferenceIndex/></div>
    </div>
  )
}

export default NewFormContainer