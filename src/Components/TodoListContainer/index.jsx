import React, { Component } from 'react'
import { Container, Grid, Card, Icon, List, Checkbox } from 'semantic-ui-react'

const TodoListContainer = () => (
    <Container className="top-margin border-normal padding-normal"> 
        <Grid  columns={3}>
            <Grid.Column  key={1}>
                <Card centered>
                    <Card.Content header='Todo' />
                    <Card.Content>
                        <List divided verticalAlign='middle'>
                            <List.Item>
                                <List.Content>
                                    <List.Header as='a'><Checkbox /> Task1</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header as='a'><Checkbox /> Task2</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header as='a'><Checkbox /> Task3</List.Header>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user' />
                        3 tasks
                        </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column key={2}>
                <Card>
                    <Card.Content header='Doing' />
                    <Card.Content>
                        <List divided verticalAlign='middle'>
                            <List.Item>

                                <List.Content>
                                    <List.Header as='a'><Checkbox /> Task1</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header as='a'><Checkbox /> Task2</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header as='a'><Checkbox /> Task3</List.Header>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user' />
                        3 tasks
                        </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column key={3}>
                <Card>
                    <Card.Content header='Done' />
                    <Card.Content>
                        <List divided verticalAlign='middle'>
                            <List.Item>

                                <List.Content>
                                    <List.Header as='a'><Checkbox /> Task1</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header as='a'><Checkbox /> Task2</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header as='a'><Checkbox /> Task3</List.Header>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user' />
                        3 tasks
                        </Card.Content>
                </Card>
            </Grid.Column>
        </Grid>
    </Container>
)
export default TodoListContainer