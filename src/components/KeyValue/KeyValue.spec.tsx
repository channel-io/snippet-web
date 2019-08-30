/* External dependencies */
import React from 'react'
import { shallow } from 'enzyme'

/* Internal dependencies */
import KeyValue from './KeyValue'

describe('<KeyValue />', () => {
  it('do not render when items is not array', () => {
    expect(shallow(<KeyValue items={null} />).type()).toEqual(null)
    expect(shallow(<KeyValue items={1} />).type()).toEqual(null)
    expect(shallow(<KeyValue items={{}} />).type()).toEqual(null)
    expect(shallow(<KeyValue items={false} />).type()).toEqual(null)
  })

  it('do not render when array length is 0', () => {
    expect(shallow(<KeyValue items={[]} />).type()).toEqual(null)
  })
})
