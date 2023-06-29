import './style.css';
/* eslint-disable import/no-cycle */
import { refreshScore } from './modules/refreshScore.js';
import { submitScore } from './modules/submitScore.js';

export const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
export const gameId = 'ARAId6sN2LKi2AeYJNFw';

const refresh = document.querySelector('#refreshButton');
const submit = document.querySelector('#submitForm');
refresh.addEventListener('click', refreshScore);
submit.addEventListener('submit', submitScore);
