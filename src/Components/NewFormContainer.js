import React from 'react'
import NewForm from './NewForm'
import UserBio from '../Components/UserBio'
import "../Components/NewForm.css"


function NewFormContainer() {
  
  return (
    <div className='newFormContainer'>
      <div> <UserBio/> </div>
      <div> <NewForm/> </div>
    </div>
  )
}

export default NewFormContainer