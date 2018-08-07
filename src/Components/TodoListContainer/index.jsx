import React, { Component } from 'react'
import { Container, Grid, Card, Icon, List, Checkbox } from 'semantic-ui-react'
import TaskList from '../TaskList'
import * as taskData from '../../data.json' 
import {getNextTaskType} from '../../api'
class  TodoListContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {tasks:taskData}
      this.getTasks = this.getTasks.bind(this)
      this.dragStart = this.dragStart.bind(this)
      this.onDragOver = this.onDragOver.bind(this)
      this.onDrop = this.onDrop.bind(this)
    }
    getTasks(taskType){
        return this.state.tasks.filter((task)=>task.taskType==taskType)
    }
    dragStart(event,taskType, _id){
        event.dataTransfer.setData("text/plain", JSON.stringify({type:taskType,id:_id}))
        //console.log(taskType, _id)
    }
    onDragOver(e){
        //console.log("Drag Over")
        e.preventDefault()
    }
    onDrop(e,taskType){
        const source = JSON.parse(e.dataTransfer.getData("text"))
        const sourceTaskId=source.id
        const sourceTaskType = source.type
        const destinationTaskType = taskType

        const taskUnderConsideration = this.state.tasks.find((tsk) => tsk._id == sourceTaskId)
        //Get the Next status of the task
        const nextTaskType = destinationTaskType
        Object.assign(taskUnderConsideration, { taskType: nextTaskType })
        const finalTaskList = Object.create(this.state.tasks.filter((tsk) => tsk._id == sourceTaskId)
            .concat(taskUnderConsideration))
        this.setState({ finalTaskList })
        
    }
    render(){
        return(
        <Container className="top-margin border-normal padding-normal"> 
            <Grid  columns={3}>
                <Grid.Column  key={1}
                onDragOver={(e)=>this.onDragOver(e)}
                onDrop={(e)=>{this.onDrop(e, "todo")}} >
                   <TaskList taskType="todo" tasks={this.getTasks('todo')} 
                            dragStart={this.dragStart}/>
                </Grid.Column>
                <Grid.Column key={2}
                onDragOver={(e)=>this.onDragOver(e)}
                onDrop={(e)=>{this.onDrop(e, "doing")}}>
                     <TaskList taskType="doing" tasks={this.getTasks('doing')} 
                     dragStart={this.dragStart}/>
                </Grid.Column>
                <Grid.Column key={3}
                onDragOver={(e)=>this.onDragOver(e)}
                onDrop={(e)=>{this.onDrop(e, "done")}}>
                     <TaskList taskType="done" tasks={this.getTasks('done')} 
                            dragStart={this.dragStart}/>
                </Grid.Column>
            </Grid>
        </Container>
        )
    }
}
export default TodoListContainer