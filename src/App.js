import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Setting from './components/Setting'

import './App.css'

const App = () => (
  <div className="app-container">
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/setting" component={Setting} />
    </Switch>
  </div>
)

export default App
