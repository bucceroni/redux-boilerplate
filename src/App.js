import React from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions/actions";

class Home extends React.Component {

  componentDidMount() {
    const { actions } = this.props;
    actions.getUpcoming();
  }

  // state = {
  //   react_state: 0
  // }

  // handleInc() {
  //   this.setState({
  //     react_state: this.state.react_state + 1
  //   })
  // }

  // handleDec() {
  //   this.setState({
  //     react_state: this.state.react_state - 1
  //   })
  // }

  render() {
    return (
      // <div>
      //   <button onClick={() => this.handleInc()}>+</button>
      //   <br />
      //   <span>{this.state.react_state}</span>
      //   <br />
      //   <button onClick={() => this.handleDec()}>-</button>
      // </div>
      <div>
        <div>
          <button onClick={() => this.props.actions.incCount()}>+</button>
          <br />
          <span>{this.props.count}</span>
          <br />
          <button onClick={() => this.props.actions.decCount()}>-</button>
        </div>
        <div>
          {JSON.stringify(this.props.upcoming)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    upcoming: state.reducer.upcoming,
    count: state.reducer.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        ...actions
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);