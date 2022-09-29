import React from 'react'
import './Sidebar.css'
import { AiFillHome } from 'react-icons/ai'
import { AiOutlineCompass } from 'react-icons/ai'
import { BiMoviePlay } from 'react-icons/bi'
import { BsCollectionPlay } from 'react-icons/bs'
import { MdVideoLibrary } from 'react-icons/md'
import { AiOutlinePlaySquare } from 'react-icons/ai'
import { AiOutlineLike } from 'react-icons/ai'
import { MdHistoryToggleOff } from 'react-icons/md'
import { AiOutlineHistory } from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar__top">
          <div className="sidebar__top__wrapper">
            <div className='sidebar__top__wrapper__icon' id='colored'>
              <AiFillHome className='icon'/>
              <p>Principal</p>
            </div>
            <div className='sidebar__top__wrapper__icon'>
              <AiOutlineCompass className='icon'/>
              <p>Explorar</p>
            </div>
            <div className='sidebar__top__wrapper__icon'>
              <BiMoviePlay className='icon'/>
              <p>Shorts</p>
            </div>
            <div className='sidebar__top__wrapper__icon'>
              <BsCollectionPlay className='icon'/>
              <p>Suscripciones</p>
            </div>
            <div className='sidebar__top__wrapper__icon'>
              <MdVideoLibrary className='icon'/>
              <p>Biblioteca</p>
            </div>
            <div className='sidebar__top__wrapper__icon'>
              <AiOutlineHistory className='icon'/>
              <p>Historial</p>
            </div>
            <div className='sidebar__top__wrapper__icon'>
              <AiOutlinePlaySquare className='icon'/>
              <p>Tus videos</p>
            </div>
            <div className='sidebar__top__wrapper__icon'>
              <MdHistoryToggleOff className='icon'/>
              <p>Ver mas tarde</p>
            </div>
            <div className='sidebar__top__wrapper__icon'>
              <AiOutlineLike className='icon'/>
              <p>Videos que te gustan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar