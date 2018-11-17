import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import 'bootstrap';
import './index.scss';
import initProjectsView from './javascripts/components/projects';
import initTechView from './javascripts/components/tech';
import displayAbout from './javascripts/components/aboutMe';
import displayNavbar from './javascripts/components/navbar';
import displayContact from './javascripts/components/contact';

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  displayNavbar();
  displayAbout();
  initProjectsView();
  initTechView();
  displayContact();
};

initApp();
