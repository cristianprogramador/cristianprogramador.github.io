
//variables 
let check = true
let name = ''
let carrito = 0;


//Games options 
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


//functions
welcome()
opcionesCompras()
seguirComprando()




//function de welcome con tu nombre
function welcome(){
    let name = prompt('Ingresa tu nombre')
    if (name === ''){
        return 'Nesecitamos tu nombre, gracias'
    }else{
        return alert(`Bienvenido!! ${name}`)
    }
    
};


// function de bucle seguir comprando 
function seguirComprando(){
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


function opcionesCompras(){

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

function eliminar(){}



//alert personalizado THE END 
function finalizarCompra(){
    alert(`El total de tu compra es: ${carrito}`)
    Swal.fire(
        'Gracias por tu compra!',
        'Elige los juegos con toda confianza!',
        'success'
      )
};

//function add carrito
function addCarrito(game) {
    carrito += game.precio
  }




 