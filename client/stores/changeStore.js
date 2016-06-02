import {createStore} from 'redux'
import myApp from '../reducers/changeReducer'

export default function store() {
  return createStore(myApp)
}