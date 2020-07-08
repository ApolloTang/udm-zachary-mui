import React from 'react'
import ReactDOM from 'react-dom'
import {Helmet} from 'react-helmet'
import Comp from './component'

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
    <Comp />
  </div>
)

export default MyComponent

ReactDOM.render(<MyComponent />, document.getElementById('app'))
