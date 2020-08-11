import React from 'react';
import {connect} from 'react-redux';
import {Button, useColorMode} from '@chakra-ui/core';
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

const CategoryButtons = (props) => {

    const {colorMode, toggleColorMode} = useColorMode();
    const bgColor = {light: "pink.500", dark: "gray.600"}
    const selectedBgColor = {light: "purple.500", dark: "cyan.700"}
    const hoverColor = {light: "pink.600", dark: "gray.700"}
    const selectedHoverColor = {light: "purple.600", dark: "cyan.800"}
    const activeColor = {light: "pink.300", dark: "gray.400"}
    const selectedActiveColor = {light: "purple.300", dark: "cyan.500"}

    return (
        <div style={{...divStyling}} >
            <Button
                backgroundColor={props.currentCol === "to do" ? selectedBgColor[colorMode] : bgColor[colorMode]}
                color="white"
                width="33%"
                margin="2px"
                leftIcon="calendar"
                onClick={props.onClickToDo}
                _hover={{backgroundColor: props.currentCol === "to do" ? selectedHoverColor[colorMode] : hoverColor[colorMode]}}
                _active={{backgroundColor: props.currentCol === "to do" ? selectedActiveColor[colorMode] : activeColor[colorMode]}}
                _focus={{boxShadow: "0 0 0 2px #D6BCFA"}} >
                To Do
            </Button>
            <Button
                backgroundColor={props.currentCol === "done" ? selectedBgColor[colorMode] : bgColor[colorMode]}
                color="white"
                width="33%"
                margin="2px"
                leftIcon="check-circle"
                onClick={props.onClickDone} 
                _hover={{backgroundColor: props.currentCol === "done" ? selectedHoverColor[colorMode] : hoverColor[colorMode]}}
                _active={{backgroundColor: props.currentCol === "done" ? selectedActiveColor[colorMode] : activeColor[colorMode]}}
                _focus={{boxShadow: "0 0 0 2px #D6BCFA"}} >
                Done
            </Button>
            <Button
                backgroundColor={props.currentCol === "all" ? selectedBgColor[colorMode] : bgColor[colorMode]}
                color="white"
                width="33%"
                margin="2px"
                leftIcon={FaListUl}
                onClick={props.onClickAll} 
                _hover={{backgroundColor: props.currentCol === "all" ? selectedHoverColor[colorMode] : hoverColor[colorMode]}}
                _active={{backgroundColor: props.currentCol === "all" ? selectedActiveColor[colorMode] : activeColor[colorMode]}}
                _focus={{boxShadow: "0 0 0 2px #D6BCFA"}} >
                All Tasks
            </Button>
        </div>
    );
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