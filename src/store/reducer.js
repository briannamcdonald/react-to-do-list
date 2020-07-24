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
            return state;
            //create new list item
            //splice it into before the clicked element and after
            //for the clicked element return a new element thats the same except
            //the done property is chamged to the opposite of before
        default:
            return state;
    }
}

export default reducer;