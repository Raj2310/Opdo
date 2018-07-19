import React,{Component} from 'react'
import {Card, Icon, List, Button } from 'semantic-ui-react'

const TaskList = ({taskType,tasks,handleClick}) =>{
    return(
                <Card centered>
                    <Card.Content header={taskType} />
                    <Card.Content>
                        <List divided verticalAlign='middle'>
                            {tasks.map((tsk,index)=><List.Item key={tsk._id}>
                                <List.Content floated='right'>
                                    <Button animated='vertical' size='mini' 
                                        onClick={(e,data)=>handleClick(taskType,tsk._id)}>
                                      <Button.Content hidden>Move</Button.Content>
                                      <Button.Content visible>
                                        <Icon name='right arrow' />
                                      </Button.Content>
                                    </Button>
                                </List.Content>
                                <List.Content>
                                    <List.Header as='a'>{tsk.desc}</List.Header>
                                </List.Content>
                            </List.Item>)}
                        </List>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user' />
                        {tasks.length} tasks
                    </Card.Content>
                </Card>
)}

export default TaskList