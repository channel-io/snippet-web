/* External dependencies */
import React from 'react'
import { shallow } from 'enzyme'

/* Internal dependencies */
import ListItem from './ListItem'

describe('<ListItem />', () => {
  it('do not render when title id is not string or empty', () => {
    expect(shallow(<ListItem />).type()).toEqual(null)
    expect(shallow(<ListItem id="" />).type()).toEqual(null)
  })

  it('do not render when title prop is not string or empty', () => {
    expect(shallow(<ListItem id="1" title={null} />).type()).toEqual(null)
  })
})
