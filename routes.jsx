import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import AboutWebsite from "./pages/WebsitePage.jsx";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/about/help" element={<TestPage />} />
                <Route path="/about/website" element={<AboutWebsite/>} />
            </Routes>
        </Router>
    );
}
