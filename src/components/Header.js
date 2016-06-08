import React from 'react'
import Link from 'containers/Link'

const Header = () => (
  <p>
    Show:
    {' '}
    <Link filter='SHOW_ALL'>
      All
    </Link>
    {', '}
    <Link filter='SHOW_LIKED'>
      Liked
    </Link>
  </p>
)

export default Header
