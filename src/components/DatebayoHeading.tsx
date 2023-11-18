
const DatebayoHeading = () => {
    return (
        <div className=" containerDatebayo">
            <img className="datebayoImg" src="/miniatur-violet.png" alt="miniatur-violet" />
            <div className="innerDatebayo">
                <h2 className=" datebayoHeading">Subscribe Now</h2>
                <p className="">To more information and updates</p>
                <div className="flex relative w-full">
                    <input type="text" placeholder="Enter Email Address" />
                    <img className="absolute w-9 -right-5 sm:-right-9" src="./button-subs.png" alt="subs" />
                </div>
            </div>
            <img className="datebayoImg" src="/miniatur-naruto.png" alt="miniatur-violet" />
        </div>

    )
}

export default DatebayoHeading