import React from "react";
import FaultyTerminal from "../components/TerminalBackground.jsx";
import CardNav from "../components/HomeNav.jsx";
import SplitText from "../components/SplitText.jsx";
import logo from "../assets/lionfish.svg";
import SpotlightCard from "../components/SpotLightCard.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import FAQSection from "../components/FAQSection.jsx";
import {Link} from "react-router-dom";

const faqItems = [
    {
        question: "Why can I sometimes not access the server?",
        answer: "You must first be connected to the server's tailscale network before you can access it. If you are unsure about using tailscale, then please contact support.",
    },
    {
        question: "What is media (Jellyfin)?",
        answer: "Jellyfin is like your personal Netflix for home videos, movies, and music. It's a free app that organizes all your media in one place so you can: • Watch your movies & shows on any device• Listen to your music collection• View family photos\n• Share with household members.\n\nEverything stays private on this server - no subscriptions or sharing with strangers."
    },
    {
        question: "How do I use media (Jellyfin)?",
        answer: "To access our Jellyfin media server:\n\n1. Contact an administrator to request access\n2. If approved, you'll receive login instructions\n3. Use any device with a web browser or the Jellyfin app\n4. Browse movies, shows, and music organized in categories\n\nAdmins manage access to keep our media collection secure and organized for everyone."
    },
    {
        question: "How do I use the AI?",
        answer: "Our AI tools are available to approved users:\n\n• Contact an admin to request access\n• Once approved, log in to your account.\nAdmins can enable specific features based on your needs."
    },
    {
        question: "How do I use the Jellyfin app?",
        answer: "To access our Jellyfin media server through the app you will need to make a connection to the server through the app. To do this you must add our server \"servor.buri-lionfish.ts.net/media\" to the app. After that you must login to your account and you should be good to go!",
    },
    {
        question: "What is NAS?",
        answer: "NAS means Network Attached Storage, which in this case means storage that is yours and can access from everywhere as long as you have a wifi connection.",
    },
    {
        question: "How can I make use of extra Storage (NAS)?",
        answer: "Should you want to make use of extra storage hosted on this server, then please contact support."
    }
];

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

export default function AboutHelpPage() {
    return (
        <>
            {/* Hero Section with FaultyTerminal */}
            <section style={{ position: 'relative', width: '105%', height: '100vh', overflow: 'hidden', margin: -30 }}>
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

                <div style={{ position: 'absolute', width: "100%", height: "100%", margin: "-30px" }}>
                    <FaultyTerminal
                        scale={1.5}
                        gridMul={[2, 1]}
                        digitSize={1.2}
                        timeScale={1}
                        pause={false}
                        scanlineIntensity={1}
                        glitchAmount={1}
                        flickerAmount={1}
                        noiseAmp={1}
                        chromaticAberration={0}
                        dither={0}
                        curvature={0}
                        tint="#0059B3"
                        mouseReact={true}
                        mouseStrength={0.5}
                        pageLoadAnimation={false}
                        brightness={1}
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
                        fontSize: '2rem',
                    }}
                >
                    <SplitText
                        text="Help & Tutorials"
                        tag="h1"
                        className="welcome-text"
                        duration={1}
                        delay={100}
                        ease="power3.out"
                        splitType="chars"
                        textAlign="center"
                    />
                    <p style={{ marginTop: "1rem", fontSize: "1.5rem", color: "#ccc" }}>
                        It works on my machine, must be on you!
                    </p>
                </div>
            </section>

            {/* Tutorials Section */}
            <section style={{
                color: "#ccc",
                width: "102.1%",
                padding: "5rem 1.5rem",
                position: "relative",
                margin: -20
            }} className="intermediate-section">
                <h2 style={{
                    fontSize: "2.5rem",
                    marginBottom: "3rem",
                    color: "#fff",
                    textAlign: "center",
                    position: "relative",
                    paddingBottom: "1rem"
                }}>
                    Tutorials
                    <div style={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "300px",
                        height: "4px",
                        background: "linear-gradient(90deg, #66CCFF, #3366FF)",
                        borderRadius: "2px"
                    }}></div>
                </h2>
                <div className="service-section">
                    <SpotlightCard spotlightColor="rgba(62, 146, 204, 0.35)">
                        <Link to="/tutorials/jellyfin" className="service-link">
                            <ServiceCard
                                title="Streaming not working?"
                                description="Learn how to make use of our media library."
                                color="#3E92CC"
                            />
                        </Link>
                    </SpotlightCard>

                    <SpotlightCard spotlightColor="rgba(255, 107, 53, 0.35)">
                        <Link to="/tutorials/ai" className="service-link">
                            <ServiceCard
                                title="Problems with our AI's?"
                                description="Learn how to use them now!"
                                color="#FF6B35"
                            />
                        </Link>
                    </SpotlightCard>

                    <SpotlightCard spotlightColor="rgba(76, 185, 68, 0.35)">
                        <Link to="/tutorials/nas" className="service-link">
                            <ServiceCard
                                title="Storage problems?"
                                description="Visit the NAS tutorial now!"
                                color="#4CB944"
                            />
                        </Link>
                    </SpotlightCard>

                </div>
            </section>

            {/* FAQ Section */}
            <section style={{
                backgroundColor: "#111122",
                color: "#ccc",
                width: "100%",
                padding: "5rem 1.5rem",
                position: "relative",
                margin: -20
            }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    <h2 style={{
                        fontSize: "2.5rem",
                        marginBottom: "3rem",
                        color: "#fff",
                        textAlign: "center",
                        position: "relative",
                        paddingBottom: "1rem"
                    }}>
                        FAQs
                        <div style={{
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "200px",
                            height: "4px",
                            background: "linear-gradient(90deg, #FF66CC, #FFB3E5)",
                            borderRadius: "2px"
                        }}></div>
                    </h2>
                    <FAQSection items={faqItems} />
                </div>
            </section>

            {/* Footnote Section */}
            <footer style={{
                backgroundColor: "#0D0716",
                color: "#ccc",
                textAlign: "center",
                padding: "2rem 1rem",
                fontSize: "1rem",
                margin: -20
            }}>
                <p>
                    Got any questions that are not answered here?{" "}
                    <p>
                        Please contact me for further help.
                    </p>
                </p>
            </footer>
        </>
    );
}
