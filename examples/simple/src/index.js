import nimModule from './demo.nim'

const h = document.createElement('h1')
h.textContent = "This heading was added from index.js"
document.body.appendChild(h)

nimModule.hello()