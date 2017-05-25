import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class ShowCard extends React.Component {
  render () {
    const { poster, title, year, description } = this.props

    return (
      <Link to={`/details/${this.props.imdbID}`}>
        <div className='show-card'>
          <img src={`/public/img/posters/${poster}`} alt={title} />
          <div>
            <h3>{title}</h3>
            <h4>{year}</h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    )
  }
}

ShowCard.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  imdbID: PropTypes.string,
  description: PropTypes.string.isRequired
}

export default ShowCard
