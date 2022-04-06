import React from "react";
import Input from "./input";
import "./styles.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Input title="todo app" />
      </div>
    );
  }
}
