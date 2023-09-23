//primitives --> const o let
typeof undefined // undefined
typeof true // boolean
typeof 1 // number
typeof "string" // string
typeof 2n // bigint
typeof Symbol() // symbol

typeof null // null*

const nombre = "fabio"
const segundoNombre = "fabio"
nombre === segundoNombre
"fabio" === "fabio"
1 === 1

;({a:1} === {a:1})
;([1,2,3] === [1,2,3])

//objects --> const
typeof {}
typeof []
const set = new Set()
typeof set

//function
typeof function(){}