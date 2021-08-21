import { BrowserRouter } from 'react-router-dom'
import {Route} from 'react-router-dom'
import './App.css'

import {Car} from './context/SaleContext'

import { Nav } from './templates/Nav'
import { Header } from './templates/Header'
import { Router } from './Router'

function App() {
  return (
    <Car>
      <BrowserRouter>
        <div className="app">
          <Nav />
          <Route path="/" component={Header} />
          <Router/>
        </div>
      </BrowserRouter>
    </Car>
  );
}

export default App;