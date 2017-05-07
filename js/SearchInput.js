import React, { PropTypes } from 'react'

const SearchInput = (props) => (
  <input type='text' value={props.inputSearchTerm} placeholder='Search' onChange={props.handleOnChange} />
)

SearchInput.displayName = 'SearchInput'// always set for stateless components (e.g. istambul requires it)

SearchInput.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  inputSearchTerm: PropTypes.string
}

export default SearchInput
