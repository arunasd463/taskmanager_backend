const Task = require('../models/tasks')

const getAllTask = async(req,res) =>{
    try{
        const task = await Task.find({})
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({ msg: error})
    }
    
}

const createTask =async (req,res) =>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json(task)
    }catch(error){
        res.status(500).json({ msg: error})
    }
}

const inprogressTask = async(req,res) =>{
    try{
        const task = await Task.find({completed:false})
        res.status(200).json({task})
    }catch (error) {
        res.status(500).json({ msg: error})
    }
}

const completedTask = async(req,res) =>{
    const query = Task.find({completed:true});
    query.select();
    query.limit(10);
    query.sort({ completedtime: -1 });

    query.exec((err, result) => {
        res.send(result);
    })
}

const archievedTask = async(req,res) =>{
    try{
        const task = await Task.find({completed:true})
        res.status(200).json({task})
    }catch (error) {
        res.status(500).json({ msg: error})
    }

}

const getTask =async(req,res) =>{
    try{
        const {id:taskId} = req.params
        const task = await Task.findOne({_id:taskId})
        res.status(200).json({task})
    }catch (error) {
        res.status(404).json({ msg: error})
    }
}


const deleteTask =async(req,res) =>{
    try{
        const {id:taskId} = req.params
        const task = await Task.findOneAndDelete({_id:taskId})
        if(!task){
            return res.status(404).json({msg : `NO task with id : ${taskId}`})
        }
    res.status(200).json({task})
    }catch (error) {
        res.status(500).json({ msg: error})
    }
}

const updateTask =async(req,res) =>{
    try{
        const {id:taskId} = req.params
        const task = await Task.findOneAndUpdate({_id:taskId},req.body,{
            new:true,
            runValidators:true
        })  
        if(!task){
            return res.status(404).json({msg : `NO task with id : ${taskId}`})
        }
    res.status(200).json({task})
    }catch (error) {
        res.status(500).json({ msg: error})
    }
}




module.exports = {
    getAllTask,
    createTask,
    inprogressTask,
    completedTask,
    archievedTask,
    updateTask,
    deleteTask,
    getTask
}
