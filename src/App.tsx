import Banner from './components/Banner';
import ButtonSeeMore from './components/ButtonSeeMore';
import Footer from "./components/Footer";
import Header from "./components/Header";
import RandomAnimes from './components/RandomAnimes';
import Stars from './components/Stars';
import TopAnimes from './components/TopAnimes';
import TopMangas from './components/TopMangas';
import Button from './components/style/Button';
import useAnime from "./hooks/useAnime";

function App() {
  const {
    // topAnime, topAnimePage,
    setTopAnimePage, loadingTopAnime } = useAnime();

  const handleNext = () => {
    setTopAnimePage((prev: number) => prev + 1)
  }
  const handlePrev = () => {
    setTopAnimePage((prev: number) => prev - 1)
  }

  // console.log(topAnimePage)
  // console.log(topAnime.slice(0, 7))

  // ! banner
  const welcomeSentence = "Welcome to Animez".split("");

  const annoying = (
    <>
      <svg className='' xmlns="http://www.w3.org/2000/svg" width="246" height="168" viewBox="0 0 246 168" fill="none">
        <path d="M-43.6946 0.644867L245.457 167.587" stroke="white" strokeWidth="1.19244" />
      </svg>
      <svg className='' xmlns="http://www.w3.org/2000/svg" width="246" height="168" viewBox="0 0 246 168" fill="none">
        <path d="M-43.6946 167.587L245.457 0.644867" stroke="white" strokeWidth="1.19244" />
      </svg>
    </>
  )

  const seeMoreTopAnime = !loadingTopAnime && <ButtonSeeMore children='Anime' />
  const seeMoreTopManga = !loadingTopAnime && <ButtonSeeMore children='Manga' />


  return (
    <>
      <Header />

      <main>

        <section className="sectionBanner relative">
          <Stars />
          <Banner welcomeSentence={welcomeSentence} />
        </section>

        {/* ! top anime */}
        <section className="sectionTop ">
          <TopAnimes />

          {seeMoreTopAnime}
        </section>

        {/* ! top manga */}
        <section className='sectionTop bg-main py-8 rounded-xl'>
          <TopMangas />
          {seeMoreTopManga}
        </section>

        {/* ! random anime */}
        <section className='sectionRandom borderCard'>
          <RandomAnimes />
        </section>
        {annoying}

        <Button onClick={handlePrev}>Prev</Button>

        <Button onClick={handleNext}>next</Button>

      </main >
      <Footer />

    </>
  )
}

export default App
