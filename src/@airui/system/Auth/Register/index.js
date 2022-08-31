import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Avatar from 'react-avatar-edit'
import { connect } from 'react-redux'
import { notification, Input, Button, Form, Checkbox, Select } from 'antd'
import { Link } from 'react-router-dom'
import miniLogo from './miniLogo.jpeg'
import style from '../style.module.scss'

const mapStateToProps = ({ user, dispatch }) => ({ user, dispatch })

const Register = ({ dispatch, user }) => {
  const [stepForRegister, setStepForRegister] = useState(1)
  const [formValues, setFormValues] = useState({})
  const [avatarSrc, setAvatarSrc] = useState(null)
  const [avatarPreview, setAvatarPreview] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)

  const onAvatarClose = () => {
    setAvatarPreview(null)
  }

  const onAvatarCrop = preview => {
    setAvatarPreview(preview)
  }

  const onAvatarBeforeFileLoad = elem => {
    if (elem.target.files[0].size > 71680) {
      alert('File is too big!')
      elem.target.value = ''
    }
  }

  const onFinish = values => {
    setFormValues({ ...formValues, ...values })
    if (stepForRegister === 3) {
      if (avatarPreview === null) {
        notification.error({
          message: 'Avatar image',
          description: 'please choose your avatar image',
        })
        return
      }
      formValues.avatar = avatarPreview
      console.log(formValues)
      dispatch({
        type: 'user/REGISTER',
        payload: formValues,
      })
    }
    if (stepForRegister === 1 && values.password !== values.confirmPassword) {
      notification.error({
        message: 'Password dismatch',
        description: 'please confirm the password again',
      })
      return
    }
    setStepForRegister(stepForRegister + 1)
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '89vh' }}>
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
            <span className="mr-2">Already have an account?</span>
            <Link to="/auth/login" className="kit__utils__link font-size-16">
              Sign in
            </Link>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={` ${style.container}`} style={{ width: '500px' }}>
            <div className="text-dark font-size-32 mb-3">Create your account</div>
            <div className="mb-4">
              {stepForRegister === 1 && <p>please input your credentials in the below fields</p>}
              {stepForRegister === 2 && (
                <p>please input address info of yours and select the language you like</p>
              )}
              {stepForRegister === 3 && <p>please choose your avatar image</p>}
            </div>
            <Form
              layout="vertical"
              hideRequiredMark
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="mb-4"
            >
              {stepForRegister === 1 && (
                <>
                  <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your e-mail address' }]}
                  >
                    <Input size="large" placeholder="Email Address" />
                  </Form.Item>
                  <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your user name' }]}
                  >
                    <Input size="large" placeholder="User Name" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password' }]}
                  >
                    <Input.Password size="large" placeholder="Password" />
                  </Form.Item>
                  <Form.Item
                    name="confirmPassword"
                    rules={[{ required: true, message: 'Please input your confirm password' }]}
                  >
                    <Input.Password size="large" placeholder="Confirm Password" />
                  </Form.Item>
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>I agree to receive promotions</Checkbox>
                  </Form.Item>
                </>
              )}
              {stepForRegister === 2 && (
                <>
                  <Form.Item name="phoneNumber">
                    <PhoneInput
                      className="font-size-18"
                      placeholder="Enter phone number"
                      value={phoneNumber}
                      onChange={setPhoneNumber}
                    />
                  </Form.Item>
                  <Form.Item
                    name="zipcode"
                    rules={[{ required: true, message: 'Please input your zip code' }]}
                  >
                    <Input size="large" placeholder="Zip code" />
                  </Form.Item>
                  <Form.Item name="language">
                    <Select size="large" placeholder="Choose preferred language">
                      <Select.Option value="en">English</Select.Option>
                      <Select.Option value="jp">Japanese</Select.Option>
                      <Select.Option value="zh">Chinese</Select.Option>
                      <Select.Option value="ko">Korean</Select.Option>
                    </Select>
                  </Form.Item>
                </>
              )}
              {stepForRegister === 3 && (
                <>
                  <Form.Item name="avatar">
                    <Avatar
                      height={295}
                      onCrop={onAvatarCrop}
                      onClose={onAvatarClose}
                      onBeforeFileLoad={onAvatarBeforeFileLoad}
                      src={avatarSrc}
                    />
                    {avatarPreview && (
                      <div className="text-center mt-2">
                        <img src={avatarPreview} alt="Preview" />
                      </div>
                    )}
                  </Form.Item>
                </>
              )}
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="text-center w-100"
                loading={user.loading}
              >
                <strong>{stepForRegister === 3 ? 'Sign up' : 'Next'}</strong>
              </Button>
              <div style={{ marginTop: '3px' }}>
                <span>By signing in you agree to our Terms and Servoce & Privacy Policy</span>
              </div>
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

export default connect(mapStateToProps)(Register)
