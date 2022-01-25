import './index.css'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { MdHomeFilled } from 'react-icons/md'
import {
  RiAddBoxLine,
  RiSendPlaneFill,
  RiAddBoxFill,
  RiCompassFill,
  RiExchangeFundsLine,
} from 'react-icons/ri'
import { TiCompass } from 'react-icons/ti'
import { VscHome } from 'react-icons/vsc'
import { BsBookmark, BsPerson } from 'react-icons/bs'
import { RiSettings5Line } from 'react-icons/ri'
import SearchInput from '../SearchInput'
import { useState } from 'react'

const BASE_CLASS = 'ic-Navbar'

export default function Navbar() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false)

  const handleProfileMenuClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  const handleNotificationsMenuClick = () => {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen)
  }

  const currentPath = window.location.pathname
  console.log(currentPath)
  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-content`}>
        <Link to='/'>
          <div className={`${BASE_CLASS}-logo`}>
            <img
              className={`${BASE_CLASS}-logo-img`}
              src='https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png'
              alt='ic_logo'
            />
          </div>
        </Link>
        <div className={`${BASE_CLASS}-searchBar`}>
          <SearchInput placeholder='Busca' />
        </div>
        <div className={`${BASE_CLASS}-options`}>
          <Link to='/'>
            {currentPath === '/' ? (
              <MdHomeFilled size={22} />
            ) : (
              <VscHome size={22} />
            )}
          </Link>
          <Link to='/messages'>
            {currentPath === '/messages' ? (
              <RiSendPlaneFill size={22} />
            ) : (
              <FiSend size={22} />
            )}
          </Link>
          <Link to='/publish'>
            {currentPath === '/publish' ? (
              <RiAddBoxFill size={22} />
            ) : (
              <RiAddBoxLine size={22} />
            )}
          </Link>
          <Link to='/discover'>
            {currentPath === '/discover' ? (
              <RiCompassFill size={27} />
            ) : (
              <TiCompass size={27} />
            )}
          </Link>
          <div
            className={`${BASE_CLASS}-optionsNotifications`}
            onClick={handleNotificationsMenuClick}
          >
            {isNotificationsMenuOpen ? (
              <AiFillHeart size={22} />
            ) : (
              <AiOutlineHeart size={22} />
            )}
            {isNotificationsMenuOpen && (
              <div className={`${BASE_CLASS}-optionsNotifications-feed`}></div>
            )}
          </div>
          <div
            className={`${BASE_CLASS}-avatar`}
            onClick={handleProfileMenuClick}
          >
            <img
              src='https://cdnnmundo1.img.sputniknews.com/img/07e5/09/13/1116212032_0:0:1300:975_1920x0_80_0_0_a523efb8da64e8c4064a6df5702a4a88.png'
              alt='avatar'
            />
            {isProfileMenuOpen && (
              <div className={`${BASE_CLASS}-profile-submenu`}>
                <div className={`${BASE_CLASS}-profile-submenuTriangle`} />
                <div className={`${BASE_CLASS}-profile-submenuItem`}>
                  <BsPerson size={16} />
                  <span className={`${BASE_CLASS}-profile-submenuItem-label`}>
                    Perfil
                  </span>
                </div>
                <div className={`${BASE_CLASS}-profile-submenuItem`}>
                  <BsBookmark size={16} />
                  <span className={`${BASE_CLASS}-profile-submenuItem-label`}>
                    Guardados
                  </span>
                </div>
                <div className={`${BASE_CLASS}-profile-submenuItem`}>
                  <RiSettings5Line size={16} />
                  <span className={`${BASE_CLASS}-profile-submenuItem-label`}>
                    {' '}
                    Configuración
                  </span>
                </div>
                <div className={`${BASE_CLASS}-profile-submenuItem`}>
                  <RiExchangeFundsLine size={16} />
                  <span className={`${BASE_CLASS}-profile-submenuItem-label`}>
                    Cambiar de cuenta
                  </span>
                </div>
                <div className={`${BASE_CLASS}-profile-submenuItem`}>
                  <span className={`${BASE_CLASS}-profile-submenuItem-label`}>
                    Cerrar sesión
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
