import React from 'react';
import Button from './Button';
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
export default Line;