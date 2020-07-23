import React, {Component} from 'react';
import {Checkbox, Text, IconButton} from '@chakra-ui/core';
import {connect} from 'react-redux';

import * as actionTypes from './../store/actions';

const backgroundStyling = {
    display: "flex",
    flexDirection: "row",
    background: "pink",
    width: "100%",
    justifyContent: "space-around",
    border: "2px solid #FBB6CE",
    borderRadius: "6px",
    boxShadow: "2px 2px 2px #F687B3",
    margin: "4px"
};

class ListItem extends Component {
    render() {
        return(
            <div style={{...backgroundStyling}}>
                <Checkbox
                    variantColor="pink"
                    size="lg"
                    margin="6px auto 6px 20px"
                    paddingRight="6px"
                    isChecked={this.props.done}
                    onChange={() => console.log('')}
                ></Checkbox>
                <Text
                    color="gray.800"
                    fontSize="lg"
                    margin="6px auto"
                    isTruncated
                >{this.props.text}</Text>
                <IconButton 
                    variantColor="pink"
                    size="xs"
                    aria-label="Delete item"
                    icon="delete"
                    margin="6px 20px 6px auto"
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.taskList
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onDeleteTask: (id) => dispatch({type: actionTypes.DELETE_TASK, taskId: id}),
        onClickCheckbox: (id) => dispatch({type: actionTypes.CLICK_CHECKBOX, taskId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);