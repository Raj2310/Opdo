const uuidv1 = require('uuid/v1')
class TaskDTO{
    constructor(_id , taskType, parentTask, description) {
        if(_id){
            this._id = _id
        }else{
            this._id = uuidv1()
        }
        
        this.taskType=taskType
        this.parentTask=parentTask
        this.description=description
    }
   
}

export default TaskDTO