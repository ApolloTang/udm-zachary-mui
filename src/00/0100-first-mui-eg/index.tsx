import React from 'react'
import ReactDOM from 'react-dom'
import {Helmet} from 'react-helmet'
import Button from '@material-ui/core/Button'

const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

const MyComponent = () => (
  <div id="my-component">
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"></link>
    </Helmet>
    <Button variant="contained">
      click me
    </Button>
  </div>
)

export default MyComponent

ReactDOM.render(<MyComponent />, document.getElementById('app'))
