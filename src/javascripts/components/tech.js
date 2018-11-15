import $ from 'jquery';
import loadTech from '../data/techData';

const writeTech = (techArr) => {
  let domString = '';
  techArr.forEach((tech) => {
    domString += `
    <div class="col-md-2 m-2 text-center">
        <img class="mb-3 mb-md-0" src="${tech.techUrl}" alt="${tech.title}" style="width: 64px; height: 64px">
    </div>`;
  });
  $('#tech').html(domString);
};

const initTechView = () => {
  loadTech().then((data) => {
    console.log(data.data);
    writeTech(data.data);
  }).catch((error) => {
    console.error(error);
  });
};

export default initTechView;
