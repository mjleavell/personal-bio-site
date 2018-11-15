import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const loadTech = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/tech.json`)
    .then((result) => {
      const techObject = result.data;
      const techArray = [];
      if (techObject != null) {
        Object.keys(techObject).forEach((techId) => {
          const newTech = techObject[techId];
          newTech.id = techId;
          techArray.push(newTech);
        });
      }
      resolve(techArray);
    }).catch((err) => {
      reject(err);
    });
});

export default loadTech;
