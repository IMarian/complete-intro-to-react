import React, { PropTypes } from 'react'

class ShowCard extends React.Component {
  render () {
    const { poster, title, year, description } = this.props

    return (
      <div className='show-card'>
        <img src={`/public/img/posters/${poster}`} alt={title} />
        <div>
          <h3>{title}</h3>
          <h4>{year}</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

ShowCard.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  description: PropTypes.string.isRequired
}

export default ShowCard
