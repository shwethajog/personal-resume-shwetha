import React from "react";

import { Segment, Icon, List } from "semantic-ui-react";

import Work1 from "./Work1";
import Work2 from "./Work2";
import Work3 from "./Work3";

import { segmentStyleLeft } from "./styles/default";

class WorkWrapper extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Segment style={segmentStyleLeft}>
                <h3 style={{ margin: 0 }}>
                    <Icon name="suitcase" size="large" /> Work Experience
                </h3>
                <List
                    style={{
                        paddingLeft: 10,
                        marginLeft: 20
                    }}
                >
                    <Work1 />
                    <Work2 />
                    <Work3 />
                </List>
            </Segment>
        );
    }
}

export default WorkWrapper;
