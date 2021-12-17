import React, { Component } from "react";
import { Switch, Route, Redirect} from 'react-router-dom'
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Country from "./CountryComponent";
import Counsellor from "./CounsellorComponent";
import { COUNTRIES } from "../shared/country"


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: COUNTRIES
        }
    }

    render() {

        const CountryComp = ({ match }) => {
            return (
                <Country country={this.state.countries.filter((item) => {
                    return (item[0].notation === match.params.notation)
                }
                )} />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={() => <Home />} />
                    <Route exact path="/country/:notation" component={CountryComp} />
                    <Route path="/counsellor" component={() => <Counsellor />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main