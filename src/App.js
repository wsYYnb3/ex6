
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }
  render() {
    const buttonClasses = `btn ${this.props.isLeft ? 'btn-danger' : 'btn-success'} rounded-pill`;

    return (
      <button className={buttonClasses} onClick={() => this.props.onClick(this.state.value)}>
        {this.state.value}
      </button>
    );
  }
}

class Line extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center line">
        <Button value={this.props.value1} onClick={this.props.onClick} isLeft={true} />
        <Button value={this.props.value2} onClick={this.props.onClick} isLeft={false} />
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
  }
  handleClick = (value) => {
    this.setState({ value: value });
  }
  render() {
    const { value } = this.state;

    return (
      <div className="app-container">
        <Line value1="1" value2="2" onClick={this.handleClick} />
        <Line value1="2" value2="4" onClick={this.handleClick} />
        <Line value1="3" value2="6" onClick={this.handleClick} />
        <Line value1="4" value2="8" onClick={this.handleClick} />
        <Line value1="5" value2="10" onClick={this.handleClick} />
        <Line value1="6" value2="12" onClick={this.handleClick} />
        {value && (
          <div className="result-container">
            <p>{`You've clicked ${value}`}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
