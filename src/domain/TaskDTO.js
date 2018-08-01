class TaskDTO{
    constructor(_id,taskType,parentTask,description){
        this._id=_id
        this.taskType=taskType
        this.parentTask=parentTask
        this.description=description
    }
   
}

export default TaskDTO