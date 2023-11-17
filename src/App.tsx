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

      <main className=''>
        <Outlet />
        {/* <Button onClick={handlePrev}>Prev</Button>
        <Button onClick={handleNext}>next</Button> */}
      </main >
      <Footer />

    </>
  )
}

export default App
