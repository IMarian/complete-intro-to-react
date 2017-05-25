import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { setSearchTerm } from './actionCreators'

class Landing extends React.Component {

  constructor () {
    super()

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (event) {
    this.props.dispatchSetSearchTerm(event.target.value)// this.props.dispatch comes from connect() (can use instead mapDispatchToProps as a 2nd argument to connect)
  }

  render () {
    return (
      <div className='landing'>
        <h1>react</h1>
        <input type='text' value={this.props.searchTerm} onChange={this.handleSearchTermChange} placeholder='search' />
        <Link to='/search'>or browse all</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => { // take only searchTerm from redux state and make it available as a prop (state == the entire redux store)
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearchTerm: (searchTerm) => {
      dispatch(setSearchTerm(searchTerm))
    }
  }
}

Landing.propTypes = {
  searchTerm: PropTypes.string,
  dispatchSetSearchTerm: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
