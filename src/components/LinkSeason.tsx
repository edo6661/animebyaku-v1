// ! jadiin seperate component

import { NavLink } from "react-router-dom"


const LinkSeason = () => {
    const Links = [
        {
            to: '/season/UpComing',
            title: 'UpComing'
        },
        {
            to: '/season/recommendation',
            title: 'recommendation'
        },
        {
            to: '/topAnime',
            title: 'topAnime'
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


export default LinkSeason