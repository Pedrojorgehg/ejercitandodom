//* Obtiene un elemnento por id
document.getElementById('someid')

//* Obtiene una lista con los elementos con esa clase
document.getElementsByClassName('someclass')

//* Obtiene una HTMLCollection con todos los elementos "li"
document.getElementsByTagName('li')

// *Devuelve el primer elemento del documento que cumpla la selección
//* (la notación es como en css con `.`devuelve clase , con "#" devuelve id con " "devuelve la etiqueta que incluyas)
document.querySelector('.someclass')

//* Devuelve una lista de elementos que cumplan con la selección
//* (la notación es como en css)
document.querySelectorAll('div.note')
document.querySelectorAll('div.note, div.alert')

//*Métodos de acceso a elementos hijos y padre
//*Através de los selectores de padre o hijos podemos acceder a un elemento si es que este no es obtenible de una forma más directa.
//? Obtener los nodos hijos de un elemento
let elem = document.getElementById('someid')
let hijos = elem.childNodes

//? Obtener el nodo padre
let padre = elem.parentNode
