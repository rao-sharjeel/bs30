import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'antd'
import { Helmet } from 'react-helmet'
import chairIcon from '../images/chair.jpeg'
import ladyIcon from '../images/lady.jpeg'
import blackShoe from '../images/pic1.jpeg'
import whiteShoew from '../images/show1.jpeg'

const AdsManager = () => {
  const userData = useSelector(state => state.userReducer)
  // console.log(userData.role)

  const dataSource = [
    {
      key: '1',
      product: 'Mike',
      price: 32,
      date: '10/07/22',
      img: chairIcon,
      Running: userData.role === 'admin' && 'Running',
    },

    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: ladyIcon,
      Running: userData.role === 'admin' && 'Stopped',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: blackShoe,
      Running: userData.role === 'admin' && 'Running',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: whiteShoew,
      Running: userData.role === 'admin' && 'Stopped',
    },
    {
      key: '1',
      product: 'Mike',
      price: 32,
      date: '10/07/22',
      img: chairIcon,
      Running: userData.role === 'admin' && 'Stopped',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: ladyIcon,
      Running: userData.role === 'admin' && 'Stopped',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: blackShoe,
      Running: userData.role === 'admin' && 'Stopped',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: whiteShoew,
      Running: userData.role === 'admin' && 'Running',
    },
    {
      key: '1',
      product: 'Mike',
      price: 32,
      date: '10/07/22',
      img: chairIcon,
      Running: userData.role === 'admin' && 'Running',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: ladyIcon,
      Running: userData.role === 'admin' && 'Stopped',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: blackShoe,
      Running: userData.role === 'admin' && 'Stopped',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: whiteShoew,
      Running: userData.role === 'admin' && 'Stopped',
    },
    {
      key: '1',
      product: 'Mike',
      price: 32,
      date: '10/07/22',
      img: chairIcon,
      Running: userData.role === 'admin' && 'Stopped',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: ladyIcon,
      Running: userData.role === 'admin' && 'Stopped',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: blackShoe,
      Running: userData.role === 'admin' && 'Stopped',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: whiteShoew,
      Running: userData.role === 'admin' && 'Stopped',
    },
  ]

  const columns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'name',
      render: (text, data) => (
        <div>
          <img src={data.img} alt="asd" width={20} height={20} style={{ marginRight: '10px' }} />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Add Price',
      dataIndex: 'price',
      key: 'age',
    },
    {
      title: 'End Date',
      dataIndex: 'date',
      key: 'address',
    },

    {
      title: userData.role === 'admin' && 'Situation',
      dataIndex: 'Situation',
      key: 'situation',
      render: (text, data) =>
        userData.role === 'admin' && (
          <div>
            <span
              style={{
                padding: '6px 15px',
                backgroundColor: data.Running === 'Running' ? '#c6e9c6' : '#ecc3c3',
                borderRadius: '8px',
                color: data.Running === 'Running' ? 'green' : 'red',
              }}
            >
              {data.Running}
            </span>
          </div>
        ),
    },
  ]

  return (
    <div>
      <Helmet title="Purchase History" />
      {/* <div className="air__utils__heading">
        <strong>Ecommerce: Orders</strong>
      </div> */}
      <div className="card">
        {/* <div className="card-header card-header-flex">
          <div className="d-flex flex-column justify-content-center mr-auto">
            <h5 className="mb-0">Latest Orders</h5>
          </div>
          <div className="d-flex flex-column justify-content-center">
            <a className="btn btn-primary" href="#" onClick={e => e.preventDefault()}>
              New Order
            </a>
          </div>
        </div> */}
        <div className="card-body">
          <div className="text-nowrap" style={{ width: '800px', border: '1px solid lightgray' }}>
            <Table columns={columns} dataSource={dataSource} showHeader />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdsManager
