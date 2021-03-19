import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import SidePanel from './components/SidePanel'

import CssBaseline from '@material-ui/core/CssBaseline'

import { useStyles } from './styles/generalStyle'

import MiniDrawer from './MiniDrawer'

function App1() {
  const styles = useStyles()
  return (
    <Router>
      <div className={styles.root}>
        <CssBaseline />
        <Header></Header>
        <SidePanel></SidePanel>
      </div>
    </Router>
  )
}

function App() {
  return <MiniDrawer />
}

export default App
