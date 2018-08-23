import React, { Component } from 'react'
import {Card, Icon, List, Button } from 'semantic-ui-react'

import Task from './index'
export default class ArchieveTask extends Task{
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
              <List.Header as='a'>{this.props.task.description}
              <Button circular icon='delete' floated='right'/>
              </List.Header>
            </List.Content>
          </List.Item>
        )
      }
 }