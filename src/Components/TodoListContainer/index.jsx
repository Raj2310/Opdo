import React, { Component } from 'react'
import { Container, Grid, Card, Icon, List, Checkbox } from 'semantic-ui-react'
import TaskList from '../TaskList'
const TodoListContainer = () => (
    <Container className="top-margin border-normal padding-normal"> 
        <Grid  columns={3}>
            <Grid.Column  key={1}>
               <TaskList taskType="todo"/>
            </Grid.Column>
            <Grid.Column key={2}>
                 <TaskList taskType="doing"/>
            </Grid.Column>
            <Grid.Column key={3}>
                 <TaskList taskType="done"/>
            </Grid.Column>
        </Grid>
    </Container>
)
export default TodoListContainer