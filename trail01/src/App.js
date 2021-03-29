import './styles/App.css'

import { createMuiTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

import Header from './components/Header'
import SideNavigator from './components/SideNavigator'
import Dashboard from './components/Dashboard'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}))

function App() {
  const theme = createMuiTheme()
  const classes = useStyles(theme)
  return (
    <div className={classes.grow}>
      <Header currentTheme={theme} />
      <SideNavigator currentTheme={theme} />
      <Dashboard currentTheme={theme} />
    </div>
  )
}

export default App
