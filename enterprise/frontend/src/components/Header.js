import React from 'react'
import clsx from 'clsx'

import { useStyles } from '../styles/generalStyle'

import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

const Header = () => {
  const styles = useStyles()

  //const [open, setOpen] = React.useState(true)

  const open = false
  const handleDrawerOpen = () => {
    //setOpen(true)
  }

  return (
    <AppBar
      position='fixed'
      className={clsx(styles.appBar, {
        [styles.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          className={clsx(styles.menuButton, {
            [styles.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap>
          Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
