import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import SidePanel from './components/SidePanel'

import CssBaseline from '@material-ui/core/CssBaseline'

import MiniDrawer from './MiniDrawer'

import Paperbase from './Paperbase/Paperbase'
import AppTheme from './Paperbase/Paperbase'
import { createMuiTheme } from '@material-ui/core'
import { useStyles } from './styles/generalStyle'

const theme = createMuiTheme()

function App() {
  const styles = useStyles(theme)
  return (
    <Router>
      <div className={styles.root}>
        <CssBaseline />
        <Header theme={theme}></Header>
        <SidePanel theme={theme}></SidePanel>
      </div>
    </Router>
  )
}

function App2() {
  return <MiniDrawer />
}

function App3() {
  return (
    <AppTheme
      title='Paperbase theme - Material-UI'
      description={`A page that mimics Firebase.
    This item includes theming using the theme provider component.`}
    >
      <Paperbase />
    </AppTheme>
  )
}
export default App
