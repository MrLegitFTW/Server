import React from "react";
import "/Stylesheets/HomePage.css";
import PixelBlast from "../components/PixelBlast.jsx";
import PixelCard from "../components/PixelCard.jsx";
import SplitText from "../components/SplitText.jsx";
import CardNav from "../components/HomeNav.jsx";
import logo from "../assets/lionfish.svg";

{/* Timeline Component */}
const PixelTimeline = () => (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        margin: "2rem 0"
    }}>
        {[...Array(5)].map((_, i) => (
            <div key={i} style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#ff66cc",
                imageRendering: "pixelated",
                border: "2px solid #fff",
                borderRadius: "3px"
            }} />
        ))}
    </div>
);

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
            <section style={{
                backgroundColor: "#000814",
                color: "#ccc",
                width: "100%",
                padding: "5rem 1.5rem",
                position: "relative",
                overflow: "hidden",
                margin: "-20px"
            }}>
                <div style={{
                    position: "absolute",
                    top: "-100px",
                    right: "-100px",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(177,158,239,0.2) 0%, rgba(0,8,20,0) 70%)",
                    zIndex: 0
                }}></div>

                <div style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    position: "relative",
                    zIndex: 1
                }}>
                    <h2 style={{
                        fontSize: "2.5rem",
                        marginBottom: "3rem",
                        color: "#fff",
                        textAlign: "center",
                        position: "relative",
                        paddingBottom: "1rem"
                    }}>
                        The Beginning of the Journey
                        <div style={{
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "300px",
                            height: "4px",
                            background: "linear-gradient(90deg, #B19EEF, #FF66CC)",
                            borderRadius: "2px"
                        }}></div>
                    </h2>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "3rem",
                        flexWrap: "wrap"
                    }}>
                        <div style={{
                            flex: "1 1 400px",
                            textAlign: "left",
                            padding: "2rem",
                            background: "rgba(13, 7, 22, 0.4)",
                            borderRadius: "12px",
                            border: "1px solid rgba(177, 158, 239, 0.2)",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                            position: "relative",
                            overflow: "hidden"
                        }}>
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "4px",
                                height: "100%",
                                background: "linear-gradient(to bottom, #B19EEF, #FF66CC)",
                                borderRadius: "2px"
                            }}></div>
                            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", margin: 0, paddingLeft: "1rem" }}>
                                The journey began with a fascination for technology, quickly leading to self-hosting and hands-on experimentation. This sparked a desire to explore and build independent services from scratch.
                            </p>
                        </div>

                        <div style={{
                            flex: "0 0 320px",
                            display: "flex",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                            <div style={{
                                position: "absolute",
                                top: "-20px",
                                right: "-20px",
                                width: "60px",
                                height: "60px",
                                background: "rgba(255, 102, 204, 0.2)",
                                borderRadius: "8px",
                                transform: "rotate(15deg)",
                                zIndex: 0
                            }}></div>
                            <PixelCard variant="pink">
                                <div style={{
                                    position: "absolute",
                                    zIndex: 1,
                                    textAlign: "center",
                                    color: "#fff",
                                    padding: "1.5rem",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    background: "rgba(0, 0, 0, 0.6)",
                                    borderRadius: "8px"
                                }}>
                                    <h3 style={{
                                        margin: "0 0 1rem 0",
                                        fontSize: "1.5rem",
                                        background: "linear-gradient(45deg, #FF66CC, #FFB3E5)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}>Step 1 🚀</h3>
                                    <p style={{ margin: 0, fontSize: "0.9rem" }}>Started with tech curiosity and discovered self-hosting.</p>
                                </div>
                            </PixelCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section style={{
                backgroundColor: "#111122",
                color: "#ccc",
                width: "100%",
                padding: "5rem 1.5rem",
                position: "relative",
                margin: "-20px"
            }}>
                <div style={{
                    position: "absolute",
                    bottom: "-50px",
                    left: "-50px",
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(102,204,255,0.15) 0%, rgba(17,17,34,0) 70%)",
                    zIndex: 0
                }}></div>

                <div style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    position: "relative",
                    zIndex: 1
                }}>
                    <h2 style={{
                        fontSize: "2.5rem",
                        marginBottom: "3rem",
                        color: "#fff",
                        textAlign: "center",
                        position: "relative",
                        paddingBottom: "1rem"
                    }}>
                        Experimentation & Learning
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

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "3rem",
                        flexWrap: "wrap",
                        flexDirection: "row-reverse"
                    }}>
                        <div style={{
                            flex: "1 1 400px",
                            textAlign: "right",
                            padding: "2rem",
                            background: "rgba(23, 13, 39, 0.4)",
                            borderRadius: "12px",
                            border: "1px solid rgba(102, 204, 255, 0.2)",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                            position: "relative",
                            overflow: "hidden"
                        }}>
                            <div style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                width: "4px",
                                height: "100%",
                                background: "linear-gradient(to bottom, #66CCFF, #3366FF)",
                                borderRadius: "2px"
                            }}></div>
                            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", margin: 0, paddingRight: "1rem" }}>
                                Next came testing technologies and learning through trial and error. Failures taught resilience and guided integration of services into a cohesive setup.
                            </p>
                        </div>

                        <div style={{
                            flex: "0 0 320px",
                            display: "flex",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                            <div style={{
                                position: "absolute",
                                bottom: "-15px",
                                left: "-15px",
                                width: "50px",
                                height: "50px",
                                background: "rgba(102, 204, 255, 0.2)",
                                borderRadius: "8px",
                                transform: "rotate(-15deg)",
                                zIndex: 0
                            }}></div>
                            <PixelCard variant="blue">
                                <div style={{
                                    position: "absolute",
                                    zIndex: 1,
                                    textAlign: "center",
                                    color: "#fff",
                                    padding: "1.5rem",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    background: "rgba(0, 0, 0, 0.6)",
                                    borderRadius: "8px"
                                }}>
                                    <h3 style={{
                                        margin: "0 0 1rem 0",
                                        fontSize: "1.5rem",
                                        background: "linear-gradient(45deg, #66CCFF, #3366FF)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}>Step 2 🔧</h3>
                                    <p style={{ margin: 0, fontSize: "0.9rem" }}>Experimented with tools, learning by trial and error.</p>
                                </div>
                            </PixelCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section style={{
                backgroundColor: "#000814",
                color: "#ccc",
                width: "100%",
                padding: "5rem 1.5rem",
                position: "relative",
                margin: "-20px"
            }}>
                <div style={{
                    position: "absolute",
                    top: "50px",
                    right: "10%",
                    width: "100px",
                    height: "100px",
                    background: "rgba(255, 204, 102, 0.1)",
                    borderRadius: "50%",
                    filter: "blur(10px)",
                    zIndex: 0
                }}></div>

                <div style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    position: "relative",
                    zIndex: 1
                }}>
                    <h2 style={{
                        fontSize: "2.5rem",
                        marginBottom: "3rem",
                        color: "#fff",
                        textAlign: "center",
                        position: "relative",
                        paddingBottom: "1rem"
                    }}>
                        Refinement & Optimization
                        <div style={{
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "300px",
                            height: "4px",
                            background: "linear-gradient(90deg, #FFCC66, #FF9900)",
                            borderRadius: "2px"
                        }}></div>
                    </h2>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "3rem",
                        flexWrap: "wrap"
                    }}>
                        <div style={{
                            flex: "1 1 400px",
                            textAlign: "left",
                            padding: "2rem",
                            background: "rgba(13, 7, 22, 0.4)",
                            borderRadius: "12px",
                            border: "1px solid rgba(255, 204, 102, 0.2)",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                            position: "relative",
                            overflow: "hidden"
                        }}>
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "4px",
                                height: "100%",
                                background: "linear-gradient(to bottom, #FFCC66, #FF9900)",
                                borderRadius: "2px"
                            }}></div>
                            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", margin: 0, paddingLeft: "1rem" }}>
                                Focus shifted to refining setups and optimizing hardware for stability and scalability. Structured planning created a professional self-hosted environment.
                            </p>
                        </div>

                        <div style={{
                            flex: "0 0 320px",
                            display: "flex",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                            <div style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                width: "40px",
                                height: "40px",
                                background: "rgba(255, 204, 102, 0.2)",
                                borderRadius: "6px",
                                transform: "rotate(10deg)",
                                zIndex: 0
                            }}></div>
                            <PixelCard variant="yellow">
                                <div style={{
                                    position: "absolute",
                                    zIndex: 1,
                                    textAlign: "center",
                                    color: "#fff",
                                    padding: "1.5rem",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    background: "rgba(0, 0, 0, 0.6)",
                                    borderRadius: "8px"
                                }}>
                                    <h3 style={{
                                        margin: "0 0 1rem 0",
                                        fontSize: "1.5rem",
                                        background: "linear-gradient(45deg, #FFCC66, #FF9900)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}>Step 3 ⚙️</h3>
                                    <p style={{ margin: 0, fontSize: "0.9rem" }}>Refined setup with optimized hardware for stability.</p>
                                </div>
                            </PixelCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4 */}
            <section style={{
                backgroundColor: "#111122",
                color: "#ccc",
                width: "100%",
                padding: "5rem 1.5rem",
                position: "relative",
                margin: "-20px"
            }}>
                <div style={{
                    position: "absolute",
                    bottom: "30px",
                    left: "15%",
                    width: "80px",
                    height: "80px",
                    background: "rgba(102, 204, 255, 0.1)",
                    borderRadius: "50%",
                    filter: "blur(8px)",
                    zIndex: 0
                }}></div>

                <div style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    position: "relative",
                    zIndex: 1
                }}>
                    <h2 style={{
                        fontSize: "2.5rem",
                        marginBottom: "3rem",
                        color: "#fff",
                        textAlign: "center",
                        position: "relative",
                        paddingBottom: "1rem"
                    }}>
                        Consolidation & Showcasing
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

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "3rem",
                        flexWrap: "wrap",
                        flexDirection: "row-reverse"
                    }}>
                        <div style={{
                            flex: "1 1 400px",
                            textAlign: "right",
                            padding: "2rem",
                            background: "rgba(23, 13, 39, 0.4)",
                            borderRadius: "12px",
                            border: "1px solid rgba(102, 204, 255, 0.2)",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                            position: "relative",
                            overflow: "hidden"
                        }}>
                            <div style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                width: "4px",
                                height: "100%",
                                background: "linear-gradient(to bottom, #66CCFF, #3366FF)",
                                borderRadius: "2px"
                            }}></div>
                            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", margin: 0, paddingRight: "1rem" }}>
                                Everything was consolidated into this website, creating a central hub to showcase services, tutorials, and the journey itself.
                            </p>
                        </div>

                        <div style={{
                            flex: "0 0 320px",
                            display: "flex",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                            <div style={{
                                position: "absolute",
                                bottom: "-10px",
                                left: "-10px",
                                width: "45px",
                                height: "45px",
                                background: "rgba(102, 204, 255, 0.2)",
                                borderRadius: "6px",
                                transform: "rotate(-10deg)",
                                zIndex: 0
                            }}></div>
                            <PixelCard variant="blue">
                                <div style={{
                                    position: "absolute",
                                    zIndex: 1,
                                    textAlign: "center",
                                    color: "#fff",
                                    padding: "1.5rem",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    background: "rgba(0, 0, 0, 0.6)",
                                    borderRadius: "8px"
                                }}>
                                    <h3 style={{
                                        margin: "0 0 1rem 0",
                                        fontSize: "1.5rem",
                                        background: "linear-gradient(45deg, #66CCFF, #3366FF)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}>Step 4 🌐</h3>
                                    <p style={{ margin: 0, fontSize: "0.9rem" }}>Website created to showcase the journey and services.</p>
                                </div>
                            </PixelCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5 */}
            <section style={{
                backgroundColor: "#1A0E2A",
                color: "#ccc",
                width: "100%",
                padding: "5rem 1.5rem",
                position: "relative",
                margin: "-20px"
            }}>
                <div style={{
                    position: "absolute",
                    top: "20%",
                    right: "20%",
                    width: "120px",
                    height: "120px",
                    background: "rgba(255, 204, 102, 0.1)",
                    borderRadius: "50%",
                    filter: "blur(12px)",
                    zIndex: 0
                }}></div>

                <div style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    position: "relative",
                    zIndex: 1
                }}>
                    <h2 style={{
                        fontSize: "2.5rem",
                        marginBottom: "3rem",
                        color: "#fff",
                        textAlign: "center",
                        position: "relative",
                        paddingBottom: "1rem"
                    }}>
                        Mission & Vision
                        <div style={{
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "300px",
                            height: "4px",
                            background: "linear-gradient(90deg, #FFCC66, #FF9900)",
                            borderRadius: "2px"
                        }}></div>
                    </h2>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "3rem",
                        flexWrap: "wrap"
                    }}>
                        <div style={{
                            flex: "1 1 400px",
                            textAlign: "left",
                            padding: "2rem",
                            background: "rgba(39, 30, 55, 0.4)",
                            borderRadius: "12px",
                            border: "1px solid rgba(255, 204, 102, 0.2)",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                            position: "relative",
                            overflow: "hidden"
                        }}>
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "4px",
                                height: "100%",
                                background: "linear-gradient(to bottom, #FFCC66, #FF9900)",
                                borderRadius: "2px"
                            }}></div>
                            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", margin: 0, paddingLeft: "1rem" }}>
                                The mission is to centralize services for a smoother, enjoyable experience for friends and family. Accessibility and usability guide every decision.
                            </p>
                        </div>

                        <div style={{
                            flex: "0 0 320px",
                            display: "flex",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                            <div style={{
                                position: "absolute",
                                top: "-15px",
                                right: "-15px",
                                width: "55px",
                                height: "55px",
                                background: "rgba(255, 204, 102, 0.2)",
                                borderRadius: "8px",
                                transform: "rotate(15deg)",
                                zIndex: 0
                            }}></div>
                            <PixelCard variant="yellow">
                                <div style={{
                                    position: "absolute",
                                    zIndex: 1,
                                    textAlign: "center",
                                    color: "#fff",
                                    padding: "1.5rem",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    background: "rgba(0, 0, 0, 0.6)",
                                    borderRadius: "8px"
                                }}>
                                    <h3 style={{
                                        margin: "0 0 1rem 0",
                                        fontSize: "1.5rem",
                                        background: "linear-gradient(45deg, #FFCC66, #FF9900)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}>Step 5 💡</h3>
                                    <p style={{ margin: 0, fontSize: "0.9rem" }}>Centralize services to improve experience for friends and family.</p>
                                </div>
                            </PixelCard>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}