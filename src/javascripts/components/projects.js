import $ from 'jquery';
import projectData from '../data/projectData';

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
          <img class="img-fluid rounded mb-3 mb-md-0" src="${project.screenshot}" alt="">
        </a>
      </div>

    </div>
    <hr>`;
  });
  $('#project').html(domString);
};

const initProjectsView = () => {
  projectData.loadProjects().then((projects) => {
    writeProjects(projects);
  }).catch((error) => {
    console.error(error);
  });
};

export default { initProjectsView };
