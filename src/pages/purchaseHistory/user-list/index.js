import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'antd'
import { Helmet } from 'react-helmet'
import chairIcon from '../images/chair.jpeg'
import ladyIcon from '../images/lady.jpeg'
import blackShoe from '../images/pic1.jpeg'
import whiteShoew from '../images/show1.jpeg'

const UserList = () => {
  const userData = useSelector(state => state.userReducer)
  // console.log(userData.role)

  const dataSource = [
    {
      key: '1',
      product: 'Mike',
      price: 32,
      date: '10/07/22',
      img: chairIcon,
      DeleteUSer: 'Delete user',
    },

    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: ladyIcon,
      DeleteUSer: 'Delete user',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: blackShoe,
      DeleteUSer: 'Delete user',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: whiteShoew,
      DeleteUSer: 'Delete user',
    },
    {
      key: '1',
      product: 'Mike',
      price: 32,
      date: '10/07/22',
      img: chairIcon,
      DeleteUSer: 'Delete user',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: ladyIcon,
      DeleteUSer: 'Delete user',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: blackShoe,
      DeleteUSer: 'Delete user',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: whiteShoew,
      DeleteUSer: 'Delete user ',
    },
    {
      key: '1',
      product: 'Mike',
      price: 32,
      date: '10/07/22',
      img: chairIcon,
      DeleteUSer: 'Delete user',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: ladyIcon,
      DeleteUSer: 'Delete user',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: blackShoe,
      DeleteUSer: 'Delete user',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: whiteShoew,
      DeleteUSer: 'Delete user',
    },
    {
      key: '1',
      product: 'Mike',
      price: 32,
      date: '10/07/22',
      img: chairIcon,
      DeleteUSer: 'Delete user',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: ladyIcon,
      DeleteUSer: 'Delete user',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: blackShoe,
      DeleteUSer: 'Delete user',
    },
    {
      key: '2',
      product: 'John',
      price: 42,
      date: '10/07/22',
      img: whiteShoew,
      DeleteUSer: 'Delete user',
    },
  ]

  const columns = [
    {
      title: 'User',
      dataIndex: 'product',
      key: 'name',
      render: (text, data) => (
        <div className="d-flex">
          <div
            style={{
              marginRight: '10px',
              width: '30px',
              height: '30px',
              borderRadius: '3px',
              backgroundColor: 'pink',
            }}
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'price',
      key: 'age',
    },

    {
      title: 'Action',
      dataIndex: 'Situation',
      key: 'situation',
      render: (text, data) =>
        userData.role === 'admin' && (
          <div>
            <span
              style={{
                padding: '6px 20px',
                backgroundColor: '#24ab24',
                borderRadius: '8px',
                color: 'white',
              }}
            >
              {data.DeleteUSer}
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

export default UserList
