precio = 400000;
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

/* Para que cargue el valor incial*/
cantidad = Number(document.querySelector('.cantidad').innerHTML);
document.querySelector('.valor-total').innerHTML = cantidad * precio;

