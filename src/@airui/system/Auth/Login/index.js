import React from 'react'
import { connect } from 'react-redux'
import { Input, Button, Radio, Form, Tooltip } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import LoginUserAction from 'redux/users/action'
import style from '../style.module.scss'
import loginStyle from './login.module.scss'
import miniLogo from './miniLogo.jpeg'

const mapStateToProps = ({ user, settings, dispatch }) => ({
  dispatch,
  user,
  authProvider: settings.authProvider,
})

const Login = ({ dispatch, user, authProvider }) => {
  const history = useHistory()
  const onFinish = values => {
    if (values.email === 'admin@gmail.com' || values.email === 'user@gmail.com') {
      dispatch(LoginUserAction(values))
      if (values.email === 'user@gmail.com') {
        history.push('/main-page')
      } else if (values.email === 'admin@gmail.com') {
        history.push('/main-page')
        history.push('purchaseHistory')
      }
    } else {
      alert('Invalid Credentials')
    }
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  const changeAuthProvider = value => {
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'authProvider',
        value,
      },
    })
  }

  return (
    <div className={loginStyle.wraper}>
      <div className="d-flex flex-column justify-content-between p-2">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img
              className="logoIconSize"
              src=" resources/images/logo.png"
              alt="logo"
              width={200}
              height={55}
            />
          </div>
          <div>
            <span className="mr-2">Don&#39;t have an account?</span>
            <Link to="/auth/register" className="kit__utils__link font-size-16">
              Sign up
            </Link>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={` ${style.container}`} style={{ width: '500px' }}>
            <div className="text-dark font-size-32 mb-3">Welcome back</div>
            <div className="mb-4">Please fill up the asking credential to log in</div>
            <Form
              layout="vertical"
              hideRequiredMark
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="mb-4"
              initialValues={{ email: 'demo@sellpixels.com', password: 'demo123' }}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your e-mail address' }]}
              >
                <Input size="large" placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password' }]}
              >
                <Input size="large" type="password" placeholder="Password" />
              </Form.Item>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex align-items-center">
                  <input type="Checkbox" style={{ marginRight: '10px' }} />
                  <span>Save my information</span>
                </div>
                <Link to="/auth/forgot-password" className="kit__utils__link font-size-16">
                  Forgot Password?
                </Link>
              </div>
              <Button
                type="primary"
                size="large"
                className="text-center w-100 btn btn-success"
                htmlType="submit"
                loading={user.loading}
              >
                <strong>Sign in</strong>
              </Button>
              <Button
                // type="primary"
                size="large"
                className="text-center w-100 btn "
                htmlType="submit"
                style={{ margin: '10px 0px', border: '0.5px solid lightgray', borderRadius: '7px' }}
                loading={user.loading}
              >
                <strong>Sign in with Google</strong>
              </Button>
              <Button
                // type="primary"
                size="large"
                style={{ border: '0.5px solid lightgray', borderRadius: '7px' }}
                className="text-center w-100   "
                htmlType="submit"
                loading={user.loading}
              >
                <strong>Sign in with Facebook</strong>
              </Button>
            </Form>
          </div>
        </div>
        <div>@ 2022 All Rights Reserved</div>
      </div>
      <div style={{ background: '#154b4d' }} className="d-flex flex-column">
        <div className="d-flex justify-content-end p-2">
          <span style={{ color: 'green' }}>SKIP</span>
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: '100%' }}
        >
          <img src={miniLogo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Login)
