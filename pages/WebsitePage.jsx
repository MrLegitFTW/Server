import React from "react";
import "/Stylesheets/HomePage.css";
import PixelBlast from "../components/PixelBlast.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import SpotlightCard from "../components/SpotLightCard.jsx";
import PixelCard from "../components/PixelCard.jsx";
import SplitText from "../components/SplitText.jsx";
import CardNav from "../components/HomeNav.jsx";
import logo from "../assets/lionfish.svg";

// Navigation items
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
                {/* Navigation */}
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

                {/* PixelBlast Background */}
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

                {/* Centered Heading */}
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
                        marginTop: '0rem',
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
                        A demo page showing services, tutorials, and site information.
                    </p>
                </div>
            </section>

            {/* Demo About / Info Section */}
            {/* Section 1 */}
            <section
                style={{
                    backgroundColor: "#000814",
                    color: "#ccc",
                    width: "100%",
                    padding: "3rem 1.5rem",
                    margin: "-20px"
                }}
            >
                <h2 style={{ fontSize: "1.75rem", marginBottom: "2rem", color: "#fff", textAlign: "center" }}>
                    About the Project
                </h2>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        maxWidth: "1000px",
                        margin: "0 auto 3rem auto",
                        gap: "2rem",
                        flexWrap: "wrap",
                    }}
                >
                    <div style={{ flex: "1 1 350px", textAlign: "left" }}>
                        <p>
                            This website is a demo to showcase interactive components like pixel effects, spotlight cards, and dynamic layouts.
                        </p>
                        <p>
                            Built with React, it features reusable components and animations for a modern feel.
                        </p>
                    </div>
                    <div style={{ flex: "0 0 280px", display: "flex", justifyContent: "center" }}>
                        <PixelCard variant="blue">
                            <div style={{ padding: "0.75rem", color: "#fff", textAlign: "center" }}>
                                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>💻 Demo Pixel Card</h3>
                                <p style={{ fontSize: "0.95rem" }}>Interactive UI elements to make the site more engaging.</p>
                            </div>
                        </PixelCard>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section
                style={{
                    backgroundColor: "#111122",
                    color: "#ccc",
                    width: "100%",
                    padding: "3rem 1.5rem",
                    margin: "-20px"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        maxWidth: "1000px",
                        margin: "0 auto 3rem auto",
                        gap: "2rem",
                        flexWrap: "wrap",
                        flexDirection: "row-reverse",
                    }}
                >
                    <div style={{ flex: "1 1 350px", textAlign: "right" }}>
                        <p>
                            The layout alternates between text and visuals to keep the flow dynamic and engaging.
                        </p>
                        <p>
                            Cards are customizable, allowing different themes and content to be swapped easily.
                        </p>
                    </div>
                    <div style={{ flex: "0 0 280px", display: "flex", justifyContent: "center" }}>
                        <PixelCard variant="purple">
                            <div style={{ padding: "0.75rem", color: "#fff", textAlign: "center" }}>
                                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>🎨 Design Focus</h3>
                                <p style={{ fontSize: "0.95rem" }}>Each section keeps a balance of information and visuals.</p>
                            </div>
                        </PixelCard>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section
                style={{
                    backgroundColor: "#000814",
                    color: "#ccc",
                    width: "100%",
                    padding: "3rem 1.5rem",
                    margin: "-20px"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        maxWidth: "1000px",
                        margin: "0 auto 3rem auto",
                        gap: "2rem",
                        flexWrap: "wrap",
                    }}
                >
                    <div style={{ flex: "1 1 350px", textAlign: "left" }}>
                        <p>
                            Animations, transitions, and unique cards help highlight important features or announcements.
                        </p>
                        <p>
                            The flexible grid makes it responsive across different screen sizes.
                        </p>
                    </div>
                    <div style={{ flex: "0 0 280px", display: "flex", justifyContent: "center" }}>
                        <PixelCard variant="green">
                            <div style={{ padding: "0.75rem", color: "#fff", textAlign: "center" }}>
                                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>⚡ Responsive</h3>
                                <p style={{ fontSize: "0.95rem" }}>Looks good on mobile, tablets, and desktops.</p>
                            </div>
                        </PixelCard>
                    </div>
                </div>
            </section>

            {/* Section 4 */}
            <section
                style={{
                    backgroundColor: "#1A0E2A",
                    color: "#ccc",
                    width: "100%",
                    padding: "3rem 1.5rem",
                    margin: "-20px"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        maxWidth: "1000px",
                        margin: "0 auto",
                        gap: "2rem",
                        flexWrap: "wrap",
                        flexDirection: "row-reverse",
                    }}
                >
                    <div style={{ flex: "1 1 350px", textAlign: "right" }}>
                        <p>
                            These sections can be repeated with new demo content as needed.
                        </p>
                        <p>
                            They provide a clean way to mix storytelling with interactive UI blocks.
                        </p>
                    </div>
                    <div style={{ flex: "0 0 280px", display: "flex", justifyContent: "center" }}>
                        <PixelCard variant="red">
                            <div style={{ padding: "0.75rem", color: "#fff", textAlign: "center" }}>
                                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>🚀 Scalable</h3>
                                <p style={{ fontSize: "0.95rem" }}>Easy to add more sections in the future.</p>
                            </div>
                        </PixelCard>
                    </div>
                </div>
            </section>



        </>
    );
}
