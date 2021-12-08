import React, { Component } from "react";
import First from "./FirstComponent";
import { CONSULTANTS } from '../shared/consultants'
import { MENTORS } from '../shared/mentors'
import { NEWS } from '../shared/news'
import { NOTIFICATIONS } from '../shared/notifs'


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: NEWS,
            notifs: NOTIFICATIONS,
            consultants: CONSULTANTS,
            mentors: MENTORS,
        };
    }
    render() {
        return (
            <div>
                <First news={this.state.news} notifs={this.state.notifs} consultants={this.state.consultants} mentors={this.state.mentors} />
            </div>
        )
    }
}

export default Home