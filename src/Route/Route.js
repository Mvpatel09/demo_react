import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "../Container/Welcome/Welcome";
import submersiblePumpHome from "../Container/SubmersiblePump/Home/Home";
import industrialSparesPartsHome from "../Container/IndustrialSparesParts/Home/Home";
import foodBeverageHome from "../Container/FoodBeverage/Home/Home";





export default function Router() {

    const submersiblePump = ({ match }) => {
        return (
            <>
                <Route exact path={`${match.url}/`} component={submersiblePumpHome} />
                <Route path={`${match.url}/userlist`} component={submersiblePumpHome} />
            </>
        )
    }

    const industrialSparesParts = ({ match }) => {
        return (
            <>
                <Route exact path={`${match.url}/`} component={industrialSparesPartsHome} />
                <Route path={`${match.url}/userlist`} component={submersiblePumpHome} />
            </>
        )
    }

    const foodBeverage = ({ match }) => {
        return (
            <>
                <Route exact path={`${match.url}/`} component={foodBeverageHome} />
                <Route path={`${match.url}/userlist`} component={submersiblePumpHome} />
            </>
        )
    }


    return (
        <BrowserRouter basename="/#">
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/submersible-pump" component={submersiblePump} />
                <Route path="/industrial-spares-parts" component={industrialSparesParts} />
                <Route path="/food-beverage" component={foodBeverage} />
            </Switch>
        </BrowserRouter>
    );
}