"use client"; // Garante que esse componente só rode no lado do cliente
import { useEffect } from "react";
import "@/app/login/login.css"
import header from '@/components/header'
import footer from '@/components/footer'

function LoginCadastro(){
  //----FUNÇÕES----
  useEffect(() => {
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
          window.location.href= '/perfil'
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
              window.location.href= '/perfil'
          }
          else{
              exibir_erro('err_login', 'nome de usuário ou senha incorreto(s)')
          }
      }
    })
  })


  return (
    <div>
      {header()}

      <main>
        <section id="login" className="container">
          <h1 id="teste"></h1>
          <h1>Login</h1>
          <div className="form">
            <form method="post" action="">
              <input id="login_nome_usuario" type="text" placeholder="digite seu nome de usuário" />
              <p id="err1"></p> <br />
              <input id="login_senha" type="password" placeholder="digite sua senha" />
              <p id="err2"></p> <br />
            </form>
            <button id="logar">ENTRAR NA CONTA</button>
            <p id="err_login"></p>
          </div>
        </section>

        <section id="cadastro" className="container">
          <h1>Cadastro</h1>
          <div className="form">
            <form method="post" action="">
              <input id="nome_u" type="text" placeholder="digite seu nome de usuário" />
              <p id="err3"></p> <br />
              <input id="nome" type="text" placeholder="digite seu nome" />
              <p id="err4"></p> <br />
              <input id="datanasc" type="date" placeholder="data nasc" />
              <p id="err5"></p> <br />
              <input id="telefone" type="text" placeholder="digite seu telefone" />
              <p id="err6"></p> <br />
              <input id="email" type="text" placeholder="digite seu E-MAIL" />
              <p id="err7"></p> <br />
              <input type="password" placeholder="digite uma senha" maxLength="6" />
              <p id="err8"></p> <br />
              <input id="senha" type="password" placeholder="confirme sua senha" maxLength="6" />
              <p id="err9"></p> <br />
              {/* <button type="submit">CRIAR CONTA</button> */}
            </form>
            <button id="cadastrar">CADASTRAR</button>
          </div>
        </section>
      </main> <br /> <br />

      {footer()}
    </div>

  );
};

export default LoginCadastro;