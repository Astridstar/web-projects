import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import SidePanel from './components/SidePanel'

import CssBaseline from '@material-ui/core/CssBaseline'

import MiniDrawer from './MiniDrawer'

import Paperbase from './Paperbase/Paperbase'
import AppTheme from './Paperbase/Paperbase'
import { createMuiTheme, Typography } from '@material-ui/core'
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
        <main className={styles.content}>
          <div className={styles.toolbar} />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
        </main>
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
