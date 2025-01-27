//elemento dinâmico botão de login
import * as lib from './lib/lib.js'
// if (localStorage.length === 0 || localStorage.getItem('user') === 'none') {
//     document.getElementById('header_link').insertAdjacentHTML('beforeend', '<a class="rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow" href="src/assets/pages/login.html">Login</a>')
// } 
// else {
//     let userInstance = localStorage.getItem('user')
//     let user = JSON.parse(localStorage.getItem(userInstance))
//     document.getElementById('header_link').insertAdjacentHTML('beforeend', `<a class="rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow" href="src/assets/pages/profile.html"> <i class="fa-solid fa-user"></i> ${user.nome_usuario} </a>`)
// }

lib.header_link()