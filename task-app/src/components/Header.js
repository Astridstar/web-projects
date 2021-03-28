import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    /* Styling Method one - inline
    <header>
      <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1>
    </header>
    */
    /* Styling Method Two - variable 
    <header>
      <h1 style={headingStyle}>{title}</h1>
    </header>
    */

    <header className='header'>
      <h1>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </header>
  )
}

Header.defaultProps = {
  title: 'Default Header Text',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

/* Styling Method Two - variable */
// CSS in JS
// const headingStyle = {
//   color: 'white',
//   backgroundColor: 'green',
// }

export default Header
