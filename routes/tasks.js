const express = require('express')
const router = express.Router()

const {getAllTask,createTask,inprogressTask,completedTask,archievedTask,updateTask,deleteTask,getTask} 
= require('../controllers/tasks')
 

router.route('/getall').get(getAllTask)
router.route('/create').post(createTask)
router.route('/progress').get(inprogressTask)
router.route('/completed').get(completedTask)
router.route('/archieved').get(archievedTask)
router.route('/get/:id').get(getTask)
router.route('/update/:id').patch(updateTask)
router.route('/delete/:id').delete(deleteTask)


module.exports  = router
