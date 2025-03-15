import header from '@/components/header'
import footer from '@/components/footer'
import '@/app/review/review.css'

function review(review){
    return (
    <div>
        {header()}

        <main>
            <section className="info">
                <div className="img">
                <img src={review.imagem} alt={review.nome} />
                </div>
                <div className="details">
                <h1>{review.nome}</h1>
                <ul className="stars">
                    {[...Array(5)].map((_, index) => (
                    <li key={index}>
                        <img src="../images/star.png" alt="star" />
                    </li>
                    ))}
                </ul>
                <div className="description">
                    <h2>Disponível para:</h2>
                    <ul>
                    <li>ANDROID/IOS</li>
                    <li>XBOX</li>
                    <li>PC</li>
                    <li>Nintendo Switch</li>
                    </ul>
                    <h2>Review escrita por:</h2>
                    <ul>
                    <li>{review.autor}</li>
                    </ul>
                </div>
                </div>
            </section>
            <section className="topic">
                {review.texto}
            </section>
            <section className="autor">
                <div className="text">
                <h3>Sobre o Autor</h3>
                <p>{review.sobre_autor}</p>
                </div>
            </section>
        </main>

        {footer()}
    </div>
    )
}

export default review