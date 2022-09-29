import axios from 'axios'

export const GET_POPULAR_VIDEOS = 'GET_POPULAR_VIDEOS'
export const GET_SEARCHED_VIDEOS = 'GET_SEARCHED_VIDEOS'
export const GET_VIDEO_DETAIL = 'GET_VIDEO_DETAIL'

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

export const getVideos = (input) => async dispatch => { 
    return await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDz1TZuWJEU1RMvj_kWr9IwlFW0DyBCU1w&type=video&part=snippet&maxResults=20&q=${input}`)
    .then(response => response.data)
    .then(data => {
        dispatch({
            type: GET_SEARCHED_VIDEOS, 
            payload: data.items 
            })
        })
}

export const videoDetail = (id) => async dispatch => {
    return await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDz1TZuWJEU1RMvj_kWr9IwlFW0DyBCU1w&id=${id}&part=snippet,statistics`)
    .then(response => response.data)
    .then(data => {
        dispatch({
            type: GET_VIDEO_DETAIL,
            payload: data.items[0]
        })
    })
}