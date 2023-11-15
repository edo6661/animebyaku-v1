import BannerTitle from "./BannerTitle"

const Banner = ({ welcomeSentence }: { welcomeSentence: string[] }) => {
    return (
        <article className="innerBanner wrapper">
            <div>
                {welcomeSentence.map((letter: string, i: number) =>
                    <BannerTitle key={i} letter={letter} />
                )}
            </div>
            <div>
                <p className='descriptionBanner'>Discover <span className="animeWord">anime</span>  and manga, Explore the world of <span className="animeWord">anime</span> and manga, Design inspired by <a className=" hover:underline" target="_blank" href="https://anime-planet.com"><span className="animeWord">anime</span>-planet</a> and api by <a className=" hover:underline" target="_blank" href="https://docs.api.jikan.moe/">
                    jikan. <span className="animeWord">moe</span></a></p>
            </div>
        </article>
    )
}

export default Banner