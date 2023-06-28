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
        <div className="col-xs-4 col-sm-8 col-md-12">
        <h1 className='text-center pb-5 mb-5 mt-5 tituloProfile'>This is your profile!</h1>
        </div>
        <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-6'>
            {
                store.userProfile?.photo &&
                <img className='profilePicture rounded-circle' src={store.userProfile.photo} alt={store.userProfile.id} />
            }
        </div>
        <div className='col-xs-12 col-sm-12 col-md-6 textoName'>
            {
                store.userProfile?.name &&
                <p> <strong>Name:</strong> {" "} {store.userProfile.name} </p>
            }
            {
              store.userProfile?.last_name &&
              <p> <strong>Last Name:</strong>{" "} {store.userProfile.last_name} </p>  
            }
            {
               store.userProfile?.date_of_birth &&
               <p> <strong>Date of Birth:</strong> {" "} {store.userProfile.date_of_birth.slice(0,16)} </p>  
            }
            {
                store.userProfile?.category &&
                <p> <strong>Category:</strong> {" "} {store.userProfile.category} </p> 
            }
            {
                store.userProfile?.gender &&
                <p> <strong>Gender:</strong> {" "} {store.userProfile.gender} </p>
            }
        </div>
        </div>
        </>
    )
}