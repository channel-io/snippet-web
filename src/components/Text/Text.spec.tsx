/* External dependencies */
import React from 'react'
import { shallow } from 'enzyme'

/* Internal dependencies */
import Text from './Text'

describe('<Text />', () => {
  it('do not render when text prop is not string or number', () => {
    expect(shallow(<Text text={null} />).type()).toEqual(null)
    expect(shallow(<Text text={{}} />).type()).toEqual(null)
    expect(shallow(<Text text={[]} />).type()).toEqual(null)
  })
})
