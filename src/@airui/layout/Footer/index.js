import React from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import classNames from 'classnames'
import style from './style.module.scss'

const mapStateToProps = ({ settings }) => ({ settings })

const Footer = ({ settings: { isContentMaxWidth, logo, description } }) => {
  const { pathname } = useLocation()
  return (
    <div>
      {!pathname.includes('register') &&
        !pathname.includes('Login') &&
        !pathname.includes('forgot-password') && (
          <div
            className={classNames(style.footer, {
              [style.footerFullWidth]: !isContentMaxWidth,
            })}
          >
            <div className={style.inner}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '20px' }}>
                <div>
                  {/* <p> */}
                  <p style={{ color: '#ffffff' }}>
                    © 2022 <strong>Buy & Sell.</strong> All Rights Reserved
                  </p>
                  {/* </p> */}
                </div>
                {/* <div className="col-md-4">
            <div className={style.logo}>
              <div className={style.logo__letter}>A</div>
              <div className={style.logo__name}>{logo}</div>
              <div className={style.logo__descr}>{description}</div>
            </div>
          </div> */}
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default connect(mapStateToProps)(Footer)
