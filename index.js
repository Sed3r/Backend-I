const mostrarLista = (lista) => {
if (lista.length === 0) return "Lista vacía";
lista.forEach(e => console.log(e));
return `La lista tiene ${lista.length} elementos`;
}

// casos de prueba

const frutas = ['manzana', 'banana', 'cereza'];

// Caso 1: lista vacía
console.log(mostrarLista([]));
// Caso 2: lista con elementos
console.log(mostrarLista(frutas));


