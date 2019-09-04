/* External dependencies */
import React from 'react'
import { shallow } from 'enzyme'

/* Internal dependencies */
import ListItem from './ListItem'

describe('<ListItem />', () => {
  it('do not render when title prop is not string or empty', () => {
    expect(shallow(<ListItem title={null} />).type()).toEqual(null)
  })
})
