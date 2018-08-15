const uuidv1 = require('uuid/v1')
class TaskDTO{
    constructor(id , taskType, parentTask, description) {
        if(id){
            this.id = id
        }else{
            this.id = uuidv1()
        }
        
        this.taskType=taskType
        this.parentTask=parentTask
        this.description=description
    }
   
}

export default TaskDTO