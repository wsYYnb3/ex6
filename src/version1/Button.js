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
export default Button;