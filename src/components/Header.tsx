import { AnimatePresence, motion } from 'framer-motion';
import { FaHamburger, FaWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Dropdown from '../helpers/DropDown';
import useAnime from '../hooks/useAnime';
import useWindowWidth from '../hooks/useWindowWidth';
import { anime, chara, manga } from '../locale/navStuff';
import InputSearch from './InputSearch';

const Header = () => {

    const { open, toggleNav } = useAnime()

    const windowWidth = useWindowWidth()



    const middleNav = (
        <>
            <Dropdown title='Anime' items={anime} />
            <Dropdown title='Manga' items={manga} />
            <Dropdown title='Characters' items={chara} />
        </>
    )


    // ! animation framer-motion
    const menuVars = {
        initial: {
            scaleY: 0
        },
        animate: {
            // ! jadi original height
            scaleY: 1,
            transition: {
                duration: 0.3,
                ease: [0.12, 0, 0.39, 0]
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                duration: 0.3,
                ease: [0.12, 0, 0.39, 1]
            }
        }
    }

    const buttonVars = {
        initial: {
            y: "100vh",
            transition: {
                duration: 0.5,
            }
        }, open: {
            y: 0,
            transition: {
                duration: 0.7
            }
        }
    }

    return (
        <header>
            <nav>
                <div className='z-10'>
                    {!open && (
                        <Link to='/'>
                            <img src='/logo.png' alt="Logo" className='logo' />
                        </Link>
                    )}
                </div>
                <div className='middleNav'>
                    {middleNav}
                </div>
                {windowWidth < 768 && (
                    <div className='flex-1'>
                        <InputSearch />
                    </div>
                )}


                <AnimatePresence >
                    {open && (
                        // ! left-0 top-0 w-full h-screen agar memenuhi semua viewport
                        <motion.div
                            variants={menuVars}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            // ! agar transform start dari atas
                            className='wrapperMiddleMobileNav origin-top md:text-black'>
                            <motion.div
                                variants={buttonVars}
                                initial="initial"
                                animate="open"
                                className='middleMobileNav'>
                                {middleNav}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence >
                <div className='rightNav '>
                    {!open && windowWidth > 768 && <InputSearch />}
                    <button className='cursor-pointer md:hidden block' onClick={toggleNav}>
                        {!open ? <FaHamburger size={26} /> : <FaWindowClose size={26} />}
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header