function Carro(nombre, marca, color, precio) {
    this.nombre = nombre;
    this.marca = marca;
    this.color = color;
    this.precio = precio;
  }
  alert("Hola que tal soy tu asistente virtual, ingresa los datos solcitados");
  var nombre = prompt("Ingresa el nombre del vehiculo por favor: ");
  var marca = prompt("Ingresa la marca: ");
  var color = prompt("Ingresa el color: ");
  var precio = prompt("Por ultimo ingressa el precio: ");

  Carro1 = new Carro(nombre, marca, color, precio);
  
  Carro.prototype.Final = function() {
    alert("Acabas de registrar el vehiculo " + this.nombre);
  }
  
  Carro.prototype.Junto = function () {
    alert('Carro: ' + Carro1.nombre + " " + "Marca: " + Carro1.marca + " " + "Color: " + Carro1.color +
    " " + Carro1.color + " " + "Precio: " + Carro1.precio );
  };
  
  Carro1.Junto();
  Carro1.Final();
