import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import { Provider } from 'react-redux'

import '../public/normalize.css'
import '../public/style.css'

import preload from '../public/data.json'

import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import store from './store'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>{/* Make redux available inside the app */}
          <div className='app'>
            <Match exactly pattern='/' component={Landing} />
            <Match pattern='/search' component={(props) => <Search shows={preload.shows} {...props} />} />
            <Match pattern='/details/:id'
              component={(props) => {
                const shows = preload.shows.filter(show => props.params.id === show.imdbID)
                return <Details show={shows[0]} {...props} />
              }} />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}

render(<App />, document.getElementById('app'))
