import React from "react";
import { Text, Input, Button, Flex, useColorMode } from "@chakra-ui/core";
import { connect } from "react-redux";

import * as actionTypes from "./../store/actions";

const TitleAndInput = (props) => {
  const { colorMode } = useColorMode();
  const buttonColorModeStyling = {
    light: {
      backgroundColor: "pink.500",
      _hover: { backgroundColor: "pink.600" },
      _active: { backgroundColor: "pink.300" },
    },
    dark: {
      backgroundColor: "gray.600",
      _hover: { backgroundColor: "gray.700" },
      _active: { backgroundColor: "gray.400" },
    },
  };

  return (
    <div>
      <b>
        <Text
          color={colorMode === "light" ? "gray.700" : "white"}
          fontSize="3xl"
          fontFamily="Trebuchet MS"
          margin="8px"
        >
          To-Do List
        </Text>
      </b>
      <Flex flexDirection="row" width="85%" margin="0 auto">
        <Input
          placeholder="Enter a new task..."
          backgroundColor="white"
          borderColor="gray.200"
          color="gray.700"
          focusBorderColor={colorMode === "light" ? "purple.300" : "cyan.600"}
          margin="8px 1px"
          position="relative"
          left="4px"
          value={props.newText}
          onChange={(event) => props.onEnterNewTaskText(event.target.value)}
        />
        <Button
          color="white"
          margin="8px 1px"
          position="relative"
          left="4px"
          onClick={props.onAddTask}
          _focus={{ boxShadow: "0 0 0 2px #D6BCFA" }}
          {...buttonColorModeStyling[colorMode]}
        >
          Add Task
        </Button>
      </Flex>
      <hr
        style={{
          borderWidth: "1px",
          margin: "8px",
          marginBottom: "10px",
          borderColor: "#FBB6CE",
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newText: state.newTaskText,
    allList: state.allTaskList,
    visibleList: state.visibleTaskList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEnterNewTaskText: (text) =>
      dispatch({ type: actionTypes.ENTER_NEW_TASK_TEXT, newText: text }),
    onAddTask: () => dispatch({ type: actionTypes.ADD_TASK }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TitleAndInput);
