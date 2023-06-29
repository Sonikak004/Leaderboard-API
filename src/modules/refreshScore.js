/* eslint-disable import/no-cycle */
import { URL, gameId } from '../index.js';

const scoresList = document.querySelector('#scoresList');

const refreshScore = async () => {
  const response = await fetch(`${URL}/games/${gameId}/scores/`);
  const data = await response.json();

  scoresList.innerHTML = '';

  data.result.forEach((score) => {
    const li = document.createElement('li');
    li.textContent = `${score.user}: ${score.score}`;
    scoresList.appendChild(li);
  });
};

/* eslint-disable import/prefer-default-export */
export { refreshScore };
