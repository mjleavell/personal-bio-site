import $ from 'jquery';
import techData from '../data/techData';

const writeTech = (techArr) => {
  let domString = '';
  techArr.forEach((tech) => {
    domString += `
    <div class="col m-2">
        <img class="img-fluid mb-3 mb-md-0 src="${tech.url}" alt="${tech.name}" style="height: 74px; width: 74px;">
    </div>`;
  });
  $('#tech').html(domString);
};

const initTechView = () => {
  techData.loadTech().then((tech) => {
    writeTech(tech);
  }).catch((error) => {
    console.error(error);
  });
};

export default { initTechView };
