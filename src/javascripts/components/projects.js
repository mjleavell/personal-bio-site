import $ from 'jquery';
import projectData from '../data/projectData';

const writeProjects = (projects) => {
  let domString = '';
  projects.forEach((project) => {
    domString += `
    <div class="row projects">
      <div class="col-md-7">
        <h3 style="width: 700px; height: 300px;">Future screenshot here</h3>
        <p>width: 700px; height: 300px</p>
      </div>
      <div class="col-md-5">
        <h3>${project.title}</h3>
        <p><strong>Technologies Used:</strong> ${project.technologiesUsed}</p>
        <p>${project.description}</p>
        <a class="btn btn-light" href="${project.githubUrl}" target=_blank>View Project on Github</a>
        <a class="btn btn-light" href="${project.url}" target=_blank>View Live Project</a>
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
