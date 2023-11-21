import { FaSearch } from "react-icons/fa"

const InputSearch = () => {
    return (
        <div className='relative flex items-center'>
            <input type="text" placeholder="No Api For Search" className="daisyInput" />
            <button className='absolute right-2 '><FaSearch size={24} /></button>
        </div>

    )

}

export default InputSearch