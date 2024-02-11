import { Route, Routes } from "react-router-dom";
import MainPage from "./Main";

export default function HomeRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="profile" element={<h1>Profile</h1>} />
            <Route path="settings" element={<h1>Settings</h1>} />
        </Routes>
    )
}