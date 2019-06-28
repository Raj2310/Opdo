import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import * as appConfig from "../../appConfig.json";

export default class LabelDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: []
    };
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  componentDidMount() {
    this.mounted = true;
    if (this.mounted) {
      var self = this;
      fetch(appConfig.serverUrl + "/label?size=1000")
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          const labelsArray = myJson._embedded.label.map(element => {
            return {
              key: element.id,
              value: element.name,
              color: element.color,
              text: element.name
            };
          });
          self.setState({
            labels: labelsArray
          });
        });
    }
  }
  onAddItem = (e, data) => {
    console.log(e.getCurrentTarget());
    console.log(data);
    /*this.setState({
      labels: data.map(element => {
        return {
          name: element.name,
          color: this.state.labels.find(val => {
            return val.key === data.key;
          })
        };
      })
    });*/
    //this.props.onAddItem(this.state.labels);
  };
  render() {
    return (
      <Dropdown
        placeholder="Labels"
        fluid
        multiple
        search
        selection
        options={this.state.labels}
        onChange={this.onAddItem}
      />
    );
  }
}
