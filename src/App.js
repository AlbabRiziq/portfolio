import React from "react";
import "./App.css";
import Body from "./Component/Body/Body";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="flex justify-center content-center w-screen">
        <Body />
      </div>
    );
  }
}

export default App;
