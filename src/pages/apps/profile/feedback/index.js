import React from 'react'
import { Layout, Button } from 'antd'

import sad from './sad.svg'
import style from './feedback.module.scss'

const Feedack = () => {
  return (
    <div className={style.wraper}>
      <div>
        {feedbacks.map(item => {
          return (
            <div
              style={{ display: 'flex', alignItems: 'start', padding: '10px', marginTop: '20px' }}
            >
              <img src={sad} alt="icon" className="mr-4" style={{ marginTop: '6px' }} />
              <div>
                <p style={{ margin: '0px', fontSize: '18px', color: 'black' }}>{item.title}</p>
                <span>{item.desc}</span>
              </div>
            </div>
          )
        })}

        <div style={{ padding: '10px' }}>
          <Button
            block="true"
            type="primary"
            style={{ color: 'white', borderRadius: '8px', width: '200px' }}
          >
            <span style={{ color: 'white' }}>Community Guidelines</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Feedack

const feedbacks = [
  { title: 'Positive Feedback(0)', desc: 'No positive feedback yet you have' },
  { title: 'Positive Feedback(0)', desc: 'No positive feedback yet you have' },
  { title: 'Positive Feedback(0)', desc: 'No positive feedback yet you have' },
  { title: 'Positive Feedback(0)', desc: 'No positive feedback yet you have' },
]
