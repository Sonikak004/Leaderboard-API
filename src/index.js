import './style.css';

import { baseURL, gameId } from './modules/API.js';

const scoresList = document.querySelector('#scoresList');

const refreshScore = async () => {
  const response = await fetch(`${baseURL}/games/${gameId}/scores/`);
  const data = await response.json();

  scoresList.innerHTML = '';

  data.result.forEach((score) => {
    const li = document.createElement('li');
    li.textContent = `${score.user}: ${score.score}`;
    scoresList.appendChild(li);
  });
};

const sInput = document.querySelector('#sInput');
const nInput = document.querySelector('#nInput');

const submitScore = async (e) => {
  e.preventDefault();
  const user = nInput.value;
  const score = parseInt(sInput.value, 10);

  const response = await fetch(`${baseURL}/games/${gameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const data = await response.json();
  if (data.result === 'Leaderboard score created correctly.') {
    nInput.value = '';
    sInput.value = '';
  }
};

const refresh = document.querySelector('#refreshButton');
const submit = document.querySelector('#submitForm');
refresh.addEventListener('click', refreshScore);
submit.addEventListener('submit', submitScore);