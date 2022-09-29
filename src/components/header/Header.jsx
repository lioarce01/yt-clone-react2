import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { getPopularVideos, getVideos } from '../../redux/actions/actions'
import './Header.css'
import { IoSearchOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Header = ({getPopularVideos, ...props}) => {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.getVideos(input)
  }

  useEffect(() => {
    getPopularVideos()
  }, [getPopularVideos])

  return (
    <div>
      <nav className='nav-wrapper'>
        <div className='container'>
          <div className="left">
            <p className="brand-logo">YouTube.</p>
          </div>
          <div className="middle">
            <form className='form' onSubmit={handleSubmit}>
              <input
                className='search'
                type="text"
                placeholder="Search"
                value={input}
                onChange={handleChange}
              />
              <button className='button' type='submit'><IoSearchOutline className='lupa'/></button>
            </form>
          </div>
          <div className="right"><span className='user-img'></span></div>
        </div>
      </nav>
      <div className='header'>
        <div className='popular'>
        {props.popular.map((video, i) => (
          <Link to={`/video/${video.id.videoId}`} key={i}>
            <div key={i} className='video'>
              <div className='thumb'>
                <img src={video.snippet.thumbnails.medium.url} alt="" />
              </div>
                <div className='video-details'>
                  <div className='video-details-text'>
                    <h1>{video.snippet.title}</h1>
                    <p>{video.snippet.channelTitle}</p>
                  </div>
                  <span className='video-channel-img'></span>
                </div>
              </div>
            </Link>
          ))}
          </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    popular: state.popular,
    videos: state.videos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPopularVideos: () => dispatch(getPopularVideos()),
    getVideos: (input) => dispatch(getVideos(input))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)