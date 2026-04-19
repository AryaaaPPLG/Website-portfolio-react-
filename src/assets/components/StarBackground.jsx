import { useEffect, useState } from "react"

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, duration

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            generateMeteors(); // Re-generate on resize to adjust counts
        };

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const generateStars = () => {
        const numberStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = [];

        for (let i = 0; i < numberStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    };


    const generateMeteors = () => {
        const isMobile = window.innerWidth < 768;
        const numberMeteors = isMobile ? 8 : 4; // More meteors on mobile for variety
        const newMeteors = [];

        for (let i = 0; i < numberMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                // On mobile, meteors can start from higher up or anywhere in the y-axis
                y: isMobile ? Math.random() * 100 : Math.random() * 40, 
                delay: Math.random() * 10, // More spread out delays
                animationDuration: Math.random() * 3 + 2,
            });
        }

        setMeteors(newMeteors);
    };
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",

                    }} />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        position: "absolute",
                        width: meteor.size * 50 + "px", // panjang garis meteor
                        height: meteor.size * 2 + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        background: "linear-gradient(90deg, white, transparent)",
                        borderRadius: "50%",
                        animationDelay: meteor.delay + "s",
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};