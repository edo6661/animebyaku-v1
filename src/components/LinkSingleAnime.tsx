import { Link } from "react-router-dom"
// ! jadiin seperate component


const LinkSingleAnime = () => {
    const Links = [
        {
            to: '/overview',
            title: 'overview'
        },
        {
            to: '/recommendation',
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
            to: '/reviews',
            title: 'reviews'
        },
        {
            to: '/customLists',
            title: 'customlists'
        },
    ]
    return Links.map((link) =>
        <Link key={link.title} className="btn uppercase" to={link.to}>{link.title}</Link>
    )
}

export default LinkSingleAnime