import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import initProjectsView from './javascripts/components/projects';
import initTechView from './javascripts/components/tech';
import chatty from './images/chatty.png';

$('#about-img').attr('src', chatty);

const initApp = () => {
  initProjectsView();
  initTechView();
};

initApp();
