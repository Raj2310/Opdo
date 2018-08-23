import React,{Component} from 'react'
import {Card, Icon, List, Button } from 'semantic-ui-react'
import ArchieveTask from '../Task/ArchieveTask';
import TaskDTO  from '../../domain/TaskDTO'
const TaskList = ({ taskType, tasks, handleClick, dragStart}) =>{
    return(
                <Card centered>
                    <Card.Content header={taskType} />
                    <Card.Content>
                        <List divided verticalAlign='middle'>
                            {tasks
                            .map(task=><ArchieveTask key={task.id} task={task}
                                dragStart={dragStart} />)}
                        </List>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user' />
                        {tasks.length} tasks
                    </Card.Content>
                </Card>
)}

export default TaskList