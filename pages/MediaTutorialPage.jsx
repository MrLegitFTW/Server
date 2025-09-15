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
        { question: "What is this AI tutorial about?", answer: "It introduces you to using AI tools on this server, step by step." },
        { question: "Do I need programming experience?", answer: "No — this tutorial is beginner-friendly and designed to guide you through basic usage." },
        { question: "Can I use AI for my own projects?", answer: "Yes! You can integrate the provided AI tools into your personal or academic projects." },
        { question: "Where can I ask for help?", answer: "Feel free to contact Sebas or check the Help section in the navigation menu." },
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
                            <h3>Welcome!</h3>
                            <p>This tutorial will guide you through using Jellyfin on this server. Click "Next" to continue.</p>
                        </Step>
                        <Step>
                            <h3>Step 2: Explore AI Services</h3>
                            <SpotlightCard spotlightColor="rgba(0, 191, 255, 0.25)">
                                <ServiceCard
                                    title="Powerful AI Tools"
                                    description="Access solutions for text, images, and more."
                                    color="#00BFFF"
                                />
                            </SpotlightCard>
                            <p style={{ marginTop: "1rem" }}>This is how you can access AI features.</p>
                        </Step>
                        <Step>
                            <h3>Step 3: Try It Yourself</h3>
                            <p>Enter your name to personalize the experience:</p>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your name?"
                                style={{
                                    marginTop: "1rem",
                                    padding: "0.5rem 1rem",
                                    borderRadius: "10px",
                                    border: "none",
                                    outline: "none",
                                    width: "100%",
                                    maxWidth: "300px",
                                    backgroundColor: "#003060",
                                    color: "#fff",
                                }}
                            />
                        </Step>
                        <Step>
                            <h3>Final Step 🎉</h3>
                            <p>Thanks{name ? `, ${name}` : ""}! You’ve completed the tutorial.</p>
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
