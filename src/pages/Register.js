import React, {useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerInitiate } from "../redux/actions";
import "./Register.css";
const Register =()=>{
    const [state,setState] = useState({
        displayName:"",
        email:"",
        password:"",
        passwordConfirm:"",
        roles:"",
        name:"",
        age:"",

    })
    const {currentUser} = useSelector((state)=>state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {email,password,displayName,passwordConfirm,roles,name,age}=state;
    console.log(state);
  
    // we used currentUser here bcoz in reducer we inialiState the state currentUser
    // we user key in rootReducer the user.state below 
   

    useEffect(()=>{
        if(currentUser){
            navigate("/");
        }
    },[currentUser,navigate]
    );

    
    

    const handleSubmit=(e)=>{
    e.preventDefault();
    
        // if passwor is not is equal to confirmPassword then below dispatch code is not executed
        if(password !== passwordConfirm){
            return;
        }
        dispatch(registerInitiate(email,password,displayName,roles,name,age));
        setState({email:"",displayName:"",password:"",passwordConfirm:"",roles:"",name:"",age:""});
    }
    
   
    const handleChange=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value});
    }
    return(
        <div>
            <div id="register-form">
             <form className="form-signup" onSubmit={handleSubmit}>
                 <h1 className="h3 mb-3 font-weight-normal" style={{textAlign:"center"}}>
                     Sign Up
                 </h1> 
                
                     
                 <input 
                     type="text"
                     id="displayName"
                     className="form-control"
                     name="displayName"
                     placeholder="Full Name"
                     onChange={handleChange}
                     value={displayName}
                     required
                     />
                     <br/>
                     <br/>
                     <input 
                     type="email"
                     id="user-email"
                     className="form-control"
                     name="email"
                     placeholder="Email address"
                     onChange={handleChange}
                     value={email}
                     required
                     />
                     <br/>
                     <br/>
                    <input 
                     type="password"
                     id="inputPassword"
                     className="form-control"
                     name="password"
                     placeholder="Password"
                     onChange={handleChange}
                     value={password}
                     required
                     />
                     <br/>
                     <br/>
                     <input 
                     type="password"
                     id="passwordConfirm"
                     className="form-control"
                     name="passwordConfirm"
                     placeholder="Confirm Password"
                     onChange={handleChange}
                     value={passwordConfirm}
                     required
                     />
                     <br/><br/>
                      <select id="roles" name="roles"  className="form-control" onChange={handleChange} required>
                      <option value="costomer">costomer</option>
                      <option value="Manager">Manager</option>
                       <option value="Admin">Admin</option>
                    </select>
                  <br/><br/>
                    <input 
                     type="text"
                     id="name"
                     className="form-control"
                     name="name"
                     placeholder="Name"
                     onChange={handleChange}
                     value={name}
                     required
                     />
                     <br/><br/>
                     <input 
                     type="text"
                     id="age"
                     className="form-control"
                     name="age"
                     placeholder="Age"
                     onChange={handleChange}
                     value={age}
                     required
                     />
                     <br/>
                     <button className="btn btn-primary btn-block" type="submit">
                         <i className="fa fa-user-plus"></i> Sign Up
                         </button>
                    <Link to="/login">
                        <i className="fas fa-angle-left"></i> Back
                    </Link>
                     
             </form>
             <br/>
            </div>
        </div>
    )
}
export default Register;
