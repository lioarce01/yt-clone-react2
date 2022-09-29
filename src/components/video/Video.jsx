import React from 'react'
import{ videoDetail } from '../../redux/actions/actions'
import { connect } from 'react-redux'

const Video = ({props}) => {
  return (
    <div>
      <h1>Video</h1>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/2g811Eo7K8U" title={props.videoDetail.snippet.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h1>{props.videoDetail.snippet.title}</h1>
      <p>{props.videoDetail.snippet.description}</p>
      <p>{props.videoDetail.snippet.channelTitle}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        videoDetail: state.videoDetail,
    }
}

export default connect(mapStateToProps, { videoDetail })(Video)