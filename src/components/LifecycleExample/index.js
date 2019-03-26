import React, { createRef } from 'react';

class LifecycleExample extends React.Component {
  state = { count: 0 };

  displatName = 'LifecycleComponent';

  defaultProps = {
    items: []
  }

  constructor(props) {
    super(props);

    this.refs = createRef();
  }

  handleClick = () => this.setState((state) => {
    return ({
      count: state.count + 1
    });
  });

  componentWillMount() {
    console.log('component will mount in DOM', this.refs);
  }

  componentDidMount() {
    console.log('Component mounted in DOM', this.refs);
  }

  static getDerivedStateFromProps(state, props) {
    console.log('call every time whene Component call render method');
  }

  static getDerivedStateFromError(error) {
    return {
      count: 0,
      errors: [error]
    }
  }

  render() {
    return (
      <div ref={this.refs}>
        <div>
          <span>Count: </span>
          <span>{this.state.count}</span>
        </div>
        <div>
          <button onClick={this.handleClick}>Click</button>
        </div>
      </div>
    );
  }
}

export default LifecycleExample;
