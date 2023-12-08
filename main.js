//Le damos la bienvenida al usuario en la pagina de reserva
alert("Bienvenidos a la pagina de reserva de Tennis Delta");

//El usuario ingresa su nombre
let nombrecliente;

nombrecliente = prompt("Ingrese su nombre completo: ");
alert("Bienvenida a la pagina de reserva de Tennis Delta: " + nombrecliente);

// Le damos la opcion del dia que quiere jugar

alert("Que día de la semana desea reservar y le diremos si hay disponibilidad");

let diaReserva =  prompt("Ingrese el día para la reserva");
let horaReserva = prompt("Ingrese la hora de la reserva");
let estadoReserva;
switch (diaReserva) {
    case "Lunes":
    case "Martes":
    case "Miercoles":
    case "Viernes":
        //Verifica la disponibilidad de la hora
        if (verificarDisponibilidad(diaReserva, horaReserva)){ estadoReserva ="Confirmada";
        alert("¡Su reserva para el ${diaReserva} a las ${horaReserva} ha sido confirmada con exito!");
       } else {
        estadoReserva = "Pendiente";
        alert("La hora ${horaReserva} ya está reservada para el ${diaReserva}. Por favor, elija otra hora.");}
       break;
    case "Domingo":
        estadoReserva = "pendiendiente"
        alert("Su reserva esta pendiente. Por favor, espere confirmación.");
        break;
    default:
     estadoReserva = "Cancelada";
     alert("El club permanece cerrado. Su reserva ha sido cancelada");
    
    }

//Función para verificar la disponiblidad horaria
function verificarDisponibilidad(){
    //comprobamos disponibilidad
    return true;
}


