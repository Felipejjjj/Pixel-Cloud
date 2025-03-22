export default function newsCard(news, index){
    return (
        <div key={news.id || index}>
            <br />

            <div className="card lg:card-side bg-black shadow-xl news_card max-w-3xl mx-auto">
                <figure>
                    <img src={news.img} alt={news.name} className="h-120 w-full object-cover" />
                </figure>
                <div className="card-body p-6">
                    <h2 className="card-title text-lg font-semibold truncate">{news.titulo}</h2>
                    <p className="text-sm text-gray-300">{news.subtitulo}</p>
                    <div className="card-actions justify-end mt-4" style={{height: '20rem', overflow: 'scroll'}}>
                        {news.texto}
                    </div>
                </div>
            </div>
            
            <br />
        </div>
    )
}