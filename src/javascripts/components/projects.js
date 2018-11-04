import $ from 'jquery';
import loadProjects from '../data/projectData';

const writeProjects = (projects) => {
  let domString = '';
  projects.forEach((project) => {
    domString += `
    <div class="row projects">
      <div class="col-md-5">
        <h3>${project.title}</h3>
        <p><strong>Technologies Used:</strong> ${project.technologiesUsed}</p>
        <p>${project.description}</p>
        <a class="btn btn-light" href="${project.githubUrl}" target=_blank>View on Github</a>
        <a class="btn btn-light" href="${project.url}" target=_blank>View Live Demo</a>
      </div>
      <div class="col-md-7 p-2">
        <a href="${project.githubUrl}" target="_blank">
          <img class="img-fluid mb-3 mb-md-0" src="${project.screenshot}" style="border: 1px outset black;" alt="">
        </a>
      </div>
    </div>
    <hr>`;
  });
  $('#project').html(domString);
};

const initProjectsView = () => {
  loadProjects().then((data) => {
    console.log(data.data);
    writeProjects(data.data);
  }).catch((error) => {
    console.error(error);
  });
};

export default initProjectsView;
