import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import Typography from '@material-ui/core/Typography'

const getText = (copy: number) =>
  [...new Array(copy)]
    .map(
      () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
    )
    .join('\n')

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
        <AppBar>
          <Toolbar>
            <Typography
              variant="h3"      /* <--- use overwritten varient */
              color="secondary" /* <--- use overwritten secondary */
            >
              Foo
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {getText(100)}
    </div>
  )
}
