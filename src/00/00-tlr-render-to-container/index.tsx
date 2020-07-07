import React from 'react'
import ReactDOM from 'react-dom'
import {Helmet} from 'react-helmet'

const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

const MyComponent = () => (
  <div id="my-component">
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'></link>
    </Helmet>
    <span style={{ color: 'red' }}> Hello World </span>
  </div>
)

export default MyComponent

ReactDOM.render(<MyComponent />, document.getElementById('app'))
