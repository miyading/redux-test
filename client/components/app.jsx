import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Hello from './hello.jsx'
import Change from './change.jsx'
import {changeText, buttonClick} from '../actions/changeActions'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {actions, text} = this.props;
    return (
      <div>
        <Hello actions={actions} text={text}/>
        <Change actions={actions}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.text
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({changeText, buttonClick}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)