import React, {Component} from 'react';
import {Text, Input, Button, Flex} from '@chakra-ui/core';
import {connect} from 'react-redux';

import * as actionTypes from './../store/actions';

class TitleAndInput extends Component {
    render() {
        return(
            <div>
                <b><Text
                    color="gray.700"
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
                        focusBorderColor="pink.300"
                        margin="8px 1px"
                        position="relative"
                        left="4px"
                        value={this.props.newText}
                        onChange={event => this.props.onEnterNewTaskText(event.target.value)}
                    />
                    <Button
                        variantColor="pink"
                        margin="8px 1px"
                        position="relative"
                        left="4px"
                        onClick={this.props.onAddTask}
                        _focus={{boxShadow: "0 0 0 2px #D6BCFA"}}
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
    };
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