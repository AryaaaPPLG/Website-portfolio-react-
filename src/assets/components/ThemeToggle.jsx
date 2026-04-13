import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "../../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storeTheme = localStorage.getItem("theme");
        if (storeTheme == "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return <button 
    onClick={toggleTheme} 
    className={cn(
    "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "bg-background/80 backdrop-blur border border-border shadow-sm",
        "hover:bg-muted/60",
        "focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/40"
        )}> {isDarkMode ? (
    <Sun className="h-6 w-6 text-yellow-500"/> 
     ) : (
    <Moon className="h-6 w-6 text-sky-600" />)}</button>
}