import React from "react";
import LightRays from "/components/Lightveil.jsx";
import logo from "/assets/lionfish.svg";
import CardNav from "/components/HomeNav.jsx";
import SplitText from "/components/SplitText.jsx";
import "/Stylesheets/HomePage.css"
import ServiceCard from "../components/ServiceCard.jsx";
import SpotLightCard from "../components/SpotLightCard.jsx";
import SpotlightCard from "../components/SpotLightCard.jsx";
import PixelCard from "../components/PixelCard.jsx";

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

            {/* Intermediate Section */}
            <section className="intermediate-section" style={{
                margin: -20,
                width: "105%",
            }}>
                <h2 className="section-title">How can we help you?</h2>

                <div className="service-section">
                    <SpotlightCard spotlightColor="rgba(62, 146, 204, 0.35)">
                        <a href="/services/jellyfin" className="service-link">
                            <ServiceCard
                                title="Fancy a Movie?"
                                description="Stream your favorite films from our media library"
                                color="#3E92CC"
                            />
                        </a>
                    </SpotlightCard>

                    <SpotlightCard spotlightColor="rgba(255, 107, 53, 0.35)">
                        <a href="/services/ai" className="service-link">
                            <ServiceCard
                                title="Need Solutions?"
                                description="Powerful AI tools for your projects"
                                color="#FF6B35"
                            />
                        </a>
                    </SpotlightCard>

                    <SpotlightCard spotlightColor="rgba(76, 185, 68, 0.35)">
                        <a href="/services/nas" className="service-link">
                            <ServiceCard
                                title="Storage?"
                                description="Visit our storage options now!"
                                color="#4CB944"
                            />
                        </a>
                    </SpotlightCard>
                </div>
            </section>




            {/* About Section */}
            <div
                style={{
                    margin: "-30px",
                    backgroundColor: "#000814",
                    width: "102.1%",
                    color: "#ccc",
                    padding: "6rem 2rem 8rem",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "0.5px",
                }}
            >
                <h2
                    style={{
                        fontSize: "2.2rem",
                        marginBottom: "2rem",
                        color: "#fff",
                        fontWeight: "600",
                        textAlign: "left", // Left-align heading
                        maxWidth: "1100px",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    About Me
                </h2>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start", // Start from left
                        alignItems: "flex-start",     // Align top edges
                        flexWrap: "wrap",
                        gap: "3rem",
                        maxWidth: "1100px",
                        margin: "0 auto",
                    }}
                >
                    {/* About Text */}
                    <div
                        style={{
                            flex: "1 1 500px",
                            textAlign: "left",
                            maxWidth: "600px",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "1rem",
                                lineHeight: "1.8",
                                color: "#bbb",
                            }}
                        >
                            Hi, I’m <strong>Sebas</strong> — a Computer Science student at UGent with a
                            deep passion for <em>cybersecurity</em>, <em>game development</em>, and
                            <em> programming</em>. I enjoy working on creative coding projects,
                            experimenting with servers, and bringing ideas to life through design and
                            technology.
                        </p>
                        <p
                            style={{
                                marginTop: "2rem",
                                fontSize: "0.9rem",
                                color: "#888",
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
                                lineHeight: "1.6",
                                fontStyle: "italic",
                            }}
                        >
                            Please feel free to contact me for any questions!
                        </p>
                    </div>

                    {/* Pixel Card */}
                    <div style={{ flex: "0 0 300px", display: "flex", justifyContent: "center", marginTop: "-10rem", marginLeft: "5rem" }}>
                        <PixelCard variant="blue" className="about-pixel-card">
                            <div
                                style={{
                                    position: "absolute",
                                    zIndex: 1,
                                    textAlign: "center",
                                    color: "#fff",
                                    padding: "1rem",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <h3 style={{ fontSize: "1rem", marginBottom: "2rem", fontWeight: "600", marginTop: "0" }}>
                                    🏆 Employee of the Month
                                </h3>
                                <img
                                    src="/assets/dog.webp"
                                    alt="Employee of the Month"
                                    style={{
                                        width: "250px",
                                        height: "250px",
                                        borderRadius: "15px",
                                        objectFit: "cover",
                                        boxShadow: "0 0 15px rgba(0,0,0,0.5)",
                                    }}
                                />
                            </div>
                        </PixelCard>
                    </div>
                </div>
            </div>
        </>
    );
}

