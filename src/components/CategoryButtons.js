import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from '@chakra-ui/core';
import {FaListUl} from 'react-icons/fa';

import * as actionTypes from './../store/actions';

const divStyling = {
    display: "flex", 
    flexDirection: "row", 
    width: "100%", 
    margin: "2px auto 6px auto",
    justifyContent: "center",
    position: "relative",
    left: "4px"
}

class CategoryButtons extends Component {
    render() {
        return (
            <div style={{...divStyling}} >
                <Button
                    variantColor={this.props.currentCol === "to do" ? "purple" : "pink"}
                    width="33%"
                    margin="2px"
                    leftIcon="calendar"
                    onClick={this.props.onClickToDo} 
                    _focus={{boxShadow: "0 0 0 2px #D6BCFA"}} >
                    To Do
                </Button>
                <Button
                    variantColor={this.props.currentCol === "done" ? "purple" : "pink"}
                    width="33%"
                    margin="2px"
                    leftIcon="check-circle"
                    onClick={this.props.onClickDone} 
                    _focus={{boxShadow: "0 0 0 2px #D6BCFA"}} >
                    Done
                </Button>
                <Button
                    variantColor={this.props.currentCol === "all" ? "purple" : "pink"}
                    width="33%"
                    margin="2px"
                    leftIcon={FaListUl}
                    onClick={this.props.onClickAll} 
                    _focus={{boxShadow: "0 0 0 2px #D6BCFA"}} >
                    All Tasks
                </Button>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        currentCol: state.currentColumn,
        list: state.allTaskList,
        visibleList: state.visibleTaskList
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onClickToDo: () => dispatch({type: actionTypes.CLICK_TO_DO}),
        onClickDone: () => dispatch({type: actionTypes.CLICK_DONE}),
        onClickAll: () => dispatch({type: actionTypes.CLICK_ALL})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryButtons);