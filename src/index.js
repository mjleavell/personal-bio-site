import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import projectsView from './javascripts/components/projects';

$('#about').html('jQuery test');

const initApp = () => {
  projectsView.initProjectsView();
};

initApp();
