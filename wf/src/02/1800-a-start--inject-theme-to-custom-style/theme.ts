import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'

import {ThemeOptions} from '@material-ui/core/styles/createMuiTheme'

const archBlue = '#0B72B9'
const archOrange = '#FFBA60'

const themeOptionsOveride: ThemeOptions = {
  // -------------------------------------------- //
  // This obj will overwrite the MuiTheme default //
  // -------------------------------------------- //
  palette: {
    common: {
      blue: archBlue,          // custom CommonColors type
      orange: `${archOrange}`  // custom CommonColors type
    },
    primary: {
      main: archBlue           // overwrite, was main: purple[500]
    },
    secondary: {
      main: archOrange         // overwrite, was green[500]
    },
    fooPalette: {              // custom PaletteOptions type
      main: purple[500]
    }
  },
  typography: {
    h3: {
      fontWeight: 300          // custom global front weight for h3 varient
    }
  }
}

const theme = createMuiTheme(themeOptionsOveride)

export { theme }

