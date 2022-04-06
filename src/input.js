import React from "react";
import ListItem from "./listItem";
import PropTypes from "prop-types";
import "./styles.css";
let list1 = [];
export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      list: []
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };
  addToList = () => {
    list1.push(this.state.value);
    this.setState({
      list: list1,
      value: ""
    });
  };

  render() {
    return (
      <div className="Input">
        <label>{this.props.title}</label>
        <input type="text" onChange={this.onChange} value={this.state.value} />
        <button onClick={this.addToList}>Add</button>
        <ListItem list={this.state.list} />
      </div>
    );
  }
}
Input.propTypes = {
  list: PropTypes.array,
  title: PropTypes.string
};
