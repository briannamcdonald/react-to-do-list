import React, {Component} from 'react';
import {Text, Flex} from '@chakra-ui/core';
import {connect} from 'react-redux';

import NavigationBar from './../components/NavigationBar';
import ListItem from './../components/ListItem';
import CategoryButtons from './../components/CategoryButtons';
import TitleAndInput from './TitleAndInput';

const backgroundStyling = {
    backgroundColor: "#FFFACD", 
    width: "45%", 
    height: "100%", 
    borderRadius: "8px",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    margin: "8px 0",
    border: "4px solid #FBB6CE"
}

class ToDoList extends Component {

    /*  Checks if visibleList is undefined and if so, maps from the allList instead. 
        This is done to avoid errors when the app first starts up.  */
    getList = () => {
        let list = [];
        if(!this.props.visibleList) {
            list = this.props.allList;
        }
        else {
            list = this.props.visibleList;
        }
        return list;
    }

    render() {
        return(
            <div>
                <NavigationBar />
                <div style={{...backgroundStyling}}>
                    <TitleAndInput />
                    <Flex
                        flexDirection="column"
                        width="85%"
                        margin="0 auto" >
                        <CategoryButtons />
                        <div style={{display: this.props.allList.length === 0 ? "block" : "none"}}>
                            <Flex
                                height="55vh"
                                justifyContent="center"
                                alignItems="center" >
                                <Text
                                    color="gray.700"
                                    fontSize="xl"
                                    fontFamily="Trebuchet MS"
                                >Start adding tasks!</Text>
                            </Flex>
                        </div>
                        {this.getList().map(listItem => (
                            <ListItem 
                                key={listItem.key} 
                                id={listItem.id}
                                text={listItem.text}
                                done={listItem.done}
                            />
                        ))}
                    </Flex>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        allList: state.allTaskList,
        visibleList: state.visibleTaskList
    };
};

export default connect(mapStateToProps)(ToDoList);