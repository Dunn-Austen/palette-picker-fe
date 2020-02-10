import { fetchAllProjects, fetchSingleProject, postNewProject, patchProject, patchPalette, deletePalette, fetchSinglePalette, fetchAllPalettes, postPalette, deleteProject } from './apiCalls';

describe('apiCalls', () => {
   
  describe('fetchAllProjects', () => {
    let mockResponse;

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
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should call fetch with the correct URL', () => {
      fetchAllProjects();

      expect(window.fetch).toHaveBeenCalledWith('https://palette-picker-1908.herokuapp.com/api/v1/projects');
    });

    it('should return an array of projects', () => {
      expect(fetchAllProjects()).resolves.toEqual(mockResponse);
    });

    it('should return an error message if Promise is rejected', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ ok: false });
      });

      expect(fetchAllProjects()).rejects.toEqual(Error('Uh oh! Something went wrong.'));
    });
  });

  describe('fetchSingleProject', () => {
    let mockResponse;

    beforeEach(() => {
      mockResponse = {
        id: 200,
        title: 'Kitchen'
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    });

    it('should call fetchSingleProject with the correct URL', () => {
      fetchSingleProject(2);

      expect(window.fetch).toHaveBeenCalledWith(`https://palette-picker-1908.herokuapp.com/api/v1/projects/2`)
    });

    it('should return a project object', () => {
      expect(fetchSingleProject(200)).resolves.toEqual(mockResponse);
    })
  })
})

