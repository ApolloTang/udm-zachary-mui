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

const useStyles = makeStyles(
  (theme:Theme) => {

    const cssInJsProperties = {
      ...theme.mixins.toolbar
      // height of <MUI.Toolbar> is available in the above object
    }

    const out = { customNameInMakeStylesClassName: cssInJsProperties }
    console.log('xxxx: ', out)
    return out
  }
)

export default function Comp() {
  const classes = useStyles()

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h3" >Foo</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div
        /* this div has the height of the <MUI.Toolbar>*/
        className={classes.customNameInMakeStylesClassName}
      />
      hello world
    </>
  )
}



