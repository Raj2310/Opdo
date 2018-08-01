import React, { Component } from 'react'
import {Card, Icon, List, Button } from 'semantic-ui-react'

const Task=({task,handleClick})=>{
  return (
      <List.Item>
        <List.Content floated='right'>
          <Button animated='vertical' size='mini'
          onClick={(e,data)=>handleClick(task.taskType,task._id)}>
            <Button.Content hidden>Move</Button.Content>
            <Button.Content visible>
              <Icon name='right arrow' />
            </Button.Content>
          </Button>
        </List.Content>
        <List.Content>
          <List.Header as='a'>{task.description}</List.Header>
        </List.Content>
      </List.Item>
  )
}
export default Task;
