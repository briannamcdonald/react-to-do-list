import React from 'react';
import {Checkbox, Text, IconButton} from '@chakra-ui/core';

const backgroundStyling = {
    display: "flex",
    flexDirection: "row",
    background: "pink",
    width: "100%",
    justifyContent: "space-around",
    border: "2px solid #FBB6CE",
    borderRadius: "6px",
    boxShadow: "2px 2px 2px #F687B3",
    margin: "4px"
};

const ListItem = (props) => (
    <div style={{...backgroundStyling}}>
        <Checkbox
            variantColor="pink"
            size="lg"
            margin="6px auto 6px 20px"
            paddingRight="6px"
        ></Checkbox>
        <Text
            color="gray.800"
            fontSize="lg"
            margin="6px auto"
            isTruncated
        >{props.text}</Text>
        <IconButton 
            variantColor="pink"
            size="xs"
            aria-label="Delete item"
            icon="delete"
            margin="6px 20px 6px auto"
        />
    </div>
);

export default ListItem;