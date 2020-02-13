import React from 'react';
import { shallow } from 'enzyme';
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
  it('should match the snapshot', () => {
    const mockTitle = 'Kitchen';
    const mockPalettes = [
      {
        id: 1,
        title: 'counter',
        color_1_id: "#eeeeee",
        color_2_id: "#eeeeee",
        color_3_id: "#eeeeee",
        color_4_id: "#eeeeee",
        color_5_id: "#eeeeee",
        project_id: 1
      }
    ];
    const mockUpdateProjects = jest.fn();
    const mockProjects = [
      {
        id: 1,
        title: 'Kitchen'
      }
    ];
    const wrapper = shallow(<ProjectCard 
      title={mockTitle}
      palettes={mockPalettes}
      updateProjects={mockUpdateProjects}
      projects={mockProjects}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
