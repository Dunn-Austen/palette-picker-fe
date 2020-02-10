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

export const postNewProject = () => {
  
}

export const patchProject = () => {

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
