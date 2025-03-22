import '@/app/styles.css'
import header from '@/components/header'
import footer from '@/components/footer'
import newsCard from '@/components/newsCard'
import reviewCard  from '@/components/reviewCard'

import supabase from '@/lib/supabase'

export default async function Home() {
  //Fazendo a requisição ao Supabase diretamente no componente servidor
  const { data:news, error } = await supabase
    .from('news')  // Substitua pelo nome da sua tabela
    .select('*');  // Seleciona todas as colunas
  
  const { data: reviews, error: gameError } = await supabase
  .from("review") // Substitua pelo nome da sua tabela
  .select("*");

  if (error || gameError) {
    console.error('Erro ao buscar dados:', error);
    return <div>Erro ao carregar dados</div>;
  }

  return (
    <div>
      {header()}

      <main>
        <article id="capa">
          <div>
            <h1>Pixel Cloud</h1>
            <h2>A melhor plataforma de catálogo de jogos eletrônicos do mercado</h2>
          </div>
          <img src="controle3.png" alt="Controle de videogame" />
        </article>

        {/* <h1>Dados do Supabase</h1> */}
        {/* <pre>{JSON.stringify(news, null, 2)}</pre> */}

        <article className="article" id="games">
          <h1>JOGOS</h1>
          <hr /> <br />
          <div id="games-container">
            {/* elemento dinâmico para cards dos jogos */}
            {/* {data.map( (news) => <newsCard key={news.id} {...news} />)} */}
            <div> 
              {/* {data.map((review, index) => (newsCard(review, index)))} */}
              {reviews.map((review, index) => (reviewCard(review, index)))}
            </div>
          </div>
        </article>

        <br /> <br /> <br />

        <article className="article" id="news">
          <h1>Últimas notícias</h1>
          <hr /> <br />
          <div id="news-container">
            {/* elemento dinâmico para cards de notícias */}
            <div> 
              {/* {data.map((review, index) => (newsCard(review, index)))} */}
              {news.map((review, index) => (newsCard(review, index)))}
            </div>
          </div>
        </article>

        <article className="article">
          <h1>NOSSA LOCALIZAÇÃO</h1>
          <hr /> <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2286.9716686206552!2d-34.87395533916812!3d-7.1358094149308835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace810852ae4f1%3A0xaf5445223401f2bb!2sIFPB%20-%20Campus%20Jo%C3%A3o%20Pessoa!5e0!3m2!1spt-BR!2sbr!4v1724684941616!5m2!1spt-BR!2sbr"
            width="400" height="300" style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" id="mapa"></iframe>
        </article>
      </main>

      <br /> <br /> <br />

      {footer()}
    </div>
  );
}