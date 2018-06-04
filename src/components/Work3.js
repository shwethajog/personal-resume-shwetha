import React from "react";

import { List } from "semantic-ui-react";

class WorkTechMahindra extends React.Component {
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
                        Technical Associate, Sears IT and Management Services India Pvt. Ltd. - Pune, India
                    </h2>
                    <h3 style={{ margin: 0, padding: 0 }}>
                        Jul 2012 - Jan 2017 (4 years 5 months)
                    </h3>
                    <List as="ul" style={{ marginLeft: 15 }}>
                        <List.Item as="li">
                            Worked on various projects as part of Marketing and Pricing team. Involvement required
        collection, aggregation and analysis of various data points/data sources available within the
        Dynamic Pricing systems.
                        </List.Item>
                        <List.Item as="li">
                            Created and worked on various Dashboards which shows various data points for better
                            business understanding.
                        </List.Item>
                        <List.Item as="li">
                            Technologies used - Java/J2EE, Spring, Hibernate, MySQL, Shell Scripts
                        </List.Item>
                        <List.Item as="li">
                            Developing various Pig Latin and Hive scripts to aggregate data/generate reports.
                        </List.Item>
                        <List.Item as="li">
                            Developing various shell scripts which predominantly acted as wrapper scripts for Pig Latin.
                        </List.Item>
                        <List.Item as="li">
                            Interaction with varied database like MySQL, MongoDB, Hbase, DB2.
                        </List.Item>
                    </List>
                </List.Content>
            </List.Item>
        );
    }
}

export default WorkTechMahindra;
