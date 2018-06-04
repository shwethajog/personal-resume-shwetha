import React from "react";

import { List } from "semantic-ui-react";

class Work1 extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <List.Item>
                <List.Content style={{ paddingLeft: 10 }}>
                    <h2
                        style={{
                            margin: 0,
                            padding: 0,
                            fontSize: 22
                        }}
                    >
                        Senior Technical Associate, Sears IT and Management Services India Pvt. Ltd. - Pune, India
                    </h2>
                    <h3 style={{ margin: 0, padding: 0 }}>
                        Jan 2018 - Till date (5 months)
                    </h3>
                    <List as="ul" style={{ marginLeft: 15 }}>
                        <List.Item as="li">
                            Responsible for smooth execution of price recommendations.
                        </List.Item>
                        <List.Item as="li">
                            Help team to fix the bug in the production environment.
                        </List.Item>
                        <List.Item as="li">
                            Designing and implementation Big Data, Business Intelligence and Analytics solutions in complex environments.
                        </List.Item>
                        <List.Item as="li">
                            SME for Kmart Price Simulation.
                        </List.Item>
                        <List.Item as="li">
                            Preparing Technical Documentation and proposing the best solution.
                        </List.Item>
                    </List>
                </List.Content>
            </List.Item>
        );
    }
}

export default Work1;
