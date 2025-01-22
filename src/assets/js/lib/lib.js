export function exibir(link) {
    return `<img src="${link}" alt="Game Image">`;
};

export function converter_link_imagem(img){
    return '../' + img.substring(11)
}