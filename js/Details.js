import React, { PropTypes } from 'react'
import Header from './Header'
import axios from 'axios'

class Details extends React.Component {

  constructor () {
    super()

    this.state = {
      omdbData: {}
    }
  }

  componentDidMount () {
    axios
      .get(`http://www.omdbapi.com/?i=${this.props.show.imdbID}`)
      .then(response => {
        this.setState({
          omdbData: response.data
        })
      })
      .catch(error => console.error('axios error', error))
  }

  render () {
    const { title, description, year, poster, trailer } = this.props.show
    let rating

    if (this.state.omdbData.imdbRating) {
      rating = <h3>{this.state.omdbData.imdbRating}</h3>
    } else {
      rating = <img src='/public/img/loading.png' alt='loading indicator' />
    }

    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
          <img src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showInfo=0`} frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
}

Details.propTypes = {
  show: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    trailer: PropTypes.string,
    description: PropTypes.string,
    imdbID: PropTypes.string
  })
}

export default Details
