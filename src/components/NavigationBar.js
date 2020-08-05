import React from 'react';
import {IconButton, Button, Flex, useColorMode} from '@chakra-ui/core';
import {GoMarkGithub} from 'react-icons/go';
import {FaHeart} from 'react-icons/fa';

const NavigationBar = () => {

    const {colorMode, toggleColorMode} = useColorMode();

    return(
        <Flex
            flexDirection="row"
            textAlign="right"
            backgroundColor="transparent"
            width="100%"
            padding="6px" >
            <Button
                variantColor="purple"
                leftIcon={colorMode === "light" ? "moon" : FaHeart}
                size="sm"
                marginLeft="auto"
                onClick={toggleColorMode}
            >{colorMode === "light" ? "Dark" : "Pink"} Mode</Button>
            <IconButton
                variantColor="pink"
                icon={GoMarkGithub}
                size="sm"
                marginLeft="6px"
                onClick={() => window.open("https://github.com/briannamcdonald/react-to-do-list")}
            ></IconButton>
        </Flex>
    );
}

export default NavigationBar;