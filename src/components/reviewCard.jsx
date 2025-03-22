export default function reviewCard(review, index){
    return (
        // <a
        // key={review.id || index} // Adicionando a chave única
        // className="group relative block overflow-hidden classeteste"
        // style={{ width: '25rem', borderRadius: '10px' }}
        // >
        // <img
        //     src={review.img}
        //     alt={review.nome}
        //     className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        // />

        // <div className="bg-black p-6">
        //     <h3 className="mt-4 text-lg font-medium text-white">{review.nome}</h3>
        //     <br />
        //     <br />
        //     <button
        //     className="block w-full rounded bg-purple-600 p-4 text-sm font-medium transition hover:scale-105"
        //     // onClick={() => window.location.href = review.link}
        //     >
        //     Ver jogo
        //     </button>
        // </div>
        // </a>

        <div key={review.id || index}>
        <br />

        <div className="card lg:card-side bg-black shadow-xl news_card max-w-3xl mx-auto">
            <figure>
                <img src={review.img} alt={review.name} className="h-130 w-full object-cover" />
            </figure>
            <div className="card-body p-6">
                <h2 className="card-title text-lg font-semibold truncate">{review.nome}</h2>
                <p className="text-sm text-gray-300">escrito por: {review.autor}</p>
                <div className="card-actions justify-end mt-4" style={{height: '20rem', overflow: 'scroll'}}>
                    {review.texto}
                </div>
            </div>
        </div>

        <br />
        </div>
    )
}