import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import * as taskReducer from "../../src/redux/task/task.reducer";
import * as taskActions from "../../src/redux/task/task.actions";


let TaskAdmin = () => {
    let dispatch = useDispatch();

    let taskInfo = useSelector((state) => {
        return state[taskReducer.taskFeatureKey];
    });

    let {loading , tasks , errorMessage} = taskInfo;

    useEffect(() => {
        dispatch(taskActions.getAllTasks());
    } , []);


    let deleteTask = (taskID) => {
        dispatch(taskActions.deleteTask(taskID));
    };

    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col animated zoomIn">
                            <p className="h3 text-success">Task Admin</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet consequuntur, corporis, cumque dolore ea enim esse eveniet exercitationem fugit in iste itaque necessitatibus nemo nisi officiis qui totam. Explicabo!</p>
                            <Link to='/tasks/create' className="btn btn-success btn-sm">Create New</Link>
                        </div>
                    </div>
                </div>
            </section>

            {
                loading ?
                    <React.Fragment>
                       null
                    </React.Fragment> :
                    <section className="">
                        <div className="container">
                            <div className="row">
                                <div className="col animated zoomInLeft">
                                    <table className="table table-hover text-center table-striped table-success">
                                        <thead className="bg-dark text-success">
                                        <tr>
                                            <th>SNO</th>   
                                            <th>NAME</th>
                                            <th>Info</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            tasks.length > 0 ?
                                                <React.Fragment>
                                                    {
                                                        tasks.map(task => {
                                                            return (
                                                                <tr key={task._id}>
                                                                    <td>{task._id.substr(task._id.length - 5)}</td>
                                                                    
                                                                    <td>{task.name}</td>
                                                                    <td> {task.info}</td>
                                                                   
                                                                    <td>
                                                                        <Link to={`/tasks/${task._id}`} className="btn btn-secondary btn-sm">Update</Link>
                                                                        <button onClick={deleteTask.bind(this, task._id)} className="btn btn-danger btn-sm">Delete</button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </React.Fragment> : <React.Fragment>
                                                    <tr>
                                                        <td colSpan="6" className="text-danger font-weight-bold">----------- No Tasks Found --------- </td>
                                                    </tr>
                                                </React.Fragment>
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
            }

        </React.Fragment>
    )
};
export default TaskAdmin;
