const initialState = {
    isUserLoggedIn:false,
    currentUserData:{},


}

export const loginReducer = (state= initialState, action)=>{
    console.log("++++>>reducer", state, action)
   
        switch(action.type){
            case 'LOGIN':
                state.isUserLoggedIn = true;
                state.showLogin = false;
                state.currentUserData = action.payload.data
                return {...state};
            case 'LOGOUT':
                state.isUserLoggedIn = false;
                // state.showLogin = true;
                // state.currentUserData ={}
                return {...state}
            case 'SHOW_LOGIN':
                state.showLogin = true;
                state.isUserLoggedIn = false;
                return {...state}    
            default:
                return state        
        }
}