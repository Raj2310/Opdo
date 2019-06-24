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
              text: element.name
            };
          });
          self.setState({
            labels: myJson._embedded.label.map(element => {
              return {
                key: element.id,
                value: element.name,
                text: element.name
              };
            })
          });
        });
    }
  }
  render() {
    return (
      <Dropdown
        placeholder="Labels"
        fluid
        multiple
        search
        selection
        options={this.state.labels}
      />
    );
  }
}
