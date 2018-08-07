import React,{Component} from 'react'
import {Card, Icon, List, Button } from 'semantic-ui-react'
import Task from '../Task';
import TaskDTO  from '../../domain/TaskDTO'
const TaskList = ({taskType,tasks,handleClick,dragStart}) =>{
    return(
                <Card centered>
                    <Card.Content header={taskType} />
                    <Card.Content>
                        <List divided verticalAlign='middle'>
                            {tasks.map(tsk=>new TaskDTO(tsk._id,taskType,null,tsk.desc))
                            .map(task=><Task key={task._id} task={task}
                                dragStart={dragStart} 
                            handleClick={handleClick}/>)}
                        </List>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user' />
                        {tasks.length} tasks
                    </Card.Content>
                </Card>
)}

export default TaskList