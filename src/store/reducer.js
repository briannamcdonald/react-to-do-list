import * as actionTypes from '../store/actions';

const initialState = {
    newTaskText: "",
    allTaskList: [],
    toDoTaskList: [],
    doneTaskList: [],
    visibleTaskList: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ENTER_NEW_TASK_TEXT:
            return {
                ...state,
                newTaskText: action.newText
            };
        case actionTypes.ADD_TASK:
            return {
                newTaskText: "",
                allTaskList: state.allTaskList.concat({
                    key: new Date(),
                    id: new Date(),
                    text: state.newTaskText,
                    done: false
                }),
                toDoTaskList: state.toDoTaskList.concat({
                    key: new Date(),
                    id: new Date(),
                    text: state.newTaskText,
                    done: false
                })
            };
        case actionTypes.DELETE_TASK:
            //store the item
            const deletedItem = state.allTaskList.find(listItem => listItem.id === action.taskId);

            //remove it from allTaskList
            const updatedAllTaskList = state.allTaskList.filter(task => task.id !== action.taskId);

            //if item is done, remove it from doneTaskList. else, remove it from toDoTaskList
            let updatedDoneTaskList = state.doneTaskList;
            let updatedToDoTaskList = state.toDoTaskList;
            if(deletedItem.done) {
                updatedDoneTaskList = state.doneTaskList.filter(task => task.id !== action.taskId);
            }
            else {
                updatedToDoTaskList = state.toDoTaskList.filter(task => task.id !== action.taskId);
            }
            return {
                ...state,
                allTaskList: updatedAllTaskList,
                toDoTaskList: updatedToDoTaskList,
                doneTaskList: updatedDoneTaskList
            };
        case actionTypes.CLICK_CHECKBOX:
            // find the item in the list that matches the id given
            const item = state.allTaskList.find(listItem => listItem.id === action.taskId);

            // find the index of that item
            const index = state.allTaskList.indexOf(item);

            // update the done property of the item to be opposite to what it was before in the allTaskList
            const newTaskList = [
                ...state.allTaskList.slice(0, index),
                {
                    ...state.allTaskList[index],
                    done: !state.allTaskList[index].done,
                },
                ...state.allTaskList.slice(index + 1)
            ]

            //if the task is being marked as done add it to doneTaskList and remove it from toDoTaskList
            let newToDoTaskList = [];
            let newDoneTaskList = [];
            if(!state.allTaskList[index].done) {
                if(!(state.doneTaskList)) {
                    newDoneTaskList = [{...item, done: true}]
                }
                else {
                    newDoneTaskList = state.doneTaskList.concat({...item, done: true});
                }
                newToDoTaskList = state.toDoTaskList.filter(task => task.id !== action.taskId);
            }
            //else add it to the toDoTaskList and remove it from doneTaskList
            else {
                if(!(state.toDoTaskList)) {
                    newToDoTaskList = [{...item, done: false}]
                }
                else {
                    newToDoTaskList = state.toDoTaskList.concat({...item, done: false});
                }
                newDoneTaskList = state.doneTaskList.filter(task => task !== item);
            }

            return {
                ...state,
                allTaskList: newTaskList,
                toDoTaskList: newToDoTaskList,
                doneTaskList: newDoneTaskList
            }
        case actionTypes.CLICK_TO_DO:
            return {
                ...state,
                visibleTaskList: state.toDoTaskList
            }
        case actionTypes.CLICK_DONE:
            return {
                ...state,
                visibleTaskList: state.doneTaskList
            }
        case actionTypes.CLICK_ALL:
            return {
                ...state,
                visibleTaskList: state.allTaskList
            }
        default:
            return state;
    }
}

export default reducer;