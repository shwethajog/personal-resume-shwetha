import React from "react";

class PersonalGender extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <h2
                    style={{
                        margin: 0,
                        padding: 0,
                        fontSize: 22
                    }}
                >
                    Gender
                </h2>
                <h3
                    style={{
                        margin: 3,
                        padding: 0,
                        fontWeight: "normal"
                    }}
                >
                    Female
                </h3>
            </div>
        );
    }
}

export default PersonalGender;
