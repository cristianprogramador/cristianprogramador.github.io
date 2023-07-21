//call
const buttonPacman = document.querySelector('#buttonPacman');
const buttonMario = document.querySelector('#buttonMario');
const buttonTetris = document.querySelector('#buttonTetris');
const listaArray = document.querySelector('#lista');



//variables 
let check = true
let name = ''
let carrito = 0;

//carrito array
let arrayCarrito = []

//Games options 

const game = []

const game1 = {
    nombre: "Pac-Man",
    precio: 10
  };

const game2 = {
    nombre: "Super Mario Bros",
    precio: 15
  };

const game3 = {
    nombre: "Tetris",
    precio: 5
  };




//function de welcome con tu nombre
const welcome = () => {
    let name = prompt('Ingresa tu nombre')
    if (name === ''){
        return 'Nesecitamos tu nombre, gracias'
    }else{
        return alert(`Bienvenido!! ${name}`)
    }
    
};


// function de bucle seguir comprando 
const seguirComprando = () => {
    while (check) {
        let seguirCompras = prompt('Seguir comprando: Escribe si para continuar o no para finalizar?')

        if (seguirCompras == 'NO' || seguirCompras == 'no'){
            check = false;
            return finalizarCompra()
        }else if (seguirCompras == 'SI' || seguirCompras == 'si'){
            return opcionesCompras()
        }else{
            alert(`Opcion no valida ${this.name}` )
            return seguirComprando() 
        }
    }
};


const opcionesCompras = () =>{

    alert('Opciones en el catalogo: 1-Pac-Man, 2-Super Mario Bros y 3-Tetris')
    let optionUser = parseInt(prompt('Elige una opcion numerica del catalogo: 1-Pac-Pac, 2-Super Mario Bros y 3-Tetris'))

    if(optionUser === 1){
        addCarrito(game1)
        alert('Game Pac-man se agrego al carrito')
        return seguirComprando()
    }else if(optionUser === 2){
        addCarrito(game2)
        alert('Game Super Mario Bros se agrego al carrito')
        return seguirComprando()
    }else if (optionUser === 3){
        addCarrito(game3)
        alert('Game Tetris se agrego al carrito')
        return seguirComprando()
    }else{
        alert('Opcion numerica no valida')
        return opcionesCompras()
    }
}



//alert personalizado THE END 
const finalizarCompra = () =>{
    alert(`El total de tu compra es: ${carrito}`)
    Swal.fire(
        'Gracias por tu compra!',
        'Elige los juegos con toda confianza!',
        'success'
      )
};

//function add carrito
const addCarrito = (game) => {
    carrito += game.precio

  }





// imprimir listado en pantalla 
  const addListado = () => {
    arrayCarrito.push(game1.nombre)
    console.log(arrayCarrito)
    const listadoCompras = document.createElement('li');
    listadoCompras.innerHTML = game1.nombre
    lista.appendChild(listadoCompras);
  }
  const addListado2 = () => {
    arrayCarrito.push(game2.nombre)
    console.log(arrayCarrito)
    const listadoCompras = document.createElement('li');
    listadoCompras.innerHTML = game2.nombre
    lista.appendChild(listadoCompras);
  }
  const addListado3 = () => {
    arrayCarrito.push(game1.nombre)
    console.log(arrayCarrito)
    const listadoCompras = document.createElement('li');
    listadoCompras.innerHTML = game3.nombre
    lista.appendChild(listadoCompras);
  }



  //functions puedes comentar este condigo para ver las funciones del DOM
welcome()
opcionesCompras()
seguirComprando()



 //eventos
 buttonPacman.addEventListener('click', addListado)
 buttonMario.addEventListener('click', addListado2)
 buttonTetris.addEventListener('click', addListado3)