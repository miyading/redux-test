import {render} from 'react-dom'
import {Provider} from 'react-redux'

import App from './components/app.jsx'
import store from './stores/changeStore'
/*//action
function changeText() {
  return {
    type: 'CHANGE_TEXT'
  }
}

function buttonClick() {
  return {
    type: 'BUTTON_CLICK'
  }
}

//reducer
const initialState = {
  text: 'Hello'
}

function myApp(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        text: (state.text == 'Hello') ? 'Stark' : 'Hello'
      }
    case 'BUTTON_CLICK':
      return {
        text: 'You just click button'
      }
    default:
      return {
        text: 'Hello'
      }
  }
}

//store
let store = createStore(myApp);

//Hello
class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.actions.changeText();
  }

  render() {
    return (
      <h1 onClick={this.handleClick}> {this.props.text} </h1>
    );
  }
}

//Change
class Change extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.actions.buttonClick();
  }

  render() {
    return (
      <button onClick={this.handleClick}> change </button>
    );
  }
}

//App
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

//connect React component with Redux
function mapStateToProps(state) {

  return {
    text: state.text
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
        changeText: changeText,
        buttonClick: buttonClick
      },
      dispatch
    )
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App)*/
//Provider是react-redux直接提供的
render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById('root')
)