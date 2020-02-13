import React from 'react';
import { shallow } from 'enzyme';
import PaletteCard from './PaletteCard';

describe('PaletteCard', () => {
  it('should match the snapshot', () => {
    const mockUpdateProjects = jest.fn();
    const mockProjects = [
      {
        id: 1,
        title: 'Kitchen'
      }
    ];
    const mockId = 1;
    const mockTitle = 'wall';
    const mockProject_id = 23;
    const mockColor_1_id = '#bbbd33';
    const mockColor_2_id = '#bbbd33';
    const mockColor_3_id = '#bbbd33';
    const mockColor_4_id = '#bbbd33';
    const mockColor_5_id = '#bbbd33';
    const wrapper = shallow(<PaletteCard 
      updateProjects={mockUpdateProjects}
      projects={mockProjects}
      id={mockId}
      title={mockTitle}
      project_id={mockProject_id}
      color_1_id={mockColor_1_id}
      color_2_id={mockColor_2_id}
      color_3_id={mockColor_3_id}
      color_4_id={mockColor_4_id}
      color_5_id={mockColor_5_id}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
