
const FirstAnimeDetail = () => {
    return (
        <section className="singleAnimeSection">
            <article className='flex flex-col gap-4'>
                <div className='singleAnimeDetails'>
                    <div className='containerSingleAnime'>
                        <SingleAnimeDetails
                            episodes={anime?.episodes ?? 0}
                            studios={anime?.studios ?? []}
                            season={anime?.season}
                            score={anime?.score ?? 0}
                            rank={anime?.rank ?? 0}
                            year={anime?.year ?? 0}
                        />
                    </div>
                </div>
            </article>
        </section>
    )
}

export default FirstAnimeDetail