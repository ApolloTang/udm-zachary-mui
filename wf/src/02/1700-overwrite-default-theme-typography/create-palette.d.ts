import * as createPalette from '@material-ui/core/styles/createPalette'

// ----------
// Reference:
// ----------
// Extended the default MUI type definition
// https://medium.com/javascript-in-plain-english/extend-material-ui-theme-in-typescript-a462e207131f
//
declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    fooPalette?: PaletteColorOptions
  }

  interface CommonColors {
    blue?: string
    orange?: string
  }
}

