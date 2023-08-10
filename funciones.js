
function walkTree(node) {
    if (node == null)
      //
      return;
    // hacer algo con el nodo
    for (var i = 0; i < node.childNodes.length; i++) {
      walkTree(node.childNodes[i]);
    }
  }




  //  function 

  function SUMAR(a,b){
      return console.log(a+b);
  }

  SUMAR(1,2);

  // arrow function

    const SUMAR2 = (a,b) => console.log(a+b);

//  

const fecha = new Date();

//tipos 

// forech

const array = [1,2,3,4,5,6,7,8,9,10];

const arr1= array.forEach(element =>console.log( element));
console.log(arr1);

// map

const arr2 = array.map(element => element*2);
console.log(arr2);


// busqueda
const frutas = [1,2,3,4,5,6,7,8,9,10];
const arr3 = frutas.find(element => element > 5);
console.log(arr3);

// filter

const arr4 = frutas.filter(element => element > 5);
console.log(arr4);

// includes

const arr5 = array.includes(5);


//   metodo  de actualizacion  contacto
let contactos =[{id:1, nombre:'Juan', edad: 20},{id:2, nombre:'Pedro', edad: 30},{id:3, nombre:'Maria', edad: 40}];


const updateContacto = (id) => {
    const contacto = contactos.find(contacto => contacto.id === id);
    contacto.nombre = 'Juan Carlos';
    console.log(contactos);
}


updateContacto(1);