import { fetchAllProjects, fetchSingleProject, postNewProject, patchProject, patchPalette, deletePalette, fetchSinglePalette, fetchAllPalettes, postPalette, deleteProject } from './apiCalls';

descrive('apiCalls', () => {
   
  describe('fetchAllProjects', () => {
    let mockResponse

    beforeEach(() => {
      mockResponse = {
        projects: [
          {
            id: 1, 
            title: "Kitchen"
          }, 
          {
            id: 2, 
            title: "Bedroom"
          }
        ]
      };
      window.fetch = jest.fn().mockImplementaion(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResopnse)
        });
      });
    });

    it('should call fetch with the correct URL', () => {
      fetchAllProjects();

      expect(window.fetch).toHaveBeenCalledWith('https://palette-picker-1908.herokuapp.com/api/v1/projects');
    })
  })
})

