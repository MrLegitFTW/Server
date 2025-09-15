import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import AboutWebsite from "./pages/WebsitePage.jsx";
import AboutHelpPage from "./pages/HelpPage.jsx";
import AITutorialPage from "./pages/AITutorialPage.jsx";
import MediaTutorialPage from "./pages/MediaTutorialPage.jsx";
import NASTutorialPage from "./pages/NASTutorialPage.jsx";
import NotebookTutorialPage from "./pages/NotebookTutorialPage.jsx";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/about/help" element={<AboutHelpPage/>} />
                <Route path="/about/website" element={<AboutWebsite/>} />
                <Route path="/tutorials/ai" element={<AITutorialPage />} />
                <Route path="/tutorials/jellyfin" element={<MediaTutorialPage />} />
                <Route path="/tutorials/notebook" element={<NotebookTutorialPage />} />
                <Route path="/tutorials/nas" element={<NASTutorialPage />} />
            </Routes>
        </Router>
    );
}