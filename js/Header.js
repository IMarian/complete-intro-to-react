import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { setSearchTerm } from './actionCreators'
import SearchInput from './SearchInput'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (event) {
    this.props.dispatchSetSearchTerm(event.target.value)
  }

  render () {
    let utilSpace

    if (this.props.showSearch) {
      utilSpace = <SearchInput handleOnChange={this.handleSearchTermChange} inputSearchTerm={this.props.searchTerm} />
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }

    return (
      <header>
        <h1>
          <Link to='/'>
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchSetSearchTerm: (searchTerm) => dispatch(setSearchTerm(searchTerm))
  }
}

Header.propTypes = {
  dispatchSetSearchTerm: PropTypes.func,
  showSearch: PropTypes.bool,
  searchTerm: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
