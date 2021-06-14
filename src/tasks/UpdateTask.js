import React, {useEffect, useState} from "react";
import {useParams, useHistory} from 'react-router-dom';
import Axios from "axios";
import * as taskActions from '../../src/redux/task/task.actions';
import * as taskReducer from '../../src/redux/task/task.reducer';
import {useDispatch, useSelector} from "react-redux";
import {updateFormInput} from "../../src/redux/task/task.actions";

let UpdateTask = () => {
    let dispatch = useDispatch();
    let taskId = useParams().id;
    let history = useHistory();

    let selectedTaskInfo = useSelector((state) => {
        return state[taskReducer.taskFeatureKey];
    });

    let {loading , errorMessage , task} = selectedTaskInfo;

    let [submitted , setSubmitted] = useState(false);

    useEffect(() => {
        dispatch(taskActions.getTask(taskId));
    }, [taskId]);

    let updateInput = (event) => {
       dispatch(updateFormInput(event.target.name , event.target.value));
    };

  

    let submitTask = (event) => {
        event.preventDefault();
        dispatch(taskActions.updateTask(taskId , task , history));
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col animated zoomIn">
                                <p className="h3 text-secondary">Update a Task</p>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet consequuntur, corporis, cumque dolore ea enim esse eveniet exercitationem fugit in iste itaque necessitatibus nemo nisi officiis qui totam. Explicabo!</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <pre>{JSON.stringify(selectedTask)}</pre>*/}
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card animated zoomInLeft delay-1s">
                                    <div className="card-header bg-secondary text-white">
                                        <p className="h4">Update the Task</p>
                                    </div>
                                    <div className="card-body rgba-purple-light">
                                        <form onSubmit={submitTask}>
                                            <div className="form-group">
                                                <input
                                                    name="name"
                                                    value={task.name}
                                                    onChange={updateInput}
                                                    required type="text" className="form-control" placeholder="Task Name"/>
                                            </div>
                                            
                                            
                                            <div className="form-group">
                                               <textarea
                                                   name="info"
                                                   value={task.info}
                                                   onChange={updateInput}
                                                   required className="form-control" rows='2'  placeholder="Task Info"/>
                                            </div>
                                            <div>
                                                <input type="submit" className="btn btn-secondary btn-sm" value="Update"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div style={{marginBottom : '150px'}}/>
            </React.Fragment>
        </React.Fragment>
    )
};
export default UpdateTask;
