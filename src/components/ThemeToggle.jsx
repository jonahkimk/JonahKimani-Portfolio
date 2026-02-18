import { useEffect, useState } from "react"; 
import { Sun, Moon } from "lucide-react"; 
import  { cn } from "@/lib/utils";


export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

   useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else{
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []); 

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }

    };
    
  return (
    <button onClick={toggleTheme}  className = {cn("fixed max-sm:hidden top-15 right-5 z-50 p-2 rounded-full transition-colors duration-300 ",
        "focus:outline-hidden"
    )}> 
        {""}
        {isDarkMode ? (<Sun className="h-8 w-8 text-yellow-300" />)
         : (
         <Moon className="h-8 w-8 text-blue-900" />)
         }
    </button>
  );

}


