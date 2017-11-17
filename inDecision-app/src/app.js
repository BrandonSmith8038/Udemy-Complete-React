import React from 'react'
import ReactDOM from 'react-dom'
import validator from 'validator'

const template = React.createElement('p', {}, 'testing 123')

ReactDOM.render(template, document.getElementById('app'))
