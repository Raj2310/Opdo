import React, { Component } from 'react'
import { Container, Grid, Card, Icon, List, Checkbox } from 'semantic-ui-react'
import TaskList from '../TaskList'
import * as taskData from '../../data.json' 

class  TodoListContainer extends Component {
    constructor(props) {
      super(props)
      // Don't call this.setState() here!
      this.state = taskData
      this.getTasks = this.getTasks.bind(this)
      this.handleClick = this.handleClick.bind(this)
    }
    getTasks(taskType){
        return this.state[taskType]
    }
    handleClick(taskType,id){
        const todo=this.state['todo'].filter((elm,index)=>index!=id)
        const doingArray=this.state['doing'].concat(this.state['todo'].slice(id,id+1))
        this.setState({
            todo:todo,
            doing:doingArray
        })
       
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
                     <TaskList taskType="doing" tasks={this.getTasks('doing')}/>
                </Grid.Column>
                <Grid.Column key={3}>
                     <TaskList taskType="done" tasks={this.getTasks('done')}/>
                </Grid.Column>
            </Grid>
        </Container>
        )
    }
}
export default TodoListContainer