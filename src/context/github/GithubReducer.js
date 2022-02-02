const githubReducer = (state,action)=> {
    const GET_USERS = 'GET_USERS'

    switch(action.type){

        case GET_USERS:
            return{
                ...state,
                users: action.payload,
                isLoading: false,
            }
        case 'SET_LOADING':
                return{
                    ...state,
                    isLoading:true,
                }
        default :
            return state
    }

}


export default githubReducer