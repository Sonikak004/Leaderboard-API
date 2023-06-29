/* eslint-disable import/no-cycle */
import { URL, gameId } from '../index.js';

const sInput = document.querySelector('#sInput');
const nInput = document.querySelector('#nInput');

const submitScore = async (e) => {
  e.preventDefault();
  const user = nInput.value;
  const score = parseInt(sInput.value, 10);

  const response = await fetch(`${URL}/games/${gameId}/scores/`, {
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

export { submitScore };
