import React from "react";

import PropTypes from "prop-types";

import { List } from "semantic-ui-react";

class EducationDetail extends React.Component {
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
                        {this.props.degree} ({this.props.marks}) -
                        {this.props.start} - {this.props.end}
                    </h2>
                    <h3
                        style={{
                            margin: 3,
                            padding: 0,
                            fontWeight: "normal"
                        }}
                    >
                        {this.props.institute}
                    </h3>
                </List.Content>
            </List.Item>
        );
    }
}

EducationDetail.propTypes = {
    degree: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    institute: PropTypes.string.isRequired,
    marks: PropTypes.string.isRequired
};

export default EducationDetail;
