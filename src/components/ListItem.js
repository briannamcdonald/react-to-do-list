import React from "react";
import { Checkbox, Text, IconButton, useColorMode } from "@chakra-ui/core";
import { connect } from "react-redux";

import * as actionTypes from "./../store/actions";

const ListItem = (props) => {
  const { colorMode } = useColorMode();
  const backgroundStyling = {
    display: "flex",
    flexDirection: "row",
    background: colorMode === "light" ? "#f8bbd0" : "#4A5568",
    width: "100%",
    justifyContent: "space-around",
    border: colorMode === "light" ? "2px solid #e6aec1" : "2px solid #718096",
    borderRadius: "6px",
    boxShadow:
      colorMode === "light" ? "2px 2px 2px #cd82a4" : "2px 2px 2px #A0AEC0",
    margin: "4px",
  };

  const buttonColorModeStyling = {
    light: {
      backgroundColor: "#535e49",
      _hover: { backgroundColor: "pink.600" },
      _active: { backgroundColor: "pink.300" },
      _focus: { boxShadow: "0 0 0 2px #D6BCFA" },
    },
    dark: {
      backgroundColor: "cyan.600",
      _hover: { backgroundColor: "cyan.700" },
      _active: { backgroundColor: "cyan.400" },
      _focus: { boxShadow: "0 0 0 2px #4A5568" },
    },
  };

  return (
    <div style={{ ...backgroundStyling }}>
      <Checkbox
        variantColor={colorMode === "light" ? "leafGreen" : "cyan"}
        borderColor={colorMode === "light" ? "leafGreen.500" : "cyan.600"}
        color="white"
        size="lg"
        margin="6px auto 6px 20px"
        paddingRight="6px"
        isChecked={props.done}
        onChange={() => props.onClickCheckbox(props.id)}
        // onFocus={() => boxShadow="0 0 0 3px #D6BCFA"}
      ></Checkbox>
      <Text
        color={colorMode === "light" ? "gray.800" : "white"}
        fontSize="lg"
        fontFamily="Trebuchet MS"
        margin="6px auto"
        overflowWrap="break-word"
      >
        {props.text}
      </Text>
      <IconButton
        color="white"
        size="xs"
        aria-label="Delete item"
        icon="delete"
        margin="6px 20px 6px auto"
        onClick={() => props.onDeleteTask(props.id)}
        {...buttonColorModeStyling[colorMode]}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.allTaskList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteTask: (id) =>
      dispatch({ type: actionTypes.DELETE_TASK, taskId: id }),
    onClickCheckbox: (id) =>
      dispatch({ type: actionTypes.CLICK_CHECKBOX, taskId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
