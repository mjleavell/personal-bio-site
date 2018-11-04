import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import initProjectsView from './javascripts/components/projects';
import initTechView from './javascripts/components/tech';
import canyon from './images/canyon.png';

$('#about-img').attr('src', canyon);

const initApp = () => {
  initProjectsView();
  initTechView();
};

initApp();
