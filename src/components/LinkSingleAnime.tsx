// ! jadiin seperate component

import { NavLink } from "react-router-dom"


const LinkSingleAnime = () => {
    const Links = [
        {
            to: `recommendations`,
            title: 'recommendation'
        },
        {
            to: '/characters',
            title: 'characters'
        },
        {
            to: '/staff',
            title: 'staff'
        },
        {
            to: 'reviews',
            title: 'reviews'
        },
        {
            to: '/customLists',
            title: 'customlists'
        },
    ]

    const isActiveClass = 'primaryColor '

    return Links.map((link) => {
        return (
            <NavLink
                key={link.title}
                to={link.to}
                className={({ isActive }) => `linkSingleAnime ${isActive && isActiveClass}`}
            >
                {link.title}
            </NavLink>
        )
    }
    )
}


export default LinkSingleAnime