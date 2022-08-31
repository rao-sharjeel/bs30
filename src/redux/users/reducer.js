import getMenuData from 'services/menu'

const initialState = {
  email: '',
  password: '',
  role: '',
  menuData: [],
}

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'TEST':
      if (payload.email === 'user@gmail.com') {
        return { ...state, ...payload, role: 'user', menuData: getMenuData('user') }
      }
      if (payload.email === 'admin@gmail.com') {
        return { ...state, ...payload, role: 'admin', menuData: getMenuData('admin') }
      }
      return true
    default:
      return state
  }
}

export default UserReducer
