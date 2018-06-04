import React from 'react';

import { Segment, Icon, List } from "semantic-ui-react";

import { segmentStyleLeft } from "./styles/default";

class Tools extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Segment style={segmentStyleLeft}>
                <h3 style={{ margin: 0 }}>
                    <Icon name="configure" size="large" /> Skills
                </h3>
                <List
                    style={{
                        paddingLeft: 10,
                        marginLeft: 20
                    }}
                >
                    <List as="ul" style={{ marginLeft: 15 }}>
                        <List.Item as="li">
                            <b>Big Data</b> - Hadoop, Hive, Pig Latin, Sqoop, Flume
                        </List.Item>
                        <List.Item as="li">
                            <b>Cloud Technologies</b> - AWS, Docker, Kubernetes
                        </List.Item>
                        <List.Item as="li">
                            <b>Programming Languages</b> - Java, Scala, Python, R
                        </List.Item>
                        <List.Item as="li">
                            <b>Databases</b> - MySQL, MongoDB, HBase
                        </List.Item>
                        <List.Item as="li">
                            <b>Web Servers</b> - Tomcat, JBoss
                        </List.Item>
                        <List.Item as="li">
                            <b>Tools and Source Control</b> - Maven, Eclipse, Git, Subversion
                        </List.Item>
                        <List.Item as="li">
                            <b>Operating Systems</b> - Windows, Unix/Linux
                        </List.Item>
                    </List>
                </List>
            </Segment>
        );
    }

}

export default Tools;
