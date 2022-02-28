import * as types from "./actionTypes";
const initialState={
    loading : false,
    currentUser:null,
    error:null
};
/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object. It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */

 // Reducers usually look at the type of action that happened
        // to decide how to update the state
const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.REGISTER_START:
        case types.LOGIN_START: 
        case types.LOGOUT_START:
        return{
            ...state,
            loading:true
        }
        case types.LOGOUT_SUCCESS:
            return{
                ...state,
                currentUser:null,
            }
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:    
            return{
                ...state,
                loading:false,
                currentUser:action.payload,
            };
            case types.REGISTER_FAIL:
            case types.LOGIN_FAIL:
            case types.LOGIN_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:action.payload,
                }
     default:
         return state;
    }
}
export default userReducer;