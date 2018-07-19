import React, { Component } from 'react'
import { Container, Grid, Card, Icon, List, Checkbox } from 'semantic-ui-react'
import TaskList from '../TaskList'
import * as taskData from '../../data.json' 
import {getNextTaskType} from '../../api'
import Task from '../Task'
class  TodoListContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {tasks:taskData}
      this.getTasks = this.getTasks.bind(this)
      this.handleClick = this.handleClick.bind(this)
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
    render(){
        console.log(this.state['doing'])
        return(
        <Container className="top-margin border-normal padding-normal"> 
            <Grid  columns={3}>
                <Grid.Column  key={1}>
                   <TaskList taskType="todo" tasks={this.getTasks('todo')} handleClick={this.handleClick}/>
                </Grid.Column>
                <Grid.Column key={2}>
                     <TaskList taskType="doing" tasks={this.getTasks('doing')} handleClick={this.handleClick}/>
                </Grid.Column>
                <Grid.Column key={3}>
                     <TaskList taskType="done" tasks={this.getTasks('done')} handleClick={this.handleClick}/>
                </Grid.Column>
            </Grid>
            <Task/>
        </Container>
        )
    }
}
export default TodoListContainer