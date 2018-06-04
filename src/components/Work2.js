import React from "react";

import { List } from "semantic-ui-react";

class WorkWipro extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <List.Item>
                <List.Content
                    style={{
                        paddingLeft: 10,
                        marginTop: 15
                    }}
                >
                    <h2
                        style={{
                            margin: 0,
                            padding: 0,
                            fontSize: 22
                        }}
                    >
                        Software Engineer, Sears Holdings Corporation - Chicago, United States
                    </h2>
                    <h3 style={{ margin: 0, padding: 0 }}>
                        Jan 2017 - Dec 2018 (1 year)
                    </h3>
                    <List as="ul" style={{ marginLeft: 15 }}>
                        <List.Item as="li">
                            Designing and implementation Big Data, Business Intelligence and Analytics solutions for Price Simulation.
                        </List.Item>
                        <List.Item as="li">
                            SME for Clearance Modelling and workflow within Sears and Retail Domain.
                        </List.Item>
                        <List.Item as="li">
                            Attending business meetings to gather requirements, and Preparing Technical Documentation.
                        </List.Item>
                        <List.Item as="li">
                            Responsible for loading, extracting and validation of recommended prices v/s actuals.
                        </List.Item>
                        <List.Item as="li">
                            Hosting the Onsite-Offshore conference calls.
                        </List.Item>
                        <List.Item as="li">
                            Core Module Design, Development using Hadoop, Spark, Scala, Python, Hive, Sqoop, Teradata and MongoDB.
                        </List.Item>
                    </List>
                </List.Content>
            </List.Item>
        );
    }
}

export default WorkWipro;
