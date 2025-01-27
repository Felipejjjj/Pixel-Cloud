export function exibir(link) {
    return `<img src="${link}" alt="Game Image">`;
};

export function converter_link_imagem(img){
    return '../' + img.substring(11)
}

export function header_link(link_login, link_perfil){
    if (localStorage.length === 0 || localStorage.getItem('user') === 'none') {
        document.getElementById('header_link').insertAdjacentHTML('beforeend', `<a class="rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow" href="${link_login}">Login</a>`)
    } 
    else {
        let userInstance = localStorage.getItem('user')
        let user = JSON.parse(localStorage.getItem(userInstance))
        document.getElementById('header_link').insertAdjacentHTML('beforeend', `<a class="rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow" href="${link_perfil}"> <i class="fa-solid fa-user"></i> ${user.nome_usuario} </a>`)
    }
}

export function news_card(news){
    let card = 
    `
        <div class="card lg:card-side bg-black shadow-xl news_card" style="width: 50rem;">
        <figure>
            <img src=${news.img} alt="${news.name}"> 
        </figure>
        <div class="card-body">
            <h2 class="card-title" style="width: 15rem; font-size: 1.5rem;"> ${news.titulo} </h2> <br>
            <p style="width: 15rem; font-size: 1rem;"> ${news.subtitulo} </p> <br>
            <div class="card-actions justify-end">
            <button class="block w-full rounded bg-purple-600 p-4 text-sm font-medium transition hover:scale-105" href="${news.link}">saiba mais</button>
            </div>
        </div>
        </div>

        <br> <br>
    `
    return card
}