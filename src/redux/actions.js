import * as types from "./actionTypes";
import { auth } from "../firebase";

// below 9 are action creators
const registerStart =()=>({
    type:types.REGISTER_START,
})
const registerSuccess =(user)=>({
    type:types.REGISTER_SUCCESS,
    payload:user,
}) 
const registerFail =(error)=>({
    type:types.REGISTER_FAIL,
    payload: error,
})
// The only way to mutate/change the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.


      // Handle user inputs by "dispatching" action objects,
      // which should describe "what happened" in the app

const logInStart =()=>({
    type:types.LOGIN_START,
})
const logInSuccess=(user)=>({
    type:types.LOGIN_SUCCESS,
    payload:user,
})
const logInFail=(error)=>({
    type:types.LOGIN_FAIL,
   payload:error,
})

const logoutStart=()=>({
    type:types.LOGOUT_START,
})
const logoutSuccess=()=>({
    type:types.LOGIN_SUCCESS,
})
const logoutFail=(error)=>({
    type:types.LOGOUT_FAIL,
    payload:error
})
// below registerInitiate is for register page 
export const registerInitiate=(email,password,displayName,roles,name,age)=>{
    return function(dispatch){
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email,password).then(({user})=>{
            user.updateProfile({
                displayName, 
                roles,
                name,
                age,
            })
            dispatch(registerSuccess());
        }).catch((error)=>dispatch(registerFail(error.message)));
    }
}
// below registerInitiate is for login page 

export const logInInitiate=(email,password)=>{
    return function(dispatch){
        dispatch(logInStart());
        auth.signInWithEmailAndPassword(email,password).then(({user})=>{
            dispatch(logInSuccess(user))
        }).catch((error)=>dispatch(logInFail(error.message)));
    }
}

export const logoutInitiate=()=>{
    return function(dispatch){
        dispatch(logoutStart());
        auth.signOut().then((resp)=>
            dispatch(logoutSuccess())
        ).catch((error)=>dispatch(logoutFail(error.message)))
    }
}