const initialState = {
    isLoading:false
}

export const loaderReducer = (state = initialState, action)=>{
        switch(action.type){
            case 'SHOW_LOADER':
                state.isLoading = true
                return  {...state};
            case 'HIDE_LOADER':
                state.isLoading = false
                return  {...state};
             default:
                return state;        
        }
}