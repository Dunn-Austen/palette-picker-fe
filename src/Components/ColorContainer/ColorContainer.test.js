import React from 'react';
import { shallow } from 'enzyme';
import ColorContainer from './ColorContainer';

describe('App', () => {
  it('should match the snapshot', () => {
    const mockPaletteColors = {
      paletteColor_1: '#444443',
      paletteColor_2: '#444443',
      paletteColor_3: '#444443',
      paletteColor_4: '#444443',
      paletteColor_5: '#444443'
    };
    const mockIsSavedStatuses = {
      isSaved_1: false,
      isSaved_2: false,
      isSaved_3: false,
      isSaved_4: false,
      isSaved_5: false
    };
    const mockSetIsSavedFunctions= jest.fn()
    const wrapper = shallow(<ColorContainer 
      paletteColors={mockPaletteColors}
      isSavedStatuses = {mockIsSavedStatuses}
      setIsSavedFunctions={mockSetIsSavedFunctions}
    />);

    expect(wrapper).toMatchSnapshot();
  });
})
