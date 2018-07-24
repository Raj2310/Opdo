import React, { Component } from 'react'
import {Card, Icon, List, Button } from 'semantic-ui-react'
import Todo from './Todo/Todo.js'

class Task extends Component {
  constructor(props){
    super(props)
    console.log(props)
     }
  render() {
    return (
      <div>
        <List.Content floated='right'>
          <Button animated='vertical' size='mini'>
            <Button.Content hidden>Move</Button.Content>
            <Button.Content visible>
              <Icon name='right arrow' />
            </Button.Content>
          </Button>
        </List.Content>
        <List.Content>
          <List.Header as='a'>{this.props.desc}</List.Header>
        </List.Content>
      </div>
    );
  }
}

export default Task;
