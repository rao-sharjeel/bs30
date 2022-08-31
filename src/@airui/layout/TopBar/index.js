import React, { useEffect, useRef, useState } from 'react'
import { useLocation, withRouter } from 'react-router-dom'
import { useDispatch, connect, useSelector } from 'react-redux'

import Search from './Search'
import IssuesHistory from './IssuesHistory'
import Status from './Status'
import LanguageSwitcher from './LanguageSwitcher'
import Actions from './Actions'
import UserMenu from './UserMenu'
import bellIcon from './bell.svg'
import homeIcon from './homeIcon.svg'
import listIcon from './list-ul.svg'
import rightIcon from './rightIcon.svg'
import style from './style.module.scss'

const mapStateToProps = ({ menu, settings }) => ({
  menuData: menu.menuData,
  settings,
  flyoutActive:
    (settings.menuType === 'flyout' ||
      settings.menuType === 'compact' ||
      settings.isMenuCollapsed) &&
    !settings.isMobileView,
})

function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

const TopBar = ({ settings }) => {
  const [openSearchBox, setOpenSearchBox] = useState(false)
  const [openNotification, setOpenNotification] = useState(false)
  const aa = useSelector(state => state)
  console.log('seeting sdsdf  sdfsdf  sdfsd ', aa)
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const ref = useRef(null)

  useOutsideAlerter(ref, () => setOpenNotification(false))

  const toggleMenu = e => {
    e.preventDefault()
    const { isMenuCollapsed } = settings
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'isMenuCollapsed',
        value: !isMenuCollapsed,
      },
    })
  }

  useEffect(() => {
    if (pathname.includes('main-page')) {
      setName('Home')
    } else if (pathname.includes('category')) {
      setName('Category')
    } else if (pathname.includes('chat')) {
      setName('Chat')
    } else if (pathname.includes('listings')) {
      setName('Listings')
    } else if (pathname.includes('purchaseHistory')) {
      setName('History')
    } else if (pathname.includes('favorites')) {
      setName('Favourite')
    } else if (pathname.includes('apps/profile')) {
      setName('Profile')
    } else if (pathname.includes('ui-kits/bootstrap')) {
      setName('Setting')
    } else if (pathname.includes('sell')) {
      setName('Sell')
    } else setName('')
  }, [pathname])

  return (
    <div>
      {!pathname.includes('register') && !pathname.includes('login') && (
        <div className={style.wraper}>
          <div style={{ display: 'flex' }}>
            <div className={style.homeWraper}>
              <a href="#" onClick={toggleMenu} onKeyDown={toggleMenu}>
                <img
                  src={settings.isMenuCollapsed ? rightIcon : homeIcon}
                  alt="home"
                  width={25}
                  height={25}
                />
              </a>
              {!openSearchBox && (
                <span
                  style={{ color: 'white', margin: '0px', fontSize: '16px' }}
                  className={style.menuStyle}
                >
                  {name}
                </span>
              )}
            </div>
            {!openSearchBox && (
              <div
                className="d-flex justify-content-center flex-column p-4 "
                style={{ borderRight: '0.5px solid white', padding: '0px 20px' }}
              >
                <span>Location</span>
                <select
                  style={{ color: 'white' }}
                  className={`${style.selectBox} form-select  `}
                  aria-label="Default select example"
                >
                  <option className={style.options} selected>
                    Open this select menu
                  </option>
                  <option className={style.options} value="1">
                    China
                  </option>
                  <option className={style.options} value="2">
                    Beijing
                  </option>
                  <option className={style.options} value="3">
                    Seoul
                  </option>
                  <option className={style.options} value="3">
                    Tokyo
                  </option>
                  <option className={style.options} value="3">
                    Japan
                  </option>
                </select>
              </div>
            )}
          </div>
          <div className={style.topbar}>
            <div className="mr-4">
              <Search openSearchBox={openSearchBox} setOpenSearchBox={setOpenSearchBox} />
            </div>
            {!openSearchBox && (
              <>
                <div className="mr-4">
                  <img src={listIcon} alt="asd" width={25} height={25} />
                </div>
                <div className="mr-4" role="button">
                  <div
                    onClick={() => setOpenNotification(!openNotification)}
                    onKeyPress={() => setOpenNotification(true)}
                    role="button"
                    tabIndex={0}
                  >
                    <img src={bellIcon} alt="asd" width={25} height={25} />
                  </div>
                  {openNotification && (
                    <div className={style.notification} ref={ref}>
                      <div
                        onClick={() => setOpenNotification(false)}
                        onKeyPress={() => setOpenNotification(false)}
                        role="button"
                        tabIndex={0}
                      >
                        Hello Notification 1
                      </div>
                      <div>Hello Notification 1</div>
                    </div>
                  )}
                </div>
                <div>
                  <UserMenu />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(TopBar))
