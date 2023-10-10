const nav_menus_list = [
  {
    link: '/',
    title: 'Home',
  },

  {
    link: '/about',
    title: 'About Us',
    
  },
  {
    link: '/shop',
    title: 'Shop',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/shop', title: 'B2C' },
      { link: '/b2bregistration', title: 'B2B' },
      { link: '/retail', title: 'Retail' },
      // { link: '/wishlist', title: 'Wishlist' },
      // { link: '/cart', title: 'Cart' },
      // { link: '/checkout', title: 'Checkout' },
    ]
  },
  {
    link: '/certifications',
    title: 'Certifications',
    
  },
  
 
  {
    link: '/contact',
    title: 'Contact',
  },
]

export default nav_menus_list;