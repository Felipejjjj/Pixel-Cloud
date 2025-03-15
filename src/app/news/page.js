import header from '@/components/header'
import footer from '@/components/footer'
import '@/app/news/news.css'

function news(news){
    return (
        <div>
            {header()}

            <main>
                <section id="noticia">
                    <h1>{news.titulo}</h1>
                    <h2>{news.subtitulo}</h2>
                    <hr />
                    <h3>Escrito por:</h3>
                    <h4>{news.autor}</h4>
                    <article id="noticia-texto">
                    <p>{news.texto}</p>
                    </article>
                </section>
            </main>

            {footer()}
        </div>
    )
}

export default news