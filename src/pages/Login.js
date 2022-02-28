import React, {useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logInInitiate } from "../redux/actions";
import "./login.css";

const Login =()=>{
    const [state,setState] = useState({
        email:"",
        password:""
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const {email,password} = state;
    console.log(state);
    
   
    const {currentUser} = useSelector((state)=>state.user);
   
    useEffect(()=>{
      if(currentUser){
          navigate("/");
      }
    },[currentUser,navigate])
   
    
    const handleGoogleSignIn=()=>{};

    const handleFBSignIn=()=>{};

    
   
    
    
    const handleSubmitChange=(e)=>{
        e.preventDefault();
        if(!email || !password){
            return;
        }
        dispatch(logInInitiate(email,password))
        setState({email: "",password: ""})
    };
    

    const handleChange=(e)=>{
        let {name,value}=e.target;
        setState({...state, [name]:value});
    }
    return(
        <div>
            <div id="logreg-forms">
             <form className="form-signin" onSubmit={handleSubmitChange}>
                 <h1 className="h3 mb-3 font-weight-normal" style={{textAlign:"center"}}>
                     Login
                 </h1> 
                 <div>
                     <div className="social-login">
                        <button className="btn google-btn social-btn" type="button" onClick={handleGoogleSignIn}>
                            <span>
                                <i className="fab fa-google-plus-g"></i> Sign in with Google+
                            </span>
                           
                        </button>
                        <button className="btn facebook-btn social-btn" type="button" onClick={handleFBSignIn}>
                            <span>
                                <i className="fab fa-facebook-f"></i>Sign in with Facebook+
                            </span>
                           
                        </button>
                     </div>
                     <p style={{textAlign:"center"}}>OR</p>
                     <input 
                     type="email"
                     id="inputEmail"
                     className="form-control"
                     name="email"
                     placeholder="Email adress"
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
                     <button className="btn btn-secondary btn-block" type="submit">
                         sign In 
                         </button>
                     <hr/>
                     {/* line create hote hote hr tag mul */}
                     <p>Dont have an Account</p>
                     <Link to="/register">

                     <button className="btn btn-primary btn-block" type="button" id="btn-signup">
                         <i className="fas fa-user-plus">Sign up new Account</i>
                         </button>
                     </Link>
                 </div>

             </form>
            </div>
        </div>
    )
}
export default Login;
