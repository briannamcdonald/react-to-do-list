import React, {Component} from 'react';
import {Text, Input, Button, Flex, useColorMode} from '@chakra-ui/core';
import {connect} from 'react-redux';

import * as actionTypes from './../store/actions';

const TitleAndInput = (props) => {

    const {colorMode, toggleColorMode} = useColorMode();
    const buttonBgColor = {light: "pink.500", dark: "gray.600"}
    const buttonHoverColor = {light: "pink.600", dark: "gray.700"}
    const buttonActiveColor = {light: "pink.300", dark: "gray.400"}
    const textColor = {light: "gray.700", dark: "white"}
    const inputFocusBorderColor = {light: "purple.300", dark: "cyan.600"}

    return(
        <div>
            <b><Text
                color={textColor[colorMode]}
                fontSize="3xl"
                fontFamily="Trebuchet MS"
                margin="8px"
            >To-Do List</Text></b>
            <Flex
                flexDirection="row"
                width="85%"
                margin="0 auto" >
                <Input
                    placeholder="Enter a new task..."
                    backgroundColor="white"
                    borderColor="gray.200"
                    color="gray.700"
                    focusBorderColor={inputFocusBorderColor[colorMode]}
                    margin="8px 1px"
                    position="relative"
                    left="4px"
                    value={props.newText}
                    onChange={event => props.onEnterNewTaskText(event.target.value)}
                />
                <Button
                    backgroundColor={buttonBgColor[colorMode]}
                    color="white"
                    margin="8px 1px"
                    position="relative"
                    left="4px"
                    onClick={props.onAddTask}
                    _focus={{boxShadow: "0 0 0 2px #D6BCFA"}}
                    _hover={{backgroundColor: buttonHoverColor[colorMode]}}
                    _active={{backgroundColor: buttonActiveColor[colorMode]}}
                >Add Task</Button>
            </Flex>
            <hr style={{
                borderWidth: "1px",
                margin: "8px", 
                marginBottom: "10px", 
                borderColor: "#FBB6CE"}}
            />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        newText: state.newTaskText,
        allList: state.allTaskList,
        visibleList: state.visibleTaskList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onEnterNewTaskText: (text) => dispatch({type: actionTypes.ENTER_NEW_TASK_TEXT, newText: text}),
        onAddTask: () => dispatch({type: actionTypes.ADD_TASK}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TitleAndInput);