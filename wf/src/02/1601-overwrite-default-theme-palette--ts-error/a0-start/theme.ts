import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'

const archBlue = '#0B72B9'
const archOrange = '#FFBA60'

const themeOptionsOveride = {
  // -------------------------------------------- //
  // This obj will overwrite the MuiTheme default //
  // -------------------------------------------- //
  palette: {
    common: {
      myColor: `${archOrange}`  // custom CommonColors result in type error
    }
  }
}

const theme = createMuiTheme(themeOptionsOveride)

export { theme }

