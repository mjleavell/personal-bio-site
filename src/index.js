import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import initProjectsView from './javascripts/components/projects';
import initTechView from './javascripts/components/tech';
import wedcirc from './images/wedcirc.png';

$('#about-img').attr('src', wedcirc);

const initApp = () => {
  initProjectsView();
  initTechView();
};

initApp();
