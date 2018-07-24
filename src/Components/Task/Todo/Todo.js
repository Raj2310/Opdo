import Task from '../Task'

const TODO_TASK_TYPE='todo'
class Todo extends Task{
    constructor(_id,parentTask,desc){
        super(_id,parentTask,desc)
    }
    static getTaskType(){
        return TODO_TASK_TYPE
    }
}

export default Todo