export const fetchAllProjects = () => {
  return fetch('https://palette-picker-1908.herokuapp.com/api/v1/projects')
    .then(res => {
      if (!res.ok) throw Error('Uh oh! Something went wrong.');
      return res.json();
    });
}

export const fetchSingleProject = (id) => {
  return fetch(`https://palette-picker-1908.herokuapp.com/api/v1/projects/${id}`)
    .then(res => {
      if (!res.ok) throw Error('No project found with that id.')
      return res.json();
    })
}

export const postNewProject = (project) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(project),
    headers: {
      "Content-Type": "application/json"
    }
  };
  
  return fetch(`https://palette-picker-1908.herokuapp.com/api/v1/projects`, options)
    .then(res => {
      if (!res.ok) throw Error('Error submitting project')
      return res.json();
    })
}

export const patchProject = (project) => {
  const { id } = project;
  const options = {
    method: "PATCH",
    body: JSON.stringify(project),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(`https://palette-picker-1908.herokuapp.com/api/v1/projects/${id}`, options)
    .then(res => {
      if (!res.ok) throw Error('Error updating project')
      return res.json()
    })
}

export const patchPalette = () => {

}

export const deletePalette = () => {

}

export const fetchSinglePalette = () => {

}

export const fetchAllPalettes = () => {

}

export const postPalette = () => {

}

export const deleteProject = () => {

}
