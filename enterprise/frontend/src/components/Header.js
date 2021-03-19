import React from 'react'
import clsx from 'clsx'

import { useStyles } from '../styles/generalStyle'
import { useTheme } from '@material-ui/core/styles'

import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/MenuIcon'

const Header = () => {
  const styles = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
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
