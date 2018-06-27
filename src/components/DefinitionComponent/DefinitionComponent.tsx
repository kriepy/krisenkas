import * as React from "react";

import "./DefinitionComponent.css";

interface IDefinitionProps {
  word: string;
  phonetic: string;
  description: string;
}

class DefinitionComponent extends React.Component<IDefinitionProps, {}> {
  constructor(props: IDefinitionProps) {
    super(props);
  }
  public render() {
    return (
      <div className="DefinitionMain">
        <div className="DefinitionHeader">
          <h1>{this.props.word}</h1>
          <h2>{this.props.phonetic}</h2>
        </div>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default DefinitionComponent;
