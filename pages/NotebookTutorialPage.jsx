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

export default function NotebookTutorialPage() {
    const [name, setName] = useState("");

    const faqItems = [
        {
            question: "What is the Jupyter Notebook service?",
            answer: "Jupyter Notebook is an interactive coding environment where you can write and run code in languages like Python. It’s great for data analysis, machine learning, or experimenting with code directly in your browser."
        },
        {
            question: "How do I access the Notebook?",
            answer: "To access Jupyter Notebook:\n\n1. Request an account from the admin.\n2. Navigate to the Notebook page under **Services → Notebook**.\n3. Log in with your credentials to start using it."
        },
        {
            question: "Can I install extra Python packages?",
            answer: "Yes, but it depends on permissions. If you have access, you can install packages using a cell with:\n\n```\n!pip install package-name\n```\n\nFor permanent installations, please contact the admin."
        },
        {
            question: "Can I access my files in the Notebook?",
            answer: "Yes, you can upload files directly through the Jupyter interface or save files inside your workspace. Files are stored on the server and remain available the next time you log in."
        },
        {
            question: "Why can’t I start a Notebook?",
            answer: "Possible reasons include:\n\n- The server is down or restarting.\n- Your account does not have permissions.\n- You are not connected to Tailscale (if required).\n\nIf the issue continues, please contact support."
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
                    Notebook Help Page
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
                    Learn how to use Jupyter Notebook step by step. This tutorial will guide you
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
                            <p>Contact the server admin and request an account to access the Jupyter Notebook service.</p>
                        </Step>

                        <Step>
                            <h3>Step 2: Access the Notebook Page</h3>
                            <p>Go to <strong>Services → Notebook</strong> in the menu to open the Jupyter Notebook environment.</p>
                        </Step>

                        <Step>
                            <h3>Step 3: Log In</h3>
                            <p>Use the account credentials provided by the admin to log in to the Notebook interface.</p>
                        </Step>

                        <Step>
                            <h3>Step 4: Start Coding</h3>
                            <p>
                                Once logged in, you can create new notebooks, run Python code, and upload files directly from your browser.
                                Example: try running <code>print("Hello, world!")</code> in a new cell.
                            </p>
                        </Step>

                        <Step>
                            <h3>All Done 🎉</h3>
                            <p>You’re ready to use Jupyter Notebook for coding, data analysis, or experimenting with Python.</p>
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
