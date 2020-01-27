import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import NavBar from './component/NavBar/NavBar.jsx'
import MainProjectComponent from './component/MainPage/MainProjectComponent.jsx'
import InformationPageComponent from './component/InformationPage/InformationPageComponent.jsx'
import '@styles/styles.css'

ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path = '/' component = { MainProjectComponent } />
        <Route path ='/informationpage' component ={ InformationPageComponent } />
      </Switch>
    </BrowserRouter>
    </Provider>, document.getElementById( 'root' )
);
