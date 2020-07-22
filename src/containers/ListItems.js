import React, {Component} from 'react';

import ListItem from '../components/ListItem';

const backgroundStyling = {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    margin: "0 auto",
}

class ListItems extends Component {
    state = {
    }

    render() {
        return(
            <div style={{...backgroundStyling}}>
                <ListItem text="item 1"/>
                <ListItem text="item 2"/>
                <ListItem text="item 3"/>
            </div>
        );
    };
};

export default ListItems;