import React, { Component } from "react";
import { Container, Grid, Card, Icon, List, Checkbox } from "semantic-ui-react";
import TaskList from "../TaskList";
import * as taskData from "../../data.json";
import { getNextTaskType } from "../../api";
import TaskCreator from "../TaskCreator";
import Task from "../Task";
import TaskDTO from "../../domain/TaskDTO";
import * as appConfig from "../../appConfig.json";
class TodoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: taskData, loading: false };
    var self = this;
    fetch(appConfig.serverUrl + "/task?size=1000")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        self.setState({ tasks: myJson._embedded.task, loading: true });
      });
    this.getTasks = this.getTasks.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  getTasks(taskType) {
    return this.state.tasks.filter(task => task.taskType == taskType);
  }
  dragStart(event, taskType, id) {
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ type: taskType, id: id })
    );
    event.target.classList.add(".list-drag-border");
  }
  onDragOver(e) {
    e.preventDefault();
  }
  onDrop(e, taskType) {
    const source = JSON.parse(e.dataTransfer.getData("text"));
    const sourceTaskId = source.id;
    const sourceTaskType = source.type;
    const destinationTaskType = taskType;

    const taskUnderConsideration = this.state.tasks.find(
      tsk => tsk.id == sourceTaskId
    );
    //Get the Next status of the task
    const nextTaskType = destinationTaskType;
    Object.assign(taskUnderConsideration, { taskType: nextTaskType });
    var self = this;
    const finalTaskList = Object.create(
      this.state.tasks
        .filter(tsk => tsk.id == sourceTaskId)
        .concat(taskUnderConsideration)
    );
    fetch(taskUnderConsideration._links.self.href, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
        // "Content-Type": "application/x-www-form-urlencoded",
      },

      body: JSON.stringify({ taskType: nextTaskType })
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        self.setState({ finalTaskList });
      });
  }
  addTask(str, labels) {
    console.log(labels, "from addTask");
    var self = this;
    fetch(appConfig.serverUrl + "/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
        // "Content-Type": "application/x-www-form-urlencoded",
      },

      body: JSON.stringify({
        description: str,
        lebels: labels,
        taskType: "todo"
      })
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        const url = myJson._links.self.href;
        const id = url.slice(url.lastIndexOf("/")).substr(1);
        myJson.id = id;
        self.setState({
          tasks: self.state.tasks.concat(myJson)
        });
      });
  }
  render() {
    if (this.state.loading) {
      return (
        <Container>
          <TaskCreator handleClick={this.addTask} />
          <Container className="top-margin border-normal padding-normal">
            <Grid columns={3}>
              <Grid.Column
                key={1}
                onDragOver={e => this.onDragOver(e)}
                onDrop={e => {
                  this.onDrop(e, "todo");
                }}
              >
                <TaskList
                  taskType="todo"
                  tasks={this.getTasks("todo")}
                  dragStart={this.dragStart}
                />
              </Grid.Column>
              <Grid.Column
                key={2}
                onDragOver={e => this.onDragOver(e)}
                onDrop={e => {
                  this.onDrop(e, "doing");
                }}
              >
                <TaskList
                  taskType="doing"
                  tasks={this.getTasks("doing")}
                  dragStart={this.dragStart}
                />
              </Grid.Column>
              <Grid.Column
                key={3}
                onDragOver={e => this.onDragOver(e)}
                onDrop={e => {
                  this.onDrop(e, "done");
                }}
              >
                <TaskList
                  taskType="done"
                  tasks={this.getTasks("done")}
                  dragStart={this.dragStart}
                />
              </Grid.Column>
            </Grid>
          </Container>
        </Container>
      );
    } else {
      return <div />;
    }
  }
}
export default TodoListContainer;
