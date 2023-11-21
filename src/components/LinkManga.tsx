// ! jadiin seperate component

import { NavLink } from "react-router-dom"


const LinkManga = () => {
    const Links = [
        {
            to: '/mangaRecommendation',
            title: 'recommendation'
        },
        {
            to: '/topManga',
            title: 'topManga'
        },
    ]

    const isActiveClass = 'primaryColor '

    return Links.map((link) => {
        return (
            <NavLink
                key={link.title}
                to={link.to}
                className={({ isActive }) => `linkSingleAnime ${isActive && isActiveClass} text-base`}
            >
                {link.title}
            </NavLink>
        )
    }
    )
}


export default LinkManga