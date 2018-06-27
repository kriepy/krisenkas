import * as React from "react";
import "./App.css";
import logo from "./assets/images/logo-small.png";

import DefinitionComponent from "./components/DefinitionComponent/DefinitionComponent";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo" onClick={this.onLogoClickHandler}>
            <img src={logo} alt="" />
          </div>
        </header>
        <div className="content">
          <h2 className="content-title">
            Here are some words I think are funny. I like to say them out loud
            and laugh!
          </h2>
          <div className="Definitions">
            <DefinitionComponent
              word="Ointment"
              phonetic="/ˈɔɪntm(ə)nt/"
              description="a smooth oily substance that is rubbed on the skin for medicinal purposes or as a cosmetic."
            />
            <DefinitionComponent
              word="nervous breakdown"
              phonetic="/ˈnərvəs ˈbreɪkdaʊn/"
              description="nervous breakdown and mental breakdown are dated terms describing emotional or physical stress that temporarily makes someone unable to function in day-to-day life."
            />
            <DefinitionComponent
              word="toboggan"
              phonetic="/təˈbɒɡ(ə)n/"
              description="a long, light, narrow vehicle, typically on runners, used for sliding downhill over snow or ice."
            />
          </div>
        </div>
      </div>
    );
  }

  private onLogoClickHandler() {
    console.log("Redirect to Home screen");
  }
}

export default App;
