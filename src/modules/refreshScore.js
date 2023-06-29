import { URL } from "../index.js";
import { gameId } from "../index.js";

const scoresList = document.querySelector('#scoresList');

export async function refreshScore() {
  const response = await fetch(`${URL}/games/${gameId}/scores/`);
  const data = await response.json();

  scoresList.innerHTML = '';

  data.result.forEach((score) => {
    const li = document.createElement('li');
    li.textContent = `${score.user}: ${score.score}`;
    scoresList.appendChild(li);
  });
}