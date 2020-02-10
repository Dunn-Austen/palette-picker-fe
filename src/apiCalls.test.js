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
    });

    it('should return an error is the Promise is rejected', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ ok: false })
      });

      expect(fetchSingleProject(2)).rejects.toEqual(Error('No project found with that id.'))
    });
  });

  describe('postNewProject', () => {
    let mockProject, mockResponse, mockOptions;

    beforeEach(() => {
      mockProject = {
        title: 'Kitchen'
      };
      mockResponse = {
        id: 100,
        title: 'Kitchen'
      };
      mockOptions = {
        method: 'POST',
        body: JSON.stringify(mockProject),
        headers: {
          "Content-Type": "application/json"
        }
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      });
    });

    it('should call postNewProject with the correact URL and options', () => {
      postNewProject(mockProject);

      expect(window.fetch).toHaveBeenCalledWith(`https://palette-picker-1908.herokuapp.com/api/v1/projects`, mockOptions);
    });

    it('should return newly created project object', () => {
      expect(postNewProject(mockProject)).resolves.toEqual(mockResponse)
    });

    it('should return an error if Promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ ok: false })
      });

      expect(postNewProject(3)).rejects.toEqual(Error('Error submitting project'));
    });
  });

  describe('patchProject', () => {
    let mockPatch, mockResponse, mockOptions;

    beforeEach(() => {
      mockPatch = {
        id: 1,
        title: 'Kitchen'
      };
      mockResponse = {
        id: 1,
        title: 'Kitchen'
      };
      mockOptions = {
        method: "PATCH",
        body: JSON.stringify(mockPatch),
        headers: {
          "Content-Type": "application/json"
        }
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      });
    });

    it('should call patchProject with the correct URL and options', () => {
      patchProject(mockPatch);

      expect(window.fetch).toHaveBeenCalledWith('https://palette-picker-1908.herokuapp.com/api/v1/projects/1', mockOptions);
    });

    it('should return an updated project object', () => {
      expect(patchProject(1)).resolves.toEqual(mockResponse);
    });

    it('should return an error message if the Promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ ok: false })
      });

      expect(patchProject(1)).rejects.toEqual(Error('Error updating project'));
    }) 
  })
})

