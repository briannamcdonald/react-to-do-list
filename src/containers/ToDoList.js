import React, {Component} from 'react';
import {Text, Input, Button} from '@chakra-ui/core';

import ListItems from './ListItems';

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
                    />
                    <Button
                        variantColor="pink"
                        margin="8px 1px"
                        position="relative"
                        left="4px"
                    >Add Task</Button>
                </div>
                <ListItems />
            </div>
        );
    };
}

export default ToDoList;