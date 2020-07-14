import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import { makeStyles, Theme } from '@material-ui/core/styles'


interface Props {
  children: React.ReactElement
}

function ElevationScroll(props: Props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  const propsToPassToChildren = { elevation: trigger ? 4 : 0 }
  return React.cloneElement(children, propsToPassToChildren)
}

export default function Comp() {
  return (
    <div>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h3" >Foo</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      hello world
    </div>
  )
}
