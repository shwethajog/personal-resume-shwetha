import React from "react";

import { Segment, Image } from "semantic-ui-react";

import { segmentStyleLeft } from "./styles/default";

class HeaderLeft extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Segment width={13} style={segmentStyleLeft} floated="left">
                <Image
                    src="Shwetha.jpg"
                    size="small"
                    circular
                    floated="left"
                    verticalAlign="middle"
                />
                <h1
                    style={{
                        margin: 0,
                        padding: 0,
                        fontSize: 28,
                        display: "inline-block"
                    }}
                >
                    Shwetha Jog
                </h1>
                <h3 style={{ marginTop: 5, fontSize: 18 }}>
                    Cloudera Certified Spark & Hadoop Developer
                </h3>
            </Segment>
        );
    }
}

export default HeaderLeft;
