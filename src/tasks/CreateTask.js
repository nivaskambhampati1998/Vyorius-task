import React, {useState} from "react";
import Axios from "axios";
import {useHistory} from 'react-router-dom';
import * as taskActions from '../../src/redux/task/task.actions';
import {useDispatch} from "react-redux";

let CreateTask = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    let [task, setTask] = useState({
        name : '',
        info : ''
    });

    

    let updateInput = (event) => {
        setTask({
            ...task,
            [event.target.name] : event.target.value
        });
    };

    let submitTask = (event) => {
        event.preventDefault();
        dispatch(taskActions.createTask(task, history));
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col animated zoomIn">
                                <p className="h3 text-success">Create a Task</p>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet consequuntur, corporis, cumque dolore ea enim esse eveniet exercitationem fugit in iste itaque necessitatibus nemo nisi officiis qui totam. Explicabo!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card animated zoomInLeft delay-1s">
                                    <div className="card-header bg-success text-white">
                                        <p className="h4">Create New</p>
                                    </div>
                                    <div className="card-body rgba-light-green-light">
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
                                                <input type="submit" className="btn btn-success btn-sm" value="Create"/>
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
export default CreateTask;
