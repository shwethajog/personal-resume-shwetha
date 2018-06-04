import React from "react";

import { SegmentGroup, Segment, List, Icon } from "semantic-ui-react";

import PersonalLanguage from "./PersonalLanguage";
import PersonalGender from "./PersonalGender";
import PersonalDateOfBirth from "./PersonalDateOfBirth";

import { segmentStyleLeft } from "./styles/default";

class PersonalWrapper extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Segment style={segmentStyleLeft}>
                <h3 style={{ margin: 0 }}>
                    <Icon name="info" size="large" /> Personal Details
                </h3>
                <List
                    style={{
                        paddingLeft: 10,
                        marginLeft: 20
                    }}
                >
                    <List.Item>
                        <List.Content style={{ paddingLeft: 10 }}>
                            <SegmentGroup
                                horizontal
                                style={{
                                    border: 0,
                                    margin: 0,
                                    padding: 0
                                }}
                            >
                                <Segment style={{ border: 0, padding: 0 }}>
                                    <PersonalLanguage />
                                </Segment>
                                <Segment style={{ border: 0, padding: 0 }}>
                                    <PersonalGender />
                                </Segment>
                                <Segment style={{ border: 0, padding: 0 }}>
                                    <PersonalDateOfBirth />
                                </Segment>
                            </SegmentGroup>
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
        );
    }
}

export default PersonalWrapper;
