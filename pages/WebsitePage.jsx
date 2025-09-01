import React from "react";
import "/Stylesheets/HomePage.css";
import PixelBlast from "../components/PixelBlast.jsx";
import PixelCard from "../components/PixelCard.jsx";
import SplitText from "../components/SplitText.jsx";
import CardNav from "../components/HomeNav.jsx";
import logo from "../assets/lionfish.svg";

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

export default function AboutWebsite() {
    return (
        <>
            {/* Top Section with PixelBlast */}
            <section style={{ position: 'relative', margin: -30, padding: -10 ,width: '105%', height: '100vh', backgroundColor: '#000', overflow: 'hidden' }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 10 }}>
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

                <div style={{ position: 'relative', width: '105%', height: '100vh', margin: "-30"}}>
                    <PixelBlast
                        variant="square"
                        pixelSize={6}
                        color="#B19EEF"
                        patternScale={3}
                        patternDensity={1.2}
                        enableRipples
                    />
                </div>

                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        color: 'white',
                        zIndex: 2,
                        width: '80%',
                        fontSize: "2rem",
                    }}
                >
                    <SplitText
                        text="About This Website"
                        tag="h1"
                        className="welcome-text"
                        duration={1}
                        delay={100}
                        ease="power3.out"
                        splitType="chars"
                        textAlign="center"
                    />
                    <p style={{ marginTop: "1rem", fontSize: "1.5rem", color: "#ccc" }}>
                        A demo page showcasing interactive services, tutorials, and experiences.
                    </p>
                </div>
            </section>

            {/* Section 1 */}
            <section style={{ backgroundColor: "#000814", color: "#ccc", width: "100%", padding: "3rem 1.5rem", margin: "-20px" }}>
                <h2 style={{ fontSize: "1.75rem", marginBottom: "2rem", color: "#fff", textAlign: "center" }}>
                    About the Project
                </h2>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "1000px", margin: "0 auto 3rem auto", gap: "2rem", flexWrap: "wrap" }}>
                    <div style={{ flex: "1 1 350px", textAlign: "left" }}>
                        <p>The journey began with a fascination for technology, quickly leading to self-hosting and hands-on experimentation. This sparked a desire to explore and build independent services from scratch.</p>
                    </div>
                    <div style={{ flex: "0 0 280px", display: "flex", justifyContent: "center" }}>
                        <PixelCard variant="pink">
                            <div style={{ position: "absolute", zIndex: 1, textAlign: "center", color: "#fff", padding: "1rem", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <h3>Step 1 🚀</h3>
                                <p>Started with tech curiosity and discovered self-hosting.</p>
                            </div>
                        </PixelCard>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section style={{ backgroundColor: "#111122", color: "#ccc", width: "100%", padding: "3rem 1.5rem", margin: "-20px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "1000px", margin: "0 auto 3rem auto", gap: "2rem", flexWrap: "wrap", flexDirection: "row-reverse" }}>
                    <div style={{ flex: "1 1 350px", textAlign: "right" }}>
                        <p>Next came testing technologies and learning through trial and error. Failures taught resilience and guided integration of services into a cohesive setup.</p>
                    </div>
                    <div style={{ flex: "0 0 280px", display: "flex", justifyContent: "center" }}>
                        <PixelCard variant="blue">
                            <div style={{ position: "absolute", zIndex: 1, textAlign: "center", color: "#fff", padding: "1rem", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <h3>Step 2 🔧</h3>
                                <p>Experimented with tools, learning by trial and error.</p>
                            </div>
                        </PixelCard>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section style={{ backgroundColor: "#000814", color: "#ccc", width: "100%", padding: "3rem 1.5rem", margin: "-20px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "1000px", margin: "0 auto 3rem auto", gap: "2rem", flexWrap: "wrap" }}>
                    <div style={{ flex: "1 1 350px", textAlign: "left" }}>
                        <p>Focus shifted to refining setups and optimizing hardware for stability and scalability. Structured planning created a professional self-hosted environment.</p>
                    </div>
                    <div style={{ flex: "0 0 280px", display: "flex", justifyContent: "center" }}>
                        <PixelCard>
                            <div style={{ position: "absolute", zIndex: 1, textAlign: "center", color: "#fff", padding: "1rem", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <h3>Step 3 ⚙️</h3>
                                <p>Refined setup with optimized hardware for stability.</p>
                            </div>
                        </PixelCard>
                    </div>
                </div>
            </section>

            {/* Section 4 */}
            <section style={{ backgroundColor: "#111122", color: "#ccc", width: "100%", padding: "3rem 1.5rem", margin: "-20px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "1000px", margin: "0 auto", gap: "2rem", flexWrap: "wrap", flexDirection: "row-reverse" }}>
                    <div style={{ flex: "1 1 350px", textAlign: "right" }}>
                        <p>Everything was consolidated into this website, creating a central hub to showcase services, tutorials, and the journey itself.</p>
                    </div>
                    <div style={{ flex: "0 0 280px", display: "flex", justifyContent: "center" }}>
                        <PixelCard variant="blue">
                            <div style={{ position: "absolute", zIndex: 1, textAlign: "center", color: "#fff", padding: "1rem", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <h3>Step 4 🌐</h3>
                                <p>Website created to showcase the journey and services.</p>
                            </div>
                        </PixelCard>
                    </div>
                </div>
            </section>

            {/* Section 5 */}
            <section style={{ backgroundColor: "#1A0E2A", color: "#ccc", width: "100%", padding: "3rem 1.5rem", margin: "-20px" }}>
                <div style={{ display: "flex", alignItems: "left", justifyContent: "center", maxWidth: "1000px", margin: "0 auto 3rem auto", gap: "2rem", flexWrap: "wrap" }}>
                    <div style={{ flex: "1 1 350px", textAlign: "left" }}>
                        <p>The mission is to centralize services for a smoother, enjoyable experience for friends and family. Accessibility and usability guide every decision.</p>
                    </div>
                    <div style={{ flex: "0 0 280px", display: "flex", justifyContent: "center" }}>
                        <PixelCard variant="yellow">
                            <div style={{ position: "absolute", zIndex: 1, textAlign: "center", color: "#fff", padding: "1rem", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <h3>Step 5 💡</h3>
                                <p>Centralize services to improve experience for friends and family.</p>
                            </div>
                        </PixelCard>
                    </div>
                </div>
            </section>
        </>
    );
}
