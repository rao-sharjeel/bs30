import React, { useState } from 'react'

import star from './star-fill.svg'
import style from './review.module.scss'

const Review = () => {
  const [toggle, setToggle] = useState()
  return (
    <div>
      <div className={style.main}>
        {data.map((item, index) => {
          return <p> {item.name}</p>
        })}
      </div>
      <div className={style.cardWraper}>
        <div className={style.head}>
          <div className={style.circle} />
          <p>Rian lon</p>
          <img src={star} alt="star" className={style.star} />
          <img src={star} alt="star" className={style.star} />
          <img src={star} alt="star" className={style.star} />
          <img src={star} alt="star" className={style.star} />
          <img src={star} alt="star" className={style.star} />
          <span style={{ marginLeft: '5px' }}>5.0</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas
          vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum
          quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
        </p>
      </div>
    </div>
  )
}

export default Review

const data = [{ name: 'All Reviews' }, { name: 'From Seller' }, { name: 'From Buyer' }]
