import * as taskActions from './task.actions';

export const taskFeatureKey = 'task';

let initialState = {
    loading : false,
    errorMessage : '',
    tasks : [],
    task : {}
};

export const reducer = (state = initialState , action) => {
    let {type , payload} = action;
    switch(type){
        // Get all the tasks
        case taskActions.GET_ALL_TASKS_REQUEST:
            return {
                ...state,
                loading : true
            };
        case taskActions.GET_ALL_TASKS_SUCCESS:
            return {
                ...state,
                loading : false,
                tasks: payload
            };
        case taskActions.GET_ALL_TASKS_FAILURE:
            return {
                ...state,
                loading : false,
                errorMessage: payload
            };
        // Create a Task
        case taskActions.CREATE_TASK_REQUEST :
            return  {
                ...state,
                loading: true
            };
        case taskActions.CREATE_TASK_SUCCESS :
            return  {
                ...state,
                loading: false
            };
        case taskActions.CREATE_TASK_FAILURE :
            return  {
                ...state,
                loading: false
            };
        // Get a task
        case taskActions.GET_TASK_REQUEST :
            return  {
                ...state,
                loading: true
            };
        case taskActions.GET_TASK_SUCCESS :
            return  {
                ...state,
                loading: false,
                task: payload
            };
        case taskActions.GET_TASK_FAILURE :
            return  {
                ...state,
                loading: false,
                errorMessage: payload
            };
        case taskActions.UPDATE_INPUT:
            return {
                ...state,
                task: {
                    ...state.task,
                    [payload.key] : payload.value
                }
            };
        case taskActions.UPDATE_TASK_REQUEST :
            return  {
                ...state,
                loading:  true,
            };
        case taskActions.UPDATE_TASK_SUCCESS :
            return  {
                ...state,
                loading:  false,
            };
        case taskActions.UPDATE_TASK_FAILURE:
            return  {
                ...state,
                loading:  false,
            };
        // Delete Task
        case taskActions.DELETE_TASK_REQUEST :
            return {
                ...state,
                loading: true
            };
        case taskActions.DELETE_TASK_SUCCESS :
            return {
                ...state,
                loading: false
            };
        case taskActions.DELETE_TASK_FAILURE :
            return {
                ...state,
                loading: false
            };
        default: return state;
    }
};