import React, { Component } from 'react'
import {Card, Icon, List, Button } from 'semantic-ui-react'

const Task=({task,handleClick,dragStart})=>{
  return (
      <List.Item draggable 
      onDragStart={(e) => dragStart(e,task.taskType, task._id)} 
      >
        <List.Content>
          <List.Header as='a'>{task.description}</List.Header>
        </List.Content>
      </List.Item>
  )
}
export default Task;
