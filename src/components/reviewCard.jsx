export default function reviewCard(review){
    return (
        <a
        className="group relative block overflow-hidden classeteste"
        style={{ width: '25rem', borderRadius: '10px' }}
        >
        <img
            src={review.img}
            alt={review.nome}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="bg-black p-6">
            <h3 className="mt-4 text-lg font-medium text-white">{review.nome}</h3>
            <br />
            <br />
            <button
            className="block w-full rounded bg-purple-600 p-4 text-sm font-medium transition hover:scale-105"
            onClick={() => window.location.href = review.link}
            >
            Ver jogo
            </button>
        </div>
        </a>
    )
}