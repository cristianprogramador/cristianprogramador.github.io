const containerModal = document.querySelector('.container-modal')
const openCart = document.getElementById('btn-cart')
const closeCart = document.getElementById('btn-close-cart')
const cartModal = document.querySelector('.cart-modal')
const btnTheEndAll = document.querySelector('#btn-theEndAll')
const btnDeleteAll = document.querySelector('#btn-deleteAll')

openCart.addEventListener('click', () => {
    containerModal.classList.toggle('modal-active')
})

closeCart.addEventListener('click', () => {
    containerModal.classList.toggle('modal-active')
})

containerModal.addEventListener('click',() => {
    closeCart.click()
})

cartModal.addEventListener('click', (e)=> {
    e.stopPropagation()
     if (e.target.classList.contains('btn-delete')) {
        deleteProductCart (e.target.value)
    }
       
})



const deleteFinish = () => {
    if(cart){
        Swal.fire({
            title: 'Estas seguro de ELIMINAR?',
            text: "Esta accion no tiene regreso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar todo!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                'Continua comprando.',
                'success'
              )
              cart.splice(0, cart.length)
              deleteProductCart()
            }
          })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hay producto en tu carrito!'
          })
    }
   
};



const buyFinish = () => {
    if (cart.length) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Gracias por tu compra!',
            showConfirmButton: false,
        timer: 1500
        })
        
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hay producto en tu carrito!'
          })
    }
    cart.splice(0, cart.length)
    deleteProductCart()
};

btnTheEndAll.addEventListener('click', buyFinish)
btnDeleteAll.addEventListener('click', deleteFinish)



 