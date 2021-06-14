import {combineReducers} from "redux";
import * as alertReducer from './alert/alert.reducer';
import * as userReducer from './users/user.reduces';
import * as taskReducer from './task/task.reducer';

export const rootReducer = combineReducers({
    [alertReducer.alertFeatureKey] : alertReducer.reducer,
    [userReducer.usersFeatureKey] : userReducer.reducer,
    [taskReducer.taskFeatureKey] : taskReducer.reducer
});