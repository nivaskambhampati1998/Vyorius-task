import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Navbar from "./root/layout/navbar/Navbar";
import TaskList from "../src/tasks/TaskList";
import CreateTask from "../src/tasks/CreateTask";
import UpdateTask from '../src/tasks/UpdateTask';
import TaskAdmin from '../src/tasks/TaskAdmin';
import Login from "./users/login/Login";
import Register from "./users/register/Register";
import Alert from "./root/util/alert/Alert";
import * as userActions from './redux/users/user.actions';
import * as userUtil from '../src/util/userUtil';
import {useDispatch} from "react-redux";
import PrivateRoute from "../src/util/PrivateRoute";
import {store} from "./redux/store";
import { Provider } from 'react-redux';

let App = () => {
    let dispatch = useDispatch();

    useEffect(() => {
        if(userUtil.getToken()){
            dispatch(userActions.getUserInfo());
        }
    });

    return (
        <React.Fragment>
            <Provider store={store}>
            <Router>
                <Navbar/>
                <Alert/>
                <Switch>
                    <Route exact path="/" component={TaskList}/>
                    <PrivateRoute exath path="/tasks/admin" component={TaskAdmin}/>
                    <PrivateRoute exact path="/tasks/create" component={CreateTask}/>
                    <PrivateRoute exath path="/tasks/:id" component={UpdateTask}/>
                    <Route exact path="/users/login" component={Login}/>
                    <Route exact path="/users/register" component={Register}/>
                </Switch>
            </Router>
            </Provider>
        </React.Fragment>
    );
};


export default App;
