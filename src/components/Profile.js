import React from "react";

import { Segment, Icon, List } from "semantic-ui-react";

import { segmentStyleLeftFirst } from "./styles/default";

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Segment style={segmentStyleLeftFirst}>
                <h3 style={{ margin: 0 }}>
                    <Icon name="user" size="large" /> Profile
                </h3>
                <List
                    style={{
                        paddingLeft: 10,
                        marginLeft: 15
                    }}
                >
                    <List.Item>
                        <List.Content style={{ paddingLeft: 10 }}>
                            <p>
                                I am a Certified Hadoop and Spark Developer from Cloudera. I am Highly-skilled software development professional bringing more than 6+ years in
                                software design, development and integration. I specialize in in Big Data technologies like Hadoop, Pig, Hive,
                                Spark. I also have programming experience with languages Java, Scala, Python, R.
                                <br />
                                <br />
                                My work areas and key responsibilities include:
                            </p>
                            <ul style={{ marginLeft: -25 }}>
                                <li style={{ marginBottom: 5 }}>
                                    Experience with Big Data solution designing and development.
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Developing using BigData technologies like Pig, Hive, Sqoop, Spark, Python, Scala, Java etc.
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Exposure of acting as liaison between business and technical teams along with the ability to technically
                                    support multiple and simultaneous projects at the same time.
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Experience with working with Agile and SDLC methodologies.
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    Sound understanding of Ecommerce and Pricing domains
                                </li>
                            </ul>
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
        );
    }
}

export default Profile;
