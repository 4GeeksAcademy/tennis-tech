import React, {useState, useContext, useEffect} from "react";
import {Context} from "../store/appContext"
import { useParams, Link } from "react-router-dom";

export const Profile = () =>{

    const { user_id } = useParams()
    const [profile, setProfile] = useState({})
    const { store , actions} = useContext(Context)

    useEffect(()=>{
        actions.getProfiles()
        actions.getProfileByUserId(user_id)

    },[])

    return(
        <>
        
            
            
            <div className="row">
            <div className="col-xs-4 col-sm-8 col-md-12">
            <h2 className="text-center mt-5">Actualiza tu perfil de usuario</h2>
            </div>
            </div>

                <div className="row ms-5 me-5">
                    <div className="mb-3 col-xs-12 col-sm-12 col-md-12">
                        <label htmlFor="formFile" className="form-label">Inserte su foto de perfil</label>
                        <input className="form-control" type="file" accept="image/*" id="formFile"
                        onChange={(evt) => {

                            console.log(evt.target.files)

                            setProfile({ ...profile, photo: evt.target.files[0] })
                        }}/>
                    </div>
                </div>

                <div className="row ms-5 me-5">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="input-group mb-3 flex-column">
                            <label htmlFor="formFile" className="form-label">Name: </label>
                            <input type="text" onChange={(event) => setProfile({...profile, name: event.target.value})} value={profile.name || ''} className="form-control" placeholder={store.userProfile?.name || ''} aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="input-group mb-3 flex-column">
                            <label htmlFor="formFile" className="form-label">Lastname: </label>
                            <input type="text" onChange={(event) => setProfile({...profile, last_name: event.target.value})} value={profile.last_name || ''} className="form-control" placeholder={store.userProfile?.last_name || ''} aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>

                </div>

                {/* <div className="row">
                    <div className="col-6">
                        <div className="input-group mb-3 flex-column">
                            <label htmlFor="formFile" className="form-label">Username: </label>
                            <input type="text" onChange={(event) => setProfile({...profile, username: event.target.value})} value={profile.username || ''} className="form-control" placeholder="Please insert their username" aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="input-group mb-3 flex-column">
                            <label htmlFor="formFile" className="form-label">Email: </label>
                            <input type="email" onChange={(event) => setProfile({...profile, email: event.target.value})} value={profile.email || ''} className="form-control" placeholder="Please insert their email" aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>

                </div> */}

                <div className="row ms-5 me-5">
                    <div className="col-xs-8 col-sm-4 col-md-4">
                        <div className="input-group mb-3 flex-column">
                            <label htmlFor="formFile" className="form-label">Date of Birth: </label>
                            <input type="date" onChange={(event) => setProfile({...profile, date_of_birth: event.target.value})} value={profile.date_of_birth || ''} className="form-control" placeholder={store.userProfile?.date_of_birth || ''} aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-xs-8 col-sm-4 col-md-4">
                        <div className="input-group mb-3 flex-column">
                            <label htmlFor="formFile" className="form-label">Category: </label>
                            <select id="inputState" className="form-select" onChange={(event) => setProfile({...profile, category: event.target.value})} value={ profile.category || ''} style={{width: "100%"}}>
                                <option>Please select your category</option>
                                <option>primera</option>
                                <option>segunda</option>
                                <option>tercera</option>
                                <option>cuarta</option>
                                <option>quinta</option>
                                <option>sexta</option>
                            </select>
                            {/* <input type="text" onChange={(event) => setProfile({...profile, category: event.target.value})} value={profile.category || ''} className="form-control" placeholder="Please insert their category" aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/> */}
                        </div>
                    </div>
                    <div className="col-xs-8 col-sm-4 col-md-4">
                        <div className="input-group mb-3 flex-column">
                            <label htmlFor="formFile" className="form-label">Gender: </label>
                            <select id="gender" className="form-select" onChange={(event) => setProfile({...profile, gender: event.target.value})} value={ profile.gender || ''} style={{width: "100%"}}>
                                <option>Please select your gender</option>
                                <option>male</option>
                                <option>female</option>
                                <option>neutral</option>
                            </select>
                            {/* <input type="text" onChange={(event) => setProfile({...profile, gender: event.target.value})} value={profile.gender || ''} className="form-control" placeholder="Please insert their gender" aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/> */}
                        </div>
                    </div>

                </div>

                {/* <div className="row">
                    <div className="col-12">
                        <div className="input-group mb-3 flex-column">
                            <label htmlFor="formFile" className="form-label">Password: </label>
                            <input type="password" onChange={(event) => setProfile({...profile, password: event.target.value})} value={profile.password || ''} className="form-control" placeholder="Please change their password" aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>

                </div> */}

                <div className="row ms-5 me-5">
                    <div className="col-6">
                        <button className="btn btn-warning" onClick={() => actions.createProfile(profile) } style={{width: "100%"}}>Save your changes</button>
                    </div>
                    <div className="col-6">
                        <Link to={"/exploreProfile/"+store.userLoggedIn?.id} style={{textDecoration: "none", width: "25%"}}>
                            <button type="button" class="btn btn-info" style={{width: "100%"}}>View your profile</button>
                        </Link>
                    </div>

                </div>

        
        </>
    )
}