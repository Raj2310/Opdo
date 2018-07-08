import React,{Component} from 'react'
import {Card, Icon, List, Checkbox } from 'semantic-ui-react'
import * as taskData from '../../data.json' 

const TaskList = ({taskType}) =>(
                <Card centered>
                    <Card.Content header={taskType} />
                    <Card.Content>
                        <List divided verticalAlign='middle'>
                            {taskData[taskType].map((tsk,index)=><List.Item key={index}>
                                <List.Content>
                                    <List.Header as='a'><Checkbox /> {tsk}</List.Header>
                                </List.Content>
                            </List.Item>)}
                        </List>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user' />
                        {taskData[taskType].length} tasks
                        </Card.Content>
                </Card>
)

export default TaskList