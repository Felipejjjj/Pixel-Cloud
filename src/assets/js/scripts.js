
import * as lib from './lib/lib.js'
import games from './models/games.js'
import news from  './models/news.js'

lib.header_link('src/assets/pages/login.html', 'src/assets/pages/profile.html')

document.getElementById('games-container').insertAdjacentHTML('beforeend', games.map(x => lib.games_card(x)).join(''))
document.getElementById('news-container').insertAdjacentHTML('beforeend', news.map(x => lib.news_card(x)).join(''))