import React from "react";
import { Text, Flex, useColorMode } from "@chakra-ui/core";
import { connect } from "react-redux";

import NavigationBar from "./../components/NavigationBar";
import ListItem from "./../components/ListItem";
import CategoryButtons from "./../components/CategoryButtons";
import TitleAndInput from "./TitleAndInput";

const ToDoList = (props) => {
  /*  Checks if visibleList is undefined and if so, maps from the allList instead. 
      This is done to avoid errors when the app first starts up.  */
  const getList = () => {
    let list = [];
    if (!props.visibleList) {
      list = props.allList;
    } else {
      list = props.visibleList;
    }
    return list;
  };

  const { colorMode } = useColorMode();

  return (
    <div>
      <NavigationBar />
      <Flex
        className="scrollable-div"
        style={{ WebkitOverflowScrolling: "touch" }}
        flexDirection="column"
        width={["100%", "80%", "60%", "45%"]}
        height={[
          "calc(100% - 40px)",
          "calc(100% - 30px)",
          "calc(100% - 20px)",
          "calc(100% - 8px)",
        ]}
        borderRadius={["0", "8px"]}
        position="absolute"
        left={["0", "50%"]}
        top={["40px", "50%"]}
        transform={["none", "translate(-50%, -50%)"]}
        overflowY="scroll"
        overflow="scroll"
        backgroundColor={colorMode === "light" ? "#f9e1e6" : "#1A202C"}
        border={
          colorMode === "light" ? "4px solid #f8bbd0" : "4px solid #4A5568"
        }
      >
        <TitleAndInput />
        <Flex
          flexDirection="column"
          width={["calc(100% - 14px)", "85%"]}
          margin="0 auto"
        >
          <CategoryButtons />
          <div
            style={{
              display: props.allList.length === 0 ? "block" : "none",
            }}
          >
            <Flex
              height="100%"
              position="relative"
              left="4px"
              top="25vh"
              justifyContent="center"
              alignItems="center"
            >
              <Text
                color={colorMode === "light" ? "gray.700" : "gray.100"}
                fontSize={["2xl", "2xl", "2xl", "xl"]}
                fontFamily="Trebuchet MS"
              >
                Start adding tasks!
              </Text>
            </Flex>
          </div>
          {getList().map((listItem) => (
            <ListItem
              key={listItem.key}
              id={listItem.id}
              text={listItem.text}
              done={listItem.done}
            />
          ))}
        </Flex>
      </Flex>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allList: state.allTaskList,
    visibleList: state.visibleTaskList,
  };
};

export default connect(mapStateToProps)(ToDoList);
