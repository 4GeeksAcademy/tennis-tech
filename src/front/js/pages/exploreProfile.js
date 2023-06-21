import React from 'react'
import "../../styles/exploreProfile.css";
import { Context } from "../store/appContext"

export const ExploreProfile = () =>{


    return(
        <>
        <h1 className='text-center pb-5 mb-5 mt-5'>This is your profile!</h1>
        <div className='row margen'>
            <div className='col-6'>
        <img className='profilePicture rounded-circle' src="https://res.cloudinary.com/dqd3blown/image/upload/v1687301560/Shane-C.-Home-Page-1024x732_rvdros.jpg"></img>
        </div>
        <div className='col-6 d-flex flex-column justify-content-between'>
        <h4 className=''>Name:</h4>
        <h4 className=''>Last Name:</h4>
        <h4 className=''>Date of birth:</h4>
        <h4 className=''>Category:</h4>
        <h4 className=''>Gender:</h4>
        </div>
        </div>
        </>
    )
}