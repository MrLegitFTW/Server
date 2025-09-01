import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import AboutWebsite from "./pages/WebsitePage.jsx";
import AboutHelpPage from "./pages/HelpPage.jsx";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/about/help" element={<AboutHelpPage/>} />
                <Route path="/about/website" element={<AboutWebsite/>} />
            </Routes>
        </Router>
    );
}
