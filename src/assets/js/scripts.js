import * as lib from './lib/lib.js'
import games from './models/games.js' 

document.getElementById('teste').insertAdjacentHTML(
    'beforeend',
    games.map(game => lib.exibir(game.img)).join('')
);