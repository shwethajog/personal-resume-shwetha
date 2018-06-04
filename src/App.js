import React from "react";

import { Grid } from "semantic-ui-react";

import Header from "./components/Header";
import Profile from "./components/Profile";
import WorkWrapper from "./components/WorkWrapper";
import EducationWrapper from "./components/EducationWrapper";
import PersonalWrapper from "./components/PersonalWrapper";
import Tools from "./components/Tools";

import { gridStyleLeft } from "./components/styles/default";

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Grid celled style={{ width: "960px" }}>
                <Grid.Row>
                    <Grid.Column style={gridStyleLeft}>
                        <Header />

                        <Profile />

                        <Tools />

                        <WorkWrapper />

                        <EducationWrapper />

                        <PersonalWrapper />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default App;
