import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import SidePanel from './components/SidePanel'

import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  return (
    <Router>
      <div>
        <CssBaseline />
        <Header></Header>
        <Footer></Footer>
        <SidePanel></SidePanel>
      </div>
    </Router>
  )
}

export default App
