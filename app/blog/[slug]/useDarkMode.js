"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { PiMoonStars } from "react-icons/pi";
import { RiSunLine } from "react-icons/ri"


function UseDarkMode() {
    const [theme, setTheme] = useState(
        typeof window !== "undefined"&&localStorage.getItem("theme") ? localStorage.getItem("theme") : "mydarktheme"
    );
    
    const root = window.document.documentElement;
    useEffect(() => {
       
        var dataTheme = root.getAttribute('data-theme');
       
        root.setAttribute("data-theme", theme);
       
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", theme);
        }
    }, [theme,root]);

    return <div className="px-28 navbar bg-base-100">
        <div className="flex-1">
            <Link className='text-xl flex flex-wrap font-spacemono' href={'/'}>
                <span className='text-primary'>{`>`}</span>
                thedev<span className='text-secondary'>blog</span>
            </Link>
        </div>
        <div className="flex-none space-x-10">
        <a href='https://github.com/amitkroutthedev/the-blog-app'><FaGithub size={25} /></a>
        {theme==="mydarktheme" && <button onClick={() => {
            setTheme("mylighttheme")
        }}><RiSunLine size={25} /></button>}
        {theme==="mylighttheme" && <button onClick={() => {
            setTheme("mydarktheme")
        }}><PiMoonStars size={25}/></button>}
        </div>
    </div>;
}

export default UseDarkMode;