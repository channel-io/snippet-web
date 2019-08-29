/* External dependencies */
import React from 'react'
import { shallow } from 'enzyme'

/* Internal dependencies */
import Image from './Image'

describe('<Image />', () => {
  it('do not render when url prop is not string', () => {
    expect(shallow(<Image url={null} />).type()).toEqual(null)
    expect(shallow(<Image url={1} />).type()).toEqual(null)
    expect(shallow(<Image url={{}} />).type()).toEqual(null)
    expect(shallow(<Image url={[]} />).type()).toEqual(null)
  })
})
