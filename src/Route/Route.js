import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "../Container/Welcome/Welcome";



export default function Router() {
    return (
        <BrowserRouter>
            <Route path="/" component={Welcome} />
            <Route path="/test" component={Welcome} />

        </BrowserRouter>
    );
}