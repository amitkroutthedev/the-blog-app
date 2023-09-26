"use client"
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { PiMoonStars } from "react-icons/pi";
import { RiSunLine } from "react-icons/ri"


//const colorTheme = theme === "mydarktheme" ? "mylighttheme" : "mydarktheme";
function UseDarkMode() {
    const [theme, setTheme] = useState(
        typeof window !== "undefined" ? localStorage.theme : "mydarktheme"
    );

    useEffect(() => {
        const root = window.document.documentElement;
 
        var dataTheme = root.getAttribute('data-theme');

        root.setAttribute("data-theme", theme);
   
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    return <div className="px-10 flex justify-end items-center space-x-10 navbar bg-base-100">
        <a href='https://github.com/amitkroutthedev/the-blog-app'><FaGithub size={25} /></a>
        {theme==="mydarktheme"&& <button onClick={() => {
           
            setTheme("mylighttheme")
        }}><RiSunLine size={25} /></button>}
        {theme==="mylighttheme" && <button onClick={() => {
  
            setTheme("mydarktheme")
        }}><PiMoonStars size={25}/></button>}
    </div>;
}

export default UseDarkMode;