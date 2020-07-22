const initialState = {
    newTaskText: "",
    taskList: [{key: 1, text: "item1", done: true}, {key: 2, text: "item2", done: false}]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ENTER_NEW_TASK_TEXT':
            return {
                ...state,
                newTaskText: action.newText
            };
        case "ADD_TASK":
            return {
                newTaskText: "",
                taskList: state.taskList.concat({
                    key: new Date(), 
                    text: state.newTaskText,
                    done: false
                })
            };
        case 'DELETE_TASK':
            const updatedTaskList = state.taskList.filter(task => task.id !== action.taskId);
            return {
                ...state,
                taskList: updatedTaskList
            };
        case 'CLICK_CHECKBOX':
            return {

            }
        default:
            return state;
    }
}

export default reducer;