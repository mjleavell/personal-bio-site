import $ from 'jquery';
import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import 'bootstrap';
import './index.scss';
import initProjectsView from './javascripts/components/projects';
import initTechView from './javascripts/components/tech';
import wedcirc from './images/wedcirc.png';

$('#about-img').attr('src', wedcirc);

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  initProjectsView();
  initTechView();
};

initApp();
