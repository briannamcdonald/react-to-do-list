import React from 'react';
import {IconButton, Button, Flex, useColorMode} from '@chakra-ui/core';
import {GoMarkGithub} from 'react-icons/go';
import {FaHeart} from 'react-icons/fa';

const NavigationBar = () => {

    const {colorMode, toggleColorMode} = useColorMode();
    const bgColorToggle = {light: "purple.500", dark: "cyan.700"}
    const bgColorGithub = {light: "pink.500", dark: "gray.600"}
    const hoverColorToggle = {light: "purple.600", dark: "cyan.800"}
    const hoverColorGithub = {light: "pink.600", dark: "gray.700"}
    const activeColorToggle = {light: "purple.300", dark: "cyan.500"}
    const activeColorGithub = {light: "pink.300", dark: "gray.400"}

    return(
        <Flex
            flexDirection="row"
            textAlign="right"
            backgroundColor="transparent"
            width="100%"
            padding="6px" >
            <Button
                backgroundColor={bgColorToggle[colorMode]}
                color="white"
                leftIcon={colorMode === "light" ? "moon" : FaHeart}
                size="sm"
                marginLeft="auto"
                onClick={toggleColorMode}
                _hover={{backgroundColor: hoverColorToggle[colorMode]}}
                _active={{backgroundColor: activeColorToggle[colorMode]}}
            >{colorMode === "light" ? "Dark" : "Pink"} Mode</Button>
            <IconButton
                backgroundColor={bgColorGithub[colorMode]}
                color="white"
                icon={GoMarkGithub}
                size="sm"
                marginLeft="6px"
                onClick={() => window.open("https://github.com/briannamcdonald/react-to-do-list")}
                _hover={{backgroundColor: hoverColorGithub[colorMode]}}
                _active={{backgroundColor: activeColorGithub[colorMode]}}
            ></IconButton>
        </Flex>
    );
}

export default NavigationBar;