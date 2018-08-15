import React, { Component } from 'react'
import {Card, Icon, List, Button } from 'semantic-ui-react'

class Task extends Component{
  constructor(props) {
    super(props)
    this.state = {drag:false}
    this.drag = this.drag.bind(this)
    this.dragEnd= this.dragEnd.bind(this)
  }
  drag(e){
    this.props.dragStart(e,this.props.task.taskType, this.props.task.id)
    this.setState({
      drag:true
    })

  }
  dragEnd(e){
    this.setState({
      drag:false
    })
  }
  render(){
    let classes='list-floated '
    if(this.state.drag){
      classes=classes+'list-drag-border'
    }
    
    return(
      <List.Item draggable 
      onDragStart={this.drag}
      onDragEnd = {this.dragEnd} 
      className={classes}>
        <List.Content>
          <List.Header as='a'>{this.props.task.description}</List.Header>
        </List.Content>
      </List.Item>
    )
  }
}
export default Task;
