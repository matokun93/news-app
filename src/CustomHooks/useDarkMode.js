import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('useDarkMode')
    const enabled = darkMode

    useEffect(() => {
        document.body.classList.toggle('dark', enabled)
    }, [enabled])

    return [enabled, setDarkMode]
}

export default useDarkMode