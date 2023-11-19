// ! jadiin seperate component

import { NavLink } from "react-router-dom"


const LinkSingleAnime = () => {
    const Links = [
        {
            to: 'characters',
            title: 'characters'
        },
        {
            to: 'staff',
            title: 'staff'
        },
        {
            to: 'reviews',
            title: 'reviews'
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


export default LinkSingleAnime