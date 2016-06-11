import React from 'react'
import Link from 'containers/Link'

const Filter = () => (
  <div>
    Show:
    {' '}
    <Link filter='SHOW_ALL'>
      All
    </Link>
    {', '}
    <Link filter='SHOW_LIKED'>
      Liked
    </Link>
  </div>
)

export default Filter
