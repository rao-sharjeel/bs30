export default function getMenuData(role) {
  if (role === 'user') {
    return [
      {
        category: true,
        title: 'General',
      },
      {
        title: 'Homes',
        key: 'home',
        icon: 'fe fe-home',
        url: '/main-page',
      },
      {
        title: 'Categories',
        key: 'categories',
        icon: 'fe fe-layout',
        url: '/category',
      },
      {
        title: 'Chat',
        key: 'chat',
        icon: 'fe fe-message-square',
        url: '/chat',
      },
      {
        category: true,
        title: 'PRODUCTS',
      },
      {
        title: 'Listings',
        key: 'listings',
        icon: 'fe fe-server',
        url: '/listings',
      },
      {
        title: 'Purchase History',
        key: 'purchase_history',
        icon: 'fe fe-gift',
        url: '/purchaseHistory',
      },
      {
        title: 'Favorites',
        key: 'favorites',
        icon: 'fe fe-heart',
        url: '/favorites',
      },
      {
        isSellButton: true,
        title: 'Sell now',
        url: '/sell',
      },
      {
        category: true,
        title: 'UTILITIS',
      },
      {
        title: 'My Profile',
        key: 'myprofile',
        icon: 'fe fe-user',
        url: '/apps/profile',
      },
      {
        title: 'Settings',
        key: 'settings',
        icon: 'fe fe-settings',
        url: '/ui-kits/bootstrap',
      },
    ]
  }
  if (role === 'admin') {
    return [
      {
        category: true,
        title: 'General',
      },
      {
        title: 'Order List',
        key: 'home',
        icon: 'fe fe-home',
        url: '/purchaseHistory',
      },
      {
        title: 'User List',
        key: 'categories',
        icon: 'fe fe-layout',
        url: '/user-list',
      },
      {
        title: 'Ads Manager',
        key: 'chat',
        icon: 'fe fe-message-square',
        url: '/ads-manager',
      },
    ]
  }
  return []
}
