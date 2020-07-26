import * as actionTypes from '../store/actions';

const initialState = {
    newTaskText: "",
    taskList: []
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
                taskList: state.taskList.concat({
                    key: new Date(),
                    id: new Date(),
                    text: state.newTaskText,
                    done: false
                })
            };
        case actionTypes.DELETE_TASK:
            const updatedTaskList = state.taskList.filter(task => task.id !== action.taskId);
            return {
                ...state,
                taskList: updatedTaskList
            };
        case actionTypes.CLICK_CHECKBOX:
            // find the item in the list that matches the id given
            const item = state.taskList.find(listItem => listItem.id === action.taskId);
            // find the index of that item
            const index = state.taskList.indexOf(item);
            // update the done property of the item to be opposite to what it was before
            const newTaskList = [
                ...state.taskList.slice(0, index),
                {
                    ...state.taskList[index],
                    done: !state.taskList[index].done,
                },
                ...state.taskList.slice(index + 1)
            ]
            return {
                ...state,
                taskList: newTaskList
            }
        default:
            return state;
    }
}

export default reducer;