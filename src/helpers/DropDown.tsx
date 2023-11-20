import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import useWindowWidth from '../hooks/useWindowWidth';
interface ItemType {
	subtitle: string;
	to: string;
}

interface DropdownType {
	title: string;
	items: ItemType[]
}

const Dropdown = ({ title, items }: DropdownType) => {

	const [isOpen, setIsOpen] = useState(false)

	const windowWidth = useWindowWidth()

	useEffect(() => {
		setIsOpen(false)
	}, [])

	useEffect(() => {
		if (windowWidth > 768) setIsOpen(false)
	}, [windowWidth])


	const open = () => setIsOpen(true)
	const unopen = () => setIsOpen(false)

	const openedStyle = !isOpen ? 'dropdownButton' : 'btn border-y-4'
	const defaultStyle = 'sm:border-white md:text-xl text-4xl pb-16 md:pb-12 pt-4 border-none'

	return (
		<details className="dropdown" open={isOpen} onMouseEnter={open} onMouseLeave={unopen}>
			<summary className={` ${openedStyle} ${defaultStyle}  `}>{title}</summary>
			<ul className="daisyInnerDropdown">
				{items.map((item, index) => (
					<li key={index} className="dropdownContent">
						<Link to={`${item.to}`}>{item.subtitle}</Link>
					</li>
				))}
			</ul>
		</details>
	)
}

export default Dropdown