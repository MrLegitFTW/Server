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

export default function NASTutorialPage() {
    const [name, setName] = useState("");

    const faqItems = [
        {
            question: "What is a NAS?",
            answer: "A NAS (Network Attached Storage) is a dedicated storage device that lets you store, share, and access files over your local network or remotely. Think of it as a personal cloud server for your home or office."
        },
        {
            question: "Can I access the NAS remotely?",
            answer: "Yes, but you may need to connect via Tailscale or VPN first, depending on the server’s setup. Once connected, you can access the NAS as if you were on the local network."
        },
        {
            question: "What can I store on the NAS?",
            answer: "You can store documents, photos, music, videos, and backups. The NAS is designed for reliable file sharing and long-term storage."
        },
        {
            question: "Why can’t I connect to the NAS?",
            answer: "Possible reasons:\n\n- You are not connected to the network or Tailscale.\n- You entered the wrong address.\n- Your account does not have permissions.\n- The NAS service might be temporarily down.\n\nPlease contact support if the issue persists."
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
                    NAS Help Page
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
                    Learn how to use our NAS step by step. This tutorial will guide you
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
                            <p>Contact the server admin and request an account to access the NAS.</p>
                        </Step>

                        <Step>
                            <h3>Step 2: Access the NAS Page</h3>
                            <p>Go to <strong>Services → NAS</strong> and log in with your account credentials.</p>
                        </Step>

                        <Step>
                            <h3>Step 3: Map the NAS on Windows</h3>
                            <p>While connected to <strong>Tailscale</strong>, you can map the NAS as a drive in File Explorer:</p>
                            <ol style={{ marginLeft: "1.5rem", textAlign: "left" }}>
                                <li>Open File Explorer.</li>
                                <li>Right-click on <em>This PC</em> → <em>Map network drive...</em>.</li>
                                <li>Choose a drive letter (e.g., <code>Z:</code>).</li>
                                <li>Enter the NAS path: <code>\\\\nas-server</code> (replace with the actual address).</li>
                                <li>Click <em>Finish</em> and log in with your NAS account.</li>
                            </ol>
                        </Step>

                        <Step>
                            <h3>Step 4: Connect to the NAS on Mac</h3>
                            <p>While connected to <strong>Tailscale</strong>, you can mount the NAS as a network drive in Finder:</p>
                            <ol style={{ marginLeft: "1.5rem", textAlign: "left" }}>
                                <li>Open Finder.</li>
                                <li>Click <em>Go</em> → <em>Connect to Server...</em>.</li>
                                <li>Enter the address: <code>smb://nas-server</code> (replace with the actual address).</li>
                                <li>Click <em>Connect</em> and log in with your NAS account.</li>
                            </ol>
                        </Step>

                        <Step>
                            <h3>All Done 🎉</h3>
                            <p>You now have full access to the NAS! Use it like a normal drive to store and manage your files.</p>
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
