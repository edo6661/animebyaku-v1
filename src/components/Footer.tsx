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
                <p>&copy; <span className="animeWord">Mamah</span> ini aku yang buat loh</p>
                <SwitchTheme setTheme={setTheme} />
            </div>
        </footer>
    )
}

export default Footer