import "@/app/login/login.css"
import header from '@/components/header'
import footer from '@/components/footer'

function LoginCadastro(){
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