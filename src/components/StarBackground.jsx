import { useEffect, useState } from "react";


export const StarBackground = () => {

    //id,size,x,y,opacity,animationDuration

    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [isDark, setIsDark] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        generateStars();
        generateMeteors();

        // Watch for theme changes
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark"));
        });
        observer.observe(document.documentElement, { attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    /* const handleResize = () => {
        generateStars();
    };

    window.addEventListener("resize", handleResize);    

    return () => {window.removeEventListener("resize", handleResize)};  */

    const generateStars = () => {   

        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 1000);

        const newStars = []

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x:Math.random() * 100,
                y:Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2  ,
            })
        }
        setStars(newStars);
    };

    const generateMeteors = () => {   

        const numberOfMeteors = 5;

        const newMeteors = []

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 3 + 1,
                x:Math.random() * 100,
                y:Math.random() * 30,
                delay: Math.random() * 70,
                animationDuration: Math.random() * 2 + 2     ,
            })
        }
        setMeteors(newMeteors);
    }

    // Light-mode star colors — soft purples, blues, pinks
    const lightStarColors = [
        "rgba(139, 92, 246, 0.7)",   // violet
        "rgba(99, 102, 241, 0.7)",   // indigo
        "rgba(59, 130, 246, 0.6)",   // blue
        "rgba(168, 85, 247, 0.65)",  // purple
        "rgba(236, 72, 153, 0.55)",  // pink 
    ];

    return <div className= "fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div
                key={star.id}
                className="animate-pulse-subtle absolute rounded-full"
                style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                    backgroundColor: isDark
                        ? "white"
                        : lightStarColors[star.id % lightStarColors.length],
                    boxShadow: isDark
                        ? "0 0 10px 2px rgba(255,255,255,0.4)"
                        : `0 0 8px 2px ${lightStarColors[star.id % lightStarColors.length]}`,
                }}
            />
        ))}
         

         {meteors.map((meteor) => (
            <div
                key={meteor.id}
                className="animate-meteor absolute rounded-full"
                style={{
                    width: meteor.size * 30 + "px",
                    height: meteor.size + "px",
                    left: meteor.x + "%",
                    top: meteor.y + "%",
                    animationDelay: meteor.delay,
                    animationDuration: meteor.animationDuration + "s",
                    background: isDark
                        ? "linear-gradient(to right, white, white, transparent)"
                        : "linear-gradient(to right, #38bdf8, #7dd3fc, transparent)",
                    boxShadow: isDark
                        ? "0 0 10px 5px rgba(255, 255, 255, 0.3)"
                        : "0 0 10px 4px rgba(56, 189, 248, 0.4)",
                }}
            />
        ))}
        
    </div>
}