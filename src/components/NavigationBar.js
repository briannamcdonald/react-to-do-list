import React from 'react';
import {IconButton, Button, Flex} from '@chakra-ui/core';
import {GoMarkGithub} from 'react-icons/go';

const NavigationBar = () => {
    return(
        <Flex
            flexDirection="row"
            textAlign="right"
            backgroundColor="transparent"
            width="100%"
            padding="6px" >
            <Button
                variantColor="purple"
                leftIcon="moon"
                size="sm"
                marginLeft="auto"
            >Dark Mode</Button>
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