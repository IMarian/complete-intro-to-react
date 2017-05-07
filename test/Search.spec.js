/* globals test expect */

import React from 'react'
// import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import preload from '../public/data.json'

import Search from '../js/Search'
import SearchInput from '../js/SearchInput'
import ShowCard from '../js/ShowCard'

test('Search snapshot test', () => { // snapshot testing
  // const component = renderer.create(<Search />)// render everything in search & go all levels deep to render
  // const tree = component.toJSON()

  const component = shallow(<Search />)// render everything in search & go only 1 level deep
  const tree = shallowToJson(component)

  expect(tree).toMatchSnapshot()
})

test('Search should render a ShowCard for each show', () => {
  const component = shallow(<Search />)

  expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})

test('Search should render a single search input', () => {
  const component = shallow(<Search />)

  expect(component.find(SearchInput).length).toEqual(1)
})

test('Search should render correct amount of shows based on search', () => {
  const searchWord = 'house'
  const searchComponent = shallow(<Search />)
  const inputSearchComponent = searchComponent.find(SearchInput).shallow()

  inputSearchComponent.find('input').simulate('change', {// first trigger the event
    target: {
      value: searchWord
    }
  })

  searchComponent.update()// then update the wrapper component

  const showCount = preload.shows.filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) !== -1).length

  expect(searchComponent.find(ShowCard).length).toEqual(showCount)
})
