import dom
import jsffi

var module {. importc, nodecl .}: JsObject

proc hello(): void =
  let doc = dom.document
  let h = dom.createElement(doc, "h1")
  h.appendChild(document.createTextNode("This heading was added from Nim"))
  doc.body.appendChild(h)

module.exports.hello = hello
