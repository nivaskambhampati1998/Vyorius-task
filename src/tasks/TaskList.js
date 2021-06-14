import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as taskActions from '../../src/redux/task/task.actions';
import * as taskReducer from '../../src/redux/task/task.reducer';


let TaskList = () => {
    let dispatch = useDispatch();

    let taskInfo = useSelector((state) => {
        return state[taskReducer.taskFeatureKey];
    });

    let {loading , tasks , errorMessage} = taskInfo;

    useEffect(() => {
        dispatch(taskActions.getAllTasks());
    } , []);

    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col animated zoomIn">
                            <p className="h3 text-success">Task List</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet consequuntur, corporis, cumque dolore ea enim esse eveniet exercitationem fugit in iste itaque necessitatibus nemo nisi officiis qui totam. Explicabo!</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ?
                    <React.Fragment>
                         null

                    </React.Fragment> :
                    <section className="p-3">
                        <div className="container">
                            <div className="row">
                                {
                                    tasks.length > 0 ?
                                        <React.Fragment>
                                            {
                                                tasks.map(task => {
                                                    return (
                                                        <div key={task._id} className="col-md-3">
                                                            <div className="card animated zoomIn">
                                                                <div className="card-body text-center">
                                                                    <ul className="list-group">
                                                                        <li className="list-group-item">
                                                                            Name : {task.name}
                                                                        </li>
                                                                        <li className="list-group-item">
                                                                            Description :  {task.info}
                                                                        </li>
                                                                        
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </React.Fragment> : <React.Fragment>
                                            <div className="text-center">
                                                <p className="text-danger font-weight-bold text-center">
                                                    ----------- NO Tasks Found --------
                                                </p>
                                            </div>
                                        </React.Fragment>
                                }
                            </div>
                        </div>
                    </section>
            }

        </React.Fragment>
    )
};
export default TaskList;
