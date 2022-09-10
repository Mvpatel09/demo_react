import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "../Container/Welcome/Welcome";



export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
        </Routes>
    );
}