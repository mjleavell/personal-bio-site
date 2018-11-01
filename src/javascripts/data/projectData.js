import $ from 'jquery';

const loadProjects = () => {
  const projectsPromise = new Promise((resolve, reject) => {
    $.get('http://localhost:3003/projects')
      .done((data) => {
        resolve(data);
      }).fail((error) => {
        reject(error);
      });
  });
  return projectsPromise;
};

export default { loadProjects };
