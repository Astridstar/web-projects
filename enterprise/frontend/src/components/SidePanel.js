import React from 'react'
import clsx from 'clsx'

import { useStyles } from '../styles/generalStyle'
import { useTheme } from '@material-ui/core/styles'

import {
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeftIcon'
import ChevronRightIcon from '@material-ui/icons/ChevronRightIcon'
import InboxIcon from '@material-ui/icons/InboxIcon'
import MailIcon from '@material-ui/icons/MailIcon'

const SidePanel = () => {
  const styles = useStyles()

  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Drawer
      variant='permanent'
      className={clsx(styles.drawer, {
        [styles.drawerOpen]: open,
        [styles.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [styles.drawerOpen]: open,
          [styles.drawerClose]: !open,
        }),
      }}
    >
      <div className={styles.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default SidePanel
