import React from 'react';
import { shallow } from 'enzyme';
import SaveProjectForm from './SaveProjectForm';

describe('SaveProjectForm', () => {
  it('should match the snapshot', () => {
    const mockProjects = [
      {
        id: 1,
        title: 'kitchen'
      }
    ];
    const mockAddProject = jest.fn();

    const wrapper = shallow(<SaveProjectForm 
      projects={mockProjects}
      addProject={mockAddProject}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
