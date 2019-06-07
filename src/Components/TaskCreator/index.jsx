import React, { Component } from "react";
import {
  Button,
  Header,
  Icon,
  Modal,
  Input,
  Dropdown
} from "semantic-ui-react";

export default class TaskCreator extends Component {
  state = {
    modalOpen: false,
    taskText: "",
    labels: [
      { key: "Read Book", text: "Read Book", value: "Read Book" },
      { key: "Coding", text: "Coding", value: "Coding" }
    ]
  };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleChange = (ev, data) => {
    this.setState({ taskText: data.value });
  };

  handleClick = () => {
    this.props.handleClick(this.state.taskText);
    this.setState({
      modalOpen: false
    });
  };
  render() {
    return (
      <Modal
        trigger={
          <Button onClick={this.handleOpen} floated="right">
            Create
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="small"
      >
        <Header icon="edit" content="New Task" />
        <Modal.Content>
          <Input onChange={this.handleChange} placeholder="Learn Rx..." />
          <Dropdown
            placeholder="Labels"
            fluid
            multiple
            search
            selection
            options={this.state.labels}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="green"
            onClick={this.handleClick}
            inverted
            disabled={!this.state.taskText}
          >
            <Icon name="checkmark" /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
