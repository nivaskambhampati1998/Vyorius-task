import Axios from "axios";

export const UPDATE_INPUT = 'UPDATE_INPUT';

export const GET_ALL_TASKS_REQUEST = 'GET_ALL_TASKS_REQUEST';
export const GET_ALL_TASKS_SUCCESS = 'GET_ALL_TASKS_SUCCESS';
export const GET_ALL_TASKS_FAILURE = 'GET_ALL_TASKS_FAILURE';

export const GET_TASK_REQUEST = 'GET_TASK_REQUEST';
export const GET_TASK_SUCCESS = 'GET_TASK_SUCCESS';
export const GET_TASK_FAILURE = 'GET_TASK_FAILURE';

export const CREATE_TASK_REQUEST = 'CREATE_TASK_REQUEST';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const CREATE_TASK_FAILURE = 'CREATE_TASK_FAILURE';

export const UPDATE_TASK_REQUEST = 'UPDATE_TASK_REQUEST';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_FAILURE = 'UPDATE_TASK_FAILURE';

export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';

// get all tasks
export const getAllTasks = () => {
    return async (dispatch) => {
        try {
            dispatch({type : GET_ALL_TASKS_REQUEST});
            let dataURL = 'http://127.0.0.1:5000/api/tasks';
            let response = await Axios.get(dataURL);
            dispatch({type : GET_ALL_TASKS_SUCCESS , payload : response.data});
        }
        catch(error){
            dispatch({type : GET_ALL_TASKS_FAILURE , payload : error});
        }
    }
};

// get a task
export const getTask = (taskId) => {
    return async (dispatch) => {
        try {
            dispatch({type : GET_TASK_REQUEST});
            let dataURL = `http://127.0.0.1:5000/api/tasks/${taskId}`;
            let response = await Axios.get(dataURL);
            dispatch({type : GET_TASK_SUCCESS , payload : response.data});
        }
        catch(error){
            dispatch({type : GET_TASK_FAILURE , payload : error});
        }
    }
};

// create a new Task
export const createTask = (task , history) => {
    return async (dispatch) => {
        try {
            dispatch({type : CREATE_TASK_REQUEST});
            let dataURL = 'http://127.0.0.1:5000/api/tasks/';
            let response = await Axios.post(dataURL , task);
            dispatch({type : CREATE_TASK_SUCCESS , payload : response.data});
            history.push('/tasks/admin');
        }
        catch (error){
            dispatch({type : CREATE_TASK_FAILURE , payload : error});
        }
    }
};

// update a Task
export const updateTask = (taskId, task , history) => {
    return async (dispatch) => {
        try {
            dispatch({type : UPDATE_TASK_REQUEST});
            let dataURL = `http://127.0.0.1:5000/api/tasks/${taskId}`;
            let response = await Axios.put(dataURL , task);
            dispatch({type : UPDATE_TASK_SUCCESS , payload : response.data});
            history.push('/tasks/admin');
        }
        catch (error){
            dispatch({type : UPDATE_TASK_FAILURE , payload : error});
        }
    }
};

// Delete a Task
export const deleteTask = (taskId) => {
    return async (dispatch) => {
        try {
            dispatch({type : DELETE_TASK_REQUEST});
            let dataURL = `http://127.0.0.1:5000/api/tasks/${taskId}`;
            let response = await Axios.delete(dataURL);
            dispatch({type : DELETE_TASK_SUCCESS , payload : response.data});
            dispatch(getAllTasks());
        }
        catch (error){
            dispatch({type : DELETE_TASK_FAILURE , payload : error});
        }
    }
};

// updateInput
export const updateFormInput = (key , value) => {
    return {
        type : UPDATE_INPUT,
        payload : {key , value}
    }
};

