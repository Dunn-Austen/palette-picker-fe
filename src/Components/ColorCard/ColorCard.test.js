import React from 'react';
import { shallow } from 'enzyme';
import ColorCard from './ColorCard';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<ColorCard />);

    expect(wrapper).toMatchSnapshot();
  });
})
