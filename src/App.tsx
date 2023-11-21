import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {


  // const handleNext = () => {
  //   setTopAnimePage((prev: number) => prev + 1)
  // }
  // const handlePrev = () => {
  //   setTopAnimePage((prev: number) => prev - 1)
  // }

  // console.log(topAnimePage)
  // console.log(topAnime.slice(0, 7))



  return (
    <>
      <Header />
      <Helmet>
        <title>Home</title>
      </Helmet>
      <main className=''>
        <Outlet />
      </main >
      <Footer />

    </>
  )
}

export default App
