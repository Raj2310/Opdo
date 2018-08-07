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
      this.handleClick = this.handleClick.bind(this)
      this.dragStart = this.dragStart.bind(this)
      this.onDragOver = this.onDragOver.bind(this)
      this.onDrop = this.onDrop.bind(this)
    }
    getTasks(taskType){
        return this.state.tasks.filter((task)=>task.taskType==taskType)
    }
    
    handleClick(taskType,id){
        const taskUnderConsideration=this.state.tasks.find((tsk)=>tsk._id==id)
        //Get the Next status of the task
        const nextTaskType=getNextTaskType(taskType)
        Object.assign(taskUnderConsideration,{taskType:nextTaskType})
        const finalTaskList=Object.create(this.state.tasks.filter((tsk)=>tsk._id==id)
                                    .concat(taskUnderConsideration))
        this.setState({finalTaskList})
    }
    dragStart(e){
        //console.log("Drag started")
    }
    onDragOver(e){
        //console.log("Drag Over")
        e.preventDefault()
    }
    onDrop(e,taskType){
        console.log(taskType)
        
    }
    render(){
        return(
        <Container className="top-margin border-normal padding-normal"> 
            <Grid  columns={3}>
                <Grid.Column  key={1}
                onDragOver={(e)=>this.onDragOver(e)}
                onDrop={(e)=>{this.onDrop(e, "todo")}} >
                   <TaskList taskType="todo" tasks={this.getTasks('todo')} 
                   handleClick={this.handleClick} onDragStart={this.dragStart}/>
                </Grid.Column>
                <Grid.Column key={2}
                onDragOver={(e)=>this.onDragOver(e)}
                onDrop={(e)=>{this.onDrop(e, "doing")}}>
                     <TaskList taskType="doing" tasks={this.getTasks('doing')} 
                     handleClick={this.handleClick}
                     onDragStart={this.dragStart}/>
                </Grid.Column>
                <Grid.Column key={3}
                onDragOver={(e)=>this.onDragOver(e)}
                onDrop={(e)=>{this.onDrop(e, "done")}}>
                     <TaskList taskType="done" tasks={this.getTasks('done')} 
                     handleClick={this.handleClick}
                     onDragStart={this.dragStart}/>
                </Grid.Column>
            </Grid>
        </Container>
        )
    }
}
export default TodoListContainer