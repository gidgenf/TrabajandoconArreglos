// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
  // Sugerencia de cómo mostrar el array => showList(strangeArray);
  const filtro = strangeArray.filter((element) => typeof element === "string");
  const filtroEnMinusculas = filtro.map(element => element.toLowerCase());
  filtroEnMinusculas.sort();
  showList(filtroEnMinusculas);
});

//primero filtro los elementos pasandole un argumento de typeof con la condicion de que sean strings
//luego utilizo map para aplicar a cada elemento de la lista toLowerCase() para que todos queden en minusculas
//luego si utilizamos .sort para acomodar alfabeticamente los elementos de la lista
//y finalmente usamos showList(filtroEnMinusculas) que nos muestra solo los elementos de la lista que son strings ordenados alfabeticamente


 
