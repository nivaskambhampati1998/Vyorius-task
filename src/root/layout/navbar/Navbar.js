import React from "react";
import {Link, useHistory} from 'react-router-dom';
import * as userUtil from '../../../util/userUtil';
import * as userActions from '../../../redux/users/user.actions';
import * as userReducer from '../../../redux/users/user.reduces';
import {useDispatch, useSelector} from "react-redux";

let Navbar = () => {
    let history = useHistory();
    let dispatch = useDispatch();

    let clickLogOut = () => {
        dispatch(userActions.logOutUser(history));
    };

    let userInfo = useSelector((state) => {
        return state[userReducer.usersFeatureKey];
    });

    let {isAuthenticated , user} = userInfo;

    let beforeLoginLinks = (
        <React.Fragment>
            <li className="nav-item">
                <Link to="/users/login" className="nav-link">
                    <i className="fa fa-sign-in-alt text-muted"/> Login</Link>
            </li>
            <li className="nav-item">
                <Link to="/users/register" className="nav-link">
                    <i className="fa fa-user-cog text-muted"/> Register</Link>
            </li>
        </React.Fragment>
    );

    let afterLoginLinks = (
        <React.Fragment>
            <li className="nav-item">
                <Link to="/" className="nav-link" onClick={clickLogOut}>
                    <img src={user?.avatar} width="25" height="25" className="rounded-circle" alt=""/> {user?.name}</Link>
            </li>
            <li className="nav-item">
                <Link to="/users/login" className="nav-link" onClick={clickLogOut}>
                    <i className="fa fa-sign-out-alt text-muted"/> LogOut</Link>
            </li>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-success navbar-expand-sm">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/tasks/admin" className="nav-link">Add Task</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {
                                userUtil.isLoggedIn() ? afterLoginLinks : beforeLoginLinks
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
};
export default Navbar;