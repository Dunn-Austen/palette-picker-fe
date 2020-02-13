import React from 'react';
import { shallow } from 'enzyme';
import SavePaletteForm from './SavePaletteForm';

describe('SavePaletteForm', () => {
  it('should match the snapshot', () => {
    const mockProjects = [
      {
        id: 1,
        title: 'kitchen'
      }
    ];
    const mockUpdateProjects = jest.fn();
    const mockPaletteColors = {
      paletteColor_1: '#1223456',
      paletteColor_2: '#1223456',
      paletteColor_3: '#1223456',
      paletteColor_4: '#1223456',
      paletteColor_5: '#1223456',
    };

    const wrapper = shallow(<SavePaletteForm 
      projects={mockProjects}
      updateProjects={mockUpdateProjects}
      paletteColors={mockPaletteColors}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
