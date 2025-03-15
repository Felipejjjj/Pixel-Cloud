export default function newsCard(news){
    return (
        <div className="card lg:card-side bg-black shadow-xl news_card max-w-3xl mx-auto">
            <figure>
                <img src={news.img} alt={news.name} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body p-6">
                <h2 className="card-title text-lg font-semibold truncate">{news.titulo}</h2>
                <p className="text-sm text-gray-300">{news.subtitulo}</p>
                <div className="card-actions justify-end mt-4">
                <button
                    className="block w-full rounded bg-purple-600 p-4 text-sm font-medium transition-all hover:scale-105 focus:ring-4 focus:ring-purple-300"
                    onClick={() => window.location.href = news.link}
                >
                    Saiba mais
                </button>
                </div>
            </div>
        </div>
    )
}