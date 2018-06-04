import React from "react";

import { SegmentGroup } from "semantic-ui-react";

import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <SegmentGroup horizontal style={{ margin: 0, padding: 0, height: 200 }}>
                <HeaderLeft />
                <HeaderRight />
            </SegmentGroup>
        );
    }
}

export default Header;
