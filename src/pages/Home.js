import { logoutInitiate } from "../redux/actions";
import React, {useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Home =()=>{
    const {currentUser} = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    // useEffect(()=>{
    //     if(currentUser){
    //         navigate("/register")
    //     }
    // },[currentUser,navigate]
    // )

    
    // console.log(state);
  

    const handleSubmit=()=>{
        if(currentUser){
            dispatch(logoutInitiate());
        }
    }
    const displayName = currentUser && currentUser.displayName;
    const roles = currentUser && currentUser.roles;
    const email = currentUser && currentUser.email;
    const name = currentUser && currentUser.name;
    const age = currentUser && currentUser.age;
    
    
    return(
        <div>
            <h2>Welcome to Qortechno Team</h2>
            <h5>{displayName}</h5>
            <h5>{email}</h5>
            <h5>{roles}</h5>
            <h5>{name}</h5>
            <h4>{age}</h4>

        <br/>
        <button className="btn btn-danger" onClick={handleSubmit}>Logout</button>
        </div>
    )
}
export default Home;
