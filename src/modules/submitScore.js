import { URL } from "../index.js";
import { gameId } from "../index.js";

const sInput = document.querySelector('#sInput');
const nInput = document.querySelector('#nInput');

export async function submitScore(e) {
  e.preventDefault();
  const user = nInput.value;
  const score = parseInt(sInput.value);

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
}