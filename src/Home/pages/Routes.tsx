import { Route, Routes } from "react-router-dom";
import MainPage from "./Main";
import Reservation from "./Reservation";

export default function HomeRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="reservation/:id?" element={<Reservation />} />
        </Routes>
    )
}