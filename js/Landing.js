import React from 'react'
import { Link } from 'react-router'

class Landing extends React.Component {
  render () {
    return (
      <div className='landing'>
        <h1>react</h1>
        <input type='text' placeholder='search' />
        <Link to='/search'>or browse all</Link>
      </div>
    )
  }
}

export default Landing
