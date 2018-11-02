import 'bootstrap';
import './index.scss';
import projectsView from './javascripts/components/projects';
import techView from './javascripts/components/tech';

const initApp = () => {
  projectsView.initProjectsView();
  techView.initTechView();
};

initApp();
