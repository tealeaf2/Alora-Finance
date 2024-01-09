// NOT SURE IF SHOULD CREATE PAGES THIS WAY
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {LessonsPage} from "./pages/LessonsPage";
import {HomePage} from "./pages/HomePage";

export const PageRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/lessons" element={<LessonsPage />} />
            </Routes>
        </Router>
    )
}