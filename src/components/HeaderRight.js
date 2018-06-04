import React from "react";

import { Segment, List } from "semantic-ui-react";

import { segmentStyleRight } from "./styles/default";

class HeaderRight extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Segment width={3} floated="right" style={segmentStyleRight}>
                <List>
                    <List.Item>
                        <List.Icon name="point" size="large" />
                        <List.Content>
                            <h4>Pune, India</h4>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="mail" size="large" />
                        <List.Content>
                            <h4>
                                <a href="mailto:shwethajog45@gmail.com">
                                    shwethajog45@gmail.com
                                </a>
                            </h4>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="call" size="large" />
                        <List.Content>
                            <h4>+91-97269 52101</h4>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="linkify" size="large" />
                        <List.Content>
                            <h4>
                                <a href="http://certification.cloudera.com/verify/user">
                                    Certification No - 100-017-322
                                </a>
                            </h4>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="linkedin" size="large" />
                        <List.Content>
                            <h4>
                                <a href="https://www.linkedin.com/in/shwetha-jog/">
                                    LinkedIn
                                </a>
                            </h4>
                        </List.Content>
                    </List.Item>
                </List>
                <br/>
                <br/>
            </Segment>
        );
    }
}

export default HeaderRight;
