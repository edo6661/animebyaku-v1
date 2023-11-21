import { useEffect, useState } from "react";
import SwitchTheme from "../locale/SwitchTheme";
import toggleStlyeTheme from "../utils/theme";

const Footer = () => {

    const [theme, setTheme] = useState(true);

    useEffect(() => {
        toggleStlyeTheme(theme)
    }, [theme])

    return (
        <footer>
            <div className="text-2xl wrapper flexBetween">
                <p className=""> <span className=" text-pinky">&copy; </span>Halo Mamaah</p>
                <SwitchTheme setTheme={setTheme} />
            </div>
        </footer>
    )
}

export default Footer