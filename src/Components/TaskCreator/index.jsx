import React, { Component } from "react";
import { Button, Header, Icon, Modal, Input } from "semantic-ui-react";
import LabelDropdown from "./LabelDropdown";

export default class TaskCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      taskText: "",
      labels: []
    };
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleChange = (ev, data) => {
    this.setState({ taskText: data.value });
  };

  handleClick = () => {
    console.log(this.state.labels, "from TaskCreator");

    this.props.handleClick(this.state.taskText, this.state.labels);
    this.setState({
      modalOpen: false
    });
  };
  handleLableAdded = (e, data) => {
    this.setState({
      labels: data.value
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
          <LabelDropdown onAddItem={this.handleLableAdded} />
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
