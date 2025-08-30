import React from "react";
import LightRays from "/components/Lightveil.jsx";
import logo from "/assets/lionfish.svg";
import CardNav from "/components/HomeNav.jsx";
import SplitText from "/components/SplitText.jsx";
import "/Stylesheets/HomePage.css"

const items = [
    {
        label: "About",
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
            { label: "Website", ariaLabel: "About Website", href: "/about/website" },
            { label: "Help", ariaLabel: "Get help", href: "/about/help" },
        ],
    },
    {
        label: "Services",
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
            { label: "Jellyfin", ariaLabel: "Jellyfin", href: "/services/jellyfin" },
            { label: "NAS", ariaLabel: "NAS", href: "/services/nas" },
            { label: "Python notebook", ariaLabel: "Python notebook", href: "/services/notebook" },
            { label: "AI", ariaLabel: "AI", href: "/services/ai" },
        ],
    },
    {
        label: "Tutorials",
        bgColor: "#271E37",
        textColor: "#fff",
        links: [
            { label: "Jellyfin", ariaLabel: "Jellyfin", href: "/tutorials/jellyfin" },
            { label: "NAS", ariaLabel: "NAS", href: "/tutorials/nas" },
            { label: "Notebook", ariaLabel: "Notebook", href: "/tutorials/notebook" },
            { label: "AI", ariaLabel: "AI", href: "/tutorials/ai" },
        ],
    },
];

// CSS animation keyframes
const fishTrackStyle = {
    position: "absolute",
    top: "60%",
    left: "-20vw",
    width: "250px",
    height: "auto",
    zIndex: 6,
    animation: "swim 12s linear infinite alternate", // movement only
    willChange: "transform",
    pointerEvents: "none",
};

const fishBodyStyle = {
    width: "100%",
    height: "auto",
    filter:
        "brightness(2) drop-shadow(0 0 20px orange) drop-shadow(0 0 40px orange)",
    transformOrigin: "50% 50%",
    animation: "face 24s steps(1, end) infinite",
    /* NOTE: 24s = 2 × swim duration to match both edges */
};

// Add keyframes globally via style tag or in a CSS file
const styles = `
@keyframes swim {
  0%   { transform: translateX(0); }
  100% { transform: translateX(120vw); }
}

@keyframes face {
  0%, 50%   { transform: scaleX(-1); } /* going right */
  50.01%, 100% { transform: scaleX(1); } /* going left */
}
`;

export default function HomePage() {
    return (
        <>
            <div
                style={{
                    margin: -30,
                    padding: -10,
                    backgroundColor: "black",
                    minHeight: "100vh",
                    width: "105vw",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <style>{styles}</style> {/* Inject keyframes */}

                {/* Navigation */}
                <div
                    className="nav"
                    style={{
                        position: "relative",
                        zIndex: 10,
                    }}
                >
                    <CardNav
                        logo={logo}
                        logoAlt="Company Logo"
                        items={items}
                        baseColor="#fff"
                        menuColor="#000"
                        buttonBgColor="#111"
                        buttonTextColor="#fff"
                        ease="power3.out"
                    />
                </div>

                {/* Fish SVG */}
                <div style={fishTrackStyle}>
                    <img src={logo} alt="Lionfish" style={fishBodyStyle} />
                </div>

                {/* Main Text */}
                <div
                    style={{
                        position: "absolute",
                        top: "30%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        zIndex: 5,
                        width: "80%",
                        color: "white",
                        fontSize: "2rem",
                        lineHeight: "1.2",
                    }}
                >
                    <SplitText
                        text="Welcome to Lionfish!"
                        tag="h1"
                        className="welcome-text"
                        duration={1}
                        delay={100}
                        ease="power3.out"
                        splitType="chars"
                        textAlign="center"
                    />
                </div>

                {/* Background LightRays */}
                <div
                    style={{
                        margin: "-20",
                        left: 0,
                        width: "100%",
                    }}>
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#0fafaf"
                        raysSpeed={0.8}
                        lightSpread={2}
                        rayLength={3}
                        followMouse={true}
                        mouseInfluence={0}
                        noiseAmount={0.2}
                        distortion={0}
                        speed={5}
                        className="custom-rays"
                        saturation={0.1}
                    />
                </div>
            </div>


            {/* About Section */}
            <div
                style={{
                    margin: "-30px",
                    backgroundColor: "#000814",
                    width: "105%",
                    color: "#ccc",
                    padding: "6rem 2rem 8rem",
                    textAlign: "center",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "0.5px",
                }}
            >
                <h2
                    style={{
                        fontSize: "2.2rem",
                        marginBottom: "1.5rem",
                        color: "#fff",
                        fontWeight: "600",
                    }}
                >
                    About Me
                </h2>
                <p
                    style={{
                        fontSize: "1rem",
                        maxWidth: "650px",
                        margin: "0 auto",
                        lineHeight: "1.8",
                        color: "#bbb",
                    }}
                >
                    Hi, I’m <strong>Sebas</strong> — a Computer Science student at UGent with a
                    deep passion for <em>cybersecurity</em>, <em>OS development</em>, and
                    <em> programming</em>. I enjoy working on creative coding projects,
                    experimenting with servers, and bringing ideas to life through design and
                    technology.
                </p>
                <p
                    style={{
                        marginTop: "2rem",
                        fontSize: "0.9rem",
                        color: "#888",
                        maxWidth: "600px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        lineHeight: "1.6",
                    }}
                >
                    This is my personal server — feel free to explore, learn, and enjoy your stay!
                </p>
                <p
                    style={{
                        marginTop: "1rem",
                        fontSize: "0.8rem",
                        color: "#888",
                        maxWidth: "600px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        lineHeight: "1.6",
                        fontStyle: "italic",
                    }}
                >
                    Currently exploring OS design, AI integration, and advanced web technologies.
                </p>
            </div>

        </>
    );
}

