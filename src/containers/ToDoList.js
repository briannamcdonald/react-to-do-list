import React, {Component} from 'react';
import {Text, Input, Button} from '@chakra-ui/core';
import {connect} from 'react-redux';

import ListItem from './../components/ListItem';
import CategoryButtons from './../components/CategoryButtons';
import * as actionTypes from './../store/actions';

const backgroundStyling = {
    display: "flex",
    flexDirection: "column",
    width: "85%",
    margin: "0 auto",
}

class ToDoList extends Component {

    render() {
        return(
            <div style={{
                    backgroundColor: "#FFFACD", 
                    width: "45%", 
                    height: "100%", 
                    borderRadius: "8px",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    margin: "8px 0",
                    border: "4px solid pink"
                }}>
                <b><Text
                    color="gray.700"
                    fontSize="3xl"
                    fontFamily="Trebuchet MS"
                    margin="8px"
                >To-Do List</Text></b>
                <div style={{display: "flex", flexDirection: "row", width: "85%", margin: "0 auto"}}>
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
                </div>
                <hr style={{
                    borderWidth: "1px",
                    margin: "8px", 
                    marginBottom: "10px", 
                    borderColor: "#D6BCFA"}}
                />
                <div style={{...backgroundStyling}}>
                    <CategoryButtons />
                    {this.props.visibleList.map(listItem => (
                        <ListItem 
                            key={listItem.key} 
                            id={listItem.id}
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
        list: state.taskList,
        visibleList: state.visibleTaskList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onEnterNewTaskText: (text) => dispatch({type: actionTypes.ENTER_NEW_TASK_TEXT, newText: text}),
        onAddTask: () => dispatch({type: actionTypes.ADD_TASK}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);