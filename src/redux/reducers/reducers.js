const initialState = {
    popular: [],
    videos: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_POPULAR_VIDEOS":
            return {
                ...state,
                popular: action.payload
            }
        case "GET_VIDEOS":
            return {
                ...state,
                videos: action.payload
            }
        default:
            return state
    }
}

export default rootReducer