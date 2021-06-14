const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const authenticate = require("../middlewares/authenticate");

/*
    USAGE : Get all the tasks
    URL : http://127.0.0.1:5000/api/tasks
	REQUEST : GET
	method : router.get()
	fields : no-fields
 */
router.get('/tasks', async (request , response) => {
    try {
        let tasks = await Task.find();
        response.status(200).json(tasks);
    }
    catch (error) {
        console.error(error);
        response.status(500).json({
            error : error.message
        });
    }
});

/*
    USAGE : Get a single task
    URL : http://127.0.0.1:5000/api/tasks/:id
	REQUEST : GET
	method : router.get()
	fields : no-fields
 */
router.get('/tasks/:id', authenticate, async (request , response) => {
    let taskId = request.params.id;
    try {
        let tasks = await Task.findById(taskId);
        response.status(200).json(tasks);
    }
    catch (error) {
        console.error(error);
        response.status(500).json({
            error : error.message
        });
    }
});

/*
    USAGE : Create a task
    URL : http://127.0.0.1:5000/api/tasks/
	REQUEST : POST
	method : router.post()
	fields : name , info
 */
router.post('/tasks', authenticate, async (request , response) => {
    let newTask = {
        name : request.body.name,
        info : request.body.info
    };
    try {
        // if task is already exists
        let task = await Task.findOne({name : newTask.name});
        if(task){
            return response.status(401).json({
                msg : 'Task is Already Exists'
            });
        }
        // save to database
        task = new Task(newTask);
        task = await task.save();
        response.status(200).json({
            result : 'Task Creation success',
            task : task
        });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({
            error : error.message
        });
    }
});

/*
    USAGE : Update a task
    URL : http://127.0.0.1:5000/api/tasks/:id
	REQUEST : PUT
	method : router.put()
	fields : name , info
 */
router.put('/tasks/:id', authenticate, async (request , response) => {
    let taskId = request.params.id;
    let updateTask = {
        name : request.body.name,
        info : request.body.info
    };
    try {
        // if task is already exists
        let task = await Task.findById(taskId);
        if(!task){
            return response.status(401).json({
                msg : 'Task is Not Exists'
            });
        }
        // update to database
        task = await Task.findByIdAndUpdate(taskId, {
           $set : updateTask
        }, {new : true});
        response.status(200).json({
            result : 'Task Update is success',
            task : task
        });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({
            error : error.message
        });
    }
});

/*
    USAGE : Delete a task
    URL : http://127.0.0.1:5000/api/task/:id
	REQUEST : DELETE
	method : router.delete()
	fields : no-fields
 */
router.delete('/tasks/:id', authenticate, async (request , response) => {
    let taskId = request.params.id;
    try {
        // if task is already exists
        let task = await Task.findById(taskId);
        if(!task){
            return response.status(401).json({
                msg : 'Task is Not Exists'
            });
        }
        // delete from database
        task = await Task.findByIdAndDelete(taskId);
        response.status(200).json({
            result : 'Task Deletion is success',
            task : task
        });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({
            error : error.message
        });
    }
});

module.exports = router;
