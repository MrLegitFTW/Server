import React, { useState } from "react";
import Stepper, { Step } from "../components/Stepper.jsx";
import FAQSection from "../components/FAQSection.jsx";
import SpotlightCard from "../components/SpotLightCard.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import CardNav from "../components/HomeNav.jsx";
import SplitText from "../components/SplitText.jsx";
import logo from "/assets/lionfish.svg";

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

export default function MediaTutorialPage() {
    const [name, setName] = useState("");

    const faqItems = [
        {
            question: "What is Jellyfin?",
            answer: "Jellyfin is like your personal Netflix for home videos, movies, and music. It's a free app that organizes all your media in one place so you can: • Watch your movies & shows on any device • Listen to your music collection • View family photos • Share with household members.\n\nEverything stays private on this server - no subscriptions or sharing with strangers."
        },
        {
            question: "How do I access Jellyfin?",
            answer: "To access Jellyfin:\n\n1. Contact an admin to request access.\n2. Once approved, log in via web or app.\n3. Enjoy browsing and streaming your content!"
        },
        {
            question: "How do I set up the Jellyfin app?",
            answer: "Install the Jellyfin app on your device, then connect to: `pi.buri-lionfish.ts.net/services/jellyfin`. Log in with your account and start streaming."
        },
        {
            question: "Why can I not connect to the server?",
            answer: "There could be multiple reasons why you cannot connect. Either you're not connected to the tailscale service, you have incorrectly inserted the server address into the Jellyfin app or the service is temporarily down. Please contact support if anything is unclear.",
        }
    ];

    return (
        <div
            style={{
                margin: -30,
                padding: 0,
                backgroundColor: "#000000",
                minHeight: "100vh",
                width: "100%",
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Navigation */}
            <div style={{ backgroundColor: "#0D0D0D", width: "101.70vw",paddingBottom: "1rem", paddingTop: "1rem" }}>
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

            {/* Intro Section */}
            <section
                style={{
                    backgroundColor: "#001020",
                    padding: "4rem 2rem",
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <h1 style={{ fontSize: "2.5rem", fontWeight: "600", marginBottom: "1rem" }}>
                    Jellyfin Help Page
                </h1>
                <div
                    style={{
                        margin: "1rem auto",
                        width: "300px",
                        height: "4px",
                        background: "linear-gradient(to right, #00BFFF 10%, #1E90FF 30%, #00FFFF 50%, #1E90FF 70%, #00BFFF 90%)",
                        borderRadius: "2px",
                    }}
                />
                <p style={{ fontSize: "1.1rem", color: "#bbb", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
                    Learn how to use Jellyfin step by step. This tutorial will guide you
                    through the basics, from accessing services to trying them out yourself.
                </p>
            </section>

            {/* Stepper Section */}
            <section style={{ backgroundColor: "#000814", padding: "4rem 2rem", width: "100%" }}>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <SplitText
                        text="Step-by-Step Guide"
                        tag="h2"
                        className="welcome-text"
                        duration={1}
                        delay={100}
                        ease="power3.out"
                        splitType="chars"
                        textAlign="center"
                    />
                    <div
                        style={{
                            margin: "1rem auto",
                            width: "300px",
                            height: "4px",
                            background: "linear-gradient(to right, #00BFFF 10%, #1E90FF 30%, #00FFFF 50%, #1E90FF 70%, #00BFFF 90%)",
                            borderRadius: "2px",
                        }}
                    />
                </div>

                <div
                    style={{
                        maxWidth: "900px",
                        margin: "0 auto",
                        backgroundColor: "#002040",
                        borderRadius: "20px",
                        padding: "2rem",
                        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
                    }}
                >
                    <Stepper
                        initialStep={1}
                        onStepChange={(step) => console.log("Current step:", step)}
                        onFinalStepCompleted={() => console.log("All steps completed!")}
                        backButtonText="Previous"
                        nextButtonText="Next"
                    >
                        <Step>
                            <h3>Step 1: Request an Account</h3>
                            <p>To begin, you’ll need an account. Please contact the server admin and request access.</p>
                        </Step>
                        <Step>
                            <h3>Step 2: Download the App</h3>
                            <p>Once you have your account, (optionally) download the Jellyfin app from the <strong>Google Play Store</strong> or <strong>Apple App Store</strong>.
                             Else you can find it on this website under the services and jellyfin page.</p>
                        </Step>
                        <Step>
                            <h3>Step 3: Connect to the Server</h3>
                            <p>If you downloaded the app then open it and connect to the server at:</p>
                            <code style={{ display: "block", margin: "1rem 0", background: "#001833", padding: "0.75rem", borderRadius: "10px" }}>
                                http://pi.buri-lionfish.ts.net/services/jellyfin
                            </code>
                        </Step>
                        <Step>
                            <h3>Step 4: Log In & Enjoy 🎉</h3>
                            <p>Use your account credentials to log in. You can now browse and enjoy movies, shows, music, and more!</p>
                        </Step>
                    </Stepper>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ backgroundColor: "#111122", padding: "4rem 2rem", width: "100%" }}>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <SplitText
                        text="Frequently Asked Questions"
                        tag="h2"
                        className="welcome-text"
                        duration={1}
                        delay={100}
                        ease="power3.out"
                        splitType="chars"
                        textAlign="center"
                    />
                    <div
                        style={{
                            margin: "1rem auto",
                            width: "300px",
                            height: "4px",
                            background: "linear-gradient(to right, #00FFFF 10%, #1E90FF 30%, #00BFFF 50%, #1E90FF 70%, #00FFFF 90%)",
                            borderRadius: "2px",
                        }}
                    />
                </div>

                <div
                    style={{
                        maxWidth: "900px",
                        margin: "0 auto",
                        backgroundColor: "#001833",
                        borderRadius: "20px",
                        padding: "2rem",
                        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
                    }}
                >
                    <FAQSection items={faqItems} />
                </div>
            </section>

            {/* Footer */}
            <footer
                style={{
                    backgroundColor: "#000000",
                    padding: "3rem 2rem",
                    textAlign: "center",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    width: "100%",
                }}
            >
                <p style={{ fontSize: "0.9rem", color: "#888" }}>
                    © {new Date().getFullYear()} Lionfish Server — Built by Sebas
                </p>
            </footer>
        </div>
    );
}
