//----FUNÇÕES----
function verificacao(input, index) {
    let mensagemErro = '';
    
    //erro de campo vazio
    if(input.value === ''){
        mensagemErro = 'este campo é obrigatório';
        error = true
    }

    //erro de data
    if(index === inputs.length - 5){
        const data = new Date(input.value);
        const ano = data.getFullYear();
            
        if (ano < 1900 || ano > 2020) {
            mensagemErro = 'data de nascimento inválida';
            error = true
        } 
    }
    
    //erro de senhas diferentes
    if(index === inputs.length - 1 && input.value !== inputs[index - 1].value){
        mensagemErro = 'as senhas são diferentes';
        error = true
    }
    
    return mensagemErro
}

function exibir_erro(id, message){
    document.getElementById(`${id}`).innerText = message
}

//----PROGRAMA PRINCIPAL----

const inputs = document.querySelectorAll('input')
let error = false //variável para testar se há erros nos formulários

//verifica erros durante o preenchimento do formulário
inputs.forEach((input, index) => {
    error = false
    const errorId = `err${index + 1}`
    input.addEventListener('blur', function () {
        exibir_erro(errorId, verificacao(input, index))
    })
})

//cadastra o usuário
document.getElementById('cadastrar').addEventListener('click', function() {
    //verifica erros ao clicar no botão de cadastro
    inputs.forEach((input,index) => {
        error = false
        const errorId = `err${index + 1}`
        if(index > 1){
            exibir_erro(errorId, verificacao(input, index))
        }
    })
    //faz o cadastro do usuário, caso não haja erros
    if (!error){
        const usuario = 
        {
            nome_usuario: document.getElementById('nome_u').value,
            nome: document.getElementById('nome').value,
            data: document.getElementById('datanasc').value,
            telefone: document.getElementById('telefone').value,
            email: document.getElementById('email').value,
            senha: document.getElementById('senha').value,
        }
        localStorage.setItem(`${usuario.nome_usuario}`, JSON.stringify(usuario))
        localStorage.setItem('user', `${usuario.nome_usuario}`)
        window.location.href= 'profile.html'
    }
})

//faz login
document.getElementById('logar').addEventListener('click', function() {
    //verifica erros ao clicar no botão de cadastro
    console.log('clicou')
    inputs.forEach((input,index) => {
        error = false
        const errorId = `err${index + 1}`
        if(index < 2){
            exibir_erro(errorId, verificacao(input, index))
        }
    })
    // faz o cadastro do usuário, caso não haja erros
    if (!error){
        const nome = document.getElementById('login_nome_usuario').value
        const senha = document.getElementById('login_senha').value
        const usuario = JSON.parse(localStorage.getItem(`${nome}`))
        if (nome === usuario.nome_usuario && senha === usuario.senha){
            localStorage.setItem('user', `${usuario.nome_usuario}`)
            window.location.href= 'profile.html'
        }
        else{
            exibir_erro('err_login', 'nome de usuário ou senha incorreto(s)')
        }
    }
})