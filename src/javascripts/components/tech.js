import $ from 'jquery';
import loadTech from '../data/techData';

const writeTech = (techArr) => {
  let domString = '';
  techArr.forEach((tech) => {
    domString += `
    <div class="col-md-1 m-4">
        <img class="mb-3 mb-md-0" src="${tech.techUrl}" alt="${tech.title}" style="width: 64px; height: 64px">
    </div>`;
  });
  $('#tech').html(domString);
};

const initTechView = () => {
  loadTech().then((data) => {
    console.log(data);
    writeTech(data);
  }).catch((error) => {
    console.error(error);
  });
};

export default initTechView;
