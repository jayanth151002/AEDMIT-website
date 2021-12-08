import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter, useParams } from 'react-router-dom'
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Country from "./CountryComponent";
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
                    return (item[0].id === parseInt(match.params.id, 10))
                }
                )} />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={() => <Home />} />
                    <Route exact path="/country/:id" component={CountryComp} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main