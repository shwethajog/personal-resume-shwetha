import React from "react";

import { Rating } from "semantic-ui-react";

class PersonalLanguage extends React.Component {
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
                    Languages
                </h2>
                <h3
                    style={{
                        margin: 3,
                        padding: 0,
                        fontWeight: "normal"
                    }}
                >
                    English{" "}
                    <Rating
                        icon="check"
                        defaultRating={3}
                        maxRating={4}
                        disabled
                    />
                </h3>
                <h3
                    style={{
                        margin: 3,
                        padding: 0,
                        fontWeight: "normal"
                    }}
                >
                    Hindi{" "}
                    <Rating
                        icon="check"
                        defaultRating={4}
                        maxRating={4}
                        disabled
                    />
                </h3>
                <h3
                    style={{
                        margin: 3,
                        padding: 0,
                        fontWeight: "normal"
                    }}
                >
                    Kannada{" "}
                    <Rating
                        icon="check"
                        defaultRating={4}
                        maxRating={4}
                        disabled
                    />
                </h3>
                <h3
                    style={{
                        margin: 3,
                        padding: 0,
                        fontWeight: "normal"
                    }}
                >
                    Marathi{" "}
                    <Rating
                        icon="check"
                        defaultRating={4}
                        maxRating={4}
                        disabled
                    />
                </h3>
            </div>
        );
    }
}

export default PersonalLanguage;
