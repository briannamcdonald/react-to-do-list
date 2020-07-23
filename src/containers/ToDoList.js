import React, {Component} from 'react';
import {Text, Input, Button} from '@chakra-ui/core';
import {connect} from 'react-redux';

import ListItem from './../components/ListItem';
import * as actionTypes from './../store/actions';

const backgroundStyling = {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    margin: "0 auto",
}

class ToDoList extends Component {

    render() {
        return(
            <div>
                <b><Text
                    color="gray.700"
                    fontSize="3xl"
                    margin="8px"
                >To-Do List</Text></b>
                <div style={{display: "flex", flexDirection: "row", width: "50%", margin: "0 auto"}}>
                    <Input 
                        placeholder="Enter new task..."
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
                    >Add Task</Button>
                </div>
                <hr style={{margin: "8px", marginBottom: "10px"}}/>
                <div style={{...backgroundStyling}}>
                    {this.props.list.map(listItem => (
                        <ListItem 
                            key={listItem.key} 
                            text={listItem.text}
                            done={listItem.done}
                        />
                    ))}
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        newText: state.newTaskText,
        list: state.taskList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onEnterNewTaskText: (text) => dispatch({type: actionTypes.ENTER_NEW_TASK_TEXT, newText: text}),
        onAddTask: () => dispatch({type: actionTypes.ADD_TASK}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);