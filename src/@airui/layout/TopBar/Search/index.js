import React, { useRef, useState, useEffect } from 'react'
import { injectIntl } from 'react-intl'
import { Dropdown } from 'antd'
import PerfectScrollbar from 'react-perfect-scrollbar'
import List1 from '@kit/widgets/Lists/1'
import styles from './style.module.scss'

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

const Search = ({ intl: { formatMessage }, setOpenSearchBox, openSearchBox }) => {
  const ref = useRef(null)

  useOutsideAlerter(ref, () => setOpenSearchBox(false))

  // useEffect(() => {
  //   document.addEventListener('click', handleClick, true)
  // }, [])

  // const handleClick = event => {
  //   if (refOne.current && !refOne.current.contains(event.target)) {
  //     setOpenSearchBox(false)
  //   } else {
  //     setOpenSearchBox(true)
  //   }
  // }
  const menu = (
    <React.Fragment>
      {/* <div className="card air__utils__shadow width-300">
        <div className="card-body pt-3 pb-3 pl-3 pr-1 height-400">
          <PerfectScrollbar>
            <List1 />
          </PerfectScrollbar>
        </div>
      </div> */}
    </React.Fragment>
  )
  return openSearchBox ? (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
      <div
        ref={ref}
        className={styles.searchContainer}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        {/* <i className={`${styles.searchIcon} fe fe-search`} /> */}
        <input
          className={styles.searchInput}
          type="text"
          style={{ width: '80vw', backgroundColor: '#154b4d', border: 'none' }}
          placeholder="Search"
        />
        <span style={{ color: '#1cd91c' }}>Search Now</span>
      </div>
    </Dropdown>
  ) : (
    <div onClick={() => setOpenSearchBox(true)} aria-hidden="true">
      <i className={` fe fe-search`} style={{ color: 'white', fontSize: '18px' }} />
    </div>
  )
}

export default injectIntl(Search)
