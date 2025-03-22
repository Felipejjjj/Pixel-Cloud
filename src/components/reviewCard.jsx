export default function reviewCard(review, index){
    return (
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