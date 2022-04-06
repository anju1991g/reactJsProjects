import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export default class ListItem extends React.Component {
  getList = () => {
    if (this.props.list) {
      return this.props.list.map((item, index) => <li key={index}>{item}</li>);
    }
  };

  render() {
    return (
      <div className="Input">
        <ul>{this.getList()}</ul>
      </div>
    );
  }
}
ListItem.propTypes = {
  list: PropTypes.array
};
