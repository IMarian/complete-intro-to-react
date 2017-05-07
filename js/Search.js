import React from 'react'

import preload from '../public/data.json'

import ShowCard from './ShowCard'
import SearchInput from './SearchInput'

class Search extends React.Component {
  constructor () {
    super()

    this.state = {
      searchTerm: ''
    }

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (event) {
    this.setState({// set only data that you want to change & schedule an UI update
      searchTerm: event.target.value
    })// or this.state.searchTerm = event.target.value; this.forceUpdate();
  }

  render () {
    return (
      <div className='search'>
        <header>
          <h1>svideo</h1>
          <SearchInput handleOnChange={this.handleSearchTermChange} inputSearchTerm={this.state.searchTerm} />
        </header>
        <div>
          {preload.shows
                  .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) !== -1)
                  .map(show => <ShowCard key={show.imdbID} {...show} /* or title={show.title}, description={show.description} ... */ />)}
        </div>
      </div>
    )
  }
}

export default Search
