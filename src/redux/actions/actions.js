import axios from 'axios'

export const GET_POPULAR_VIDEOS = 'GET_POPULAR_VIDEOS'
export const GET_VIDEOS = 'GET_VIDEOS'

export const getPopularVideos = () => async (dispatch) => {
    return await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDz1TZuWJEU1RMvj_kWr9IwlFW0DyBCU1w&chart=mostPopular&type=video&part=snippet&maxResults=20&regionCode=AR')
    .then(response => response.data)
    .then(data => {
        dispatch({
            type: GET_POPULAR_VIDEOS,
            payload: data.items
            })
        })
}

export const getVideos = (keyword) => async dispatch => {
    return await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDz1TZuWJEU1RMvj_kWr9IwlFW0DyBCU1w&type=video&part=snippet&maxResults=20&q=${keyword}`)
    .then(response => response.data)
    .then(data => {
        dispatch({
            type: GET_VIDEOS,
            payload: data.items
            })
        })
}