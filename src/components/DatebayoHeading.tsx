import useWindowWidth from "../hooks/useWindowWidth"

const DatebayoHeading = () => {

    const windowWidth = useWindowWidth()

    const lessWidth = windowWidth < 413

    const placeholder = lessWidth ? 'Enter Email' : 'Enter Email Address'

    return (
        <div className="containerDatebayo">
            <img className="  datebayoImg" src="/miniatur-violet.png" alt="miniatur-violet" />
            <div className="innerDatebayo">
                <h2 className="datebayoHeading">Subscribe Now</h2>
                <p className="">To more information and updates</p>
                <div className="flex items-center relative w-full">
                    <input type="text" placeholder={placeholder} />
                    <img className="absolute w-10 bottom-[-3px] -right-4 sm:-right-9" src="./button-subs.png" alt="subs" />
                </div>
            </div>
            <img className="  datebayoImg" src="/miniatur-naruto.png" alt="miniatur-violet" />
        </div>

    )
}

export default DatebayoHeading