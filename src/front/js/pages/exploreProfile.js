import React, {useState, useContext, useEffect} from "react";
import {Context} from "../store/appContext"
import { useParams } from "react-router-dom";
import "../../styles/exploreProfile.css";

export const ExploreProfile = () =>{

    const { user_id } = useParams()
    const { store , actions} = useContext(Context)

    useEffect(()=>{
        
        actions.getProfileByUserId(user_id)

    },[])

    return(
        <>
        <h1 className='text-center pb-5 mb-5 mt-5'>This is your profile!</h1>
        <div className='row margen'>
            <div className='col-6'>
            {
                store.userProfile?.photo &&
                <img className='profilePicture rounded-circle' src={store.userProfile.photo} alt={store.userProfile.id} />
            }
        </div>
        <div className='col-6 d-flex flex-column justify-content-between'>
            {
                store.userProfile?.name &&
                <h4>Name: {" "} {store.userProfile.name} </h4>
            }
            {
              store.userProfile?.last_name &&
              <h4>Last Name:{" "} {store.userProfile.last_name} </h4>  
            }
            {
               store.userProfile?.date_of_birth &&
               <h4>Date of Birth: {" "} {store.userProfile.date_of_birth.slice(0,16)} </h4>  
            }
            {
                store.userProfile?.category &&
                <h4>Category: {" "} {store.userProfile.category} </h4> 
            }
            {
                store.userProfile?.gender &&
                <h4>Gender: {" "} {store.userProfile.gender} </h4>
            }
        </div>
        </div>
        </>
    )
}