import React, { Component } from 'react';
import store from 'redux/store';

const themeToProps = WrappedComponent => {
  class HOC extends Component {
    constructor(props) {
      super(props);

      this.state = store.getState();

      store.subscribe(() => {
        this.setState({
          theme: store.getState().theme,
        });
      });
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return HOC;
};

export default themeToProps;
