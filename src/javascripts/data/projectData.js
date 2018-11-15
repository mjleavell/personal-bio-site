import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const loadProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json`)
    .then((result) => {
      const projectObject = result.data;
      const projectArray = [];
      if (projectObject != null) {
        Object.keys(projectObject).forEach((projectId) => {
          const newProject = projectObject[projectId];
          newProject.id = projectId;
          projectArray.push(newProject);
        });
      }
      resolve(projectArray);
    }).catch((err) => {
      reject(err);
    });
});

export default loadProjects;
