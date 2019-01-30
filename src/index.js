import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
}

class App extends React.Component {
  handleClick(event) {
    alert("Aldebaran is a Red Supergiant located in the Consteallattion Tauri");
  }

  render() {
    return (
      <div style={styles}>
        <h2>Aldebaran</h2>
        <p>Click the Button Below</p>
        <button onClick={this.handleClick.bind(this)}>
          Show
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
