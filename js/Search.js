import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import ShowCard from './ShowCard'
import Header from './Header'

class Search extends React.Component {
  // handleSearchTermChange (event) {
  //   this.setState({// set only data that you want to change & schedule an UI update
  //     searchTerm: event.target.value
  //   })// or this.state.searchTerm = event.target.value; this.forceUpdate();
  // }

  render () {
    return (
      <div className='search'>
        <Header showSearch />
        <div>
          {this.props.shows
                  .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) !== -1)
                  .map(show => <ShowCard key={show.imdbID} {...show} /* or title={show.title}, description={show.description} ... */ />)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm
  }
}

Search.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })),
  searchTerm: PropTypes.string
}

export default connect(mapStateToProps)(Search)
