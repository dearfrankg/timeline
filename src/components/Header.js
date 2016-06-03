import React from 'react'
import FilterLink from 'containers/FilterLink'

const Header = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_AVERAGE'>
      Average
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_LIKED'>
      Liked
    </FilterLink>
  </p>
)

export default Header
