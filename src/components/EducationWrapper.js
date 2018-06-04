import React from "react";

import { List, Segment, Icon } from "semantic-ui-react";

import EducationDetail from "./EducationDetail";

import { segmentStyleLeft } from "./styles/default";

class EducationWrapper extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Segment style={segmentStyleLeft}>
                <h3 style={{ margin: 0 }}>
                    <Icon name="student" size="large" /> Education
                </h3>
                <List
                    style={{
                        paddingLeft: 10,
                        marginLeft: 20
                    }}
                >
                    <EducationDetail
                        degree="Master of Engineering(Computer Science)"
                        marks="Marks-80%"
                        start="Jun 2013"
                        end="May 2015"
                        institute="Dhole Patil College of Engineering, Pune, Maharastra, India"
                    />
                    <EducationDetail
                        degree="Bachelor of Engineering(Computer Science)"
                        marks="Marks-70%"
                        start="Jun 2009"
                        end="May 2012"
                        institute="Maratha Mandal College of Engineering, Belgaum, Karnataka, India"
                    />
                    <EducationDetail
                        degree="Diploma in Computer Science"
                        marks="Marks-60%"
                        start="Apr 2006"
                        end="Mar 2009"
                        institute="Govt Polytechnic for Womens, Hubli, Karnataka, India"
                    />
                    <EducationDetail
                        degree="10th/Senior Secondary"
                        marks="Marks-85%"
                        start="Apr 2004"
                        end="Mar 2005"
                        institute="Govt. of High School, Rajajinagar, Bangalore, India"
                    />
                </List>
            </Segment>
        );
    }
}

export default EducationWrapper;
