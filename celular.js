//objeto celular

const celular = {
    marca: "Samsung",
    modelo: "Galaxy S21",
    color: "Negro",
    almacenamiento: "128GB",
    sistemaOperativo: "Android",
    camaraMP: 64,
    encendido: false,

    //metodo para sacar fotos
    sacarFoto: function(){
        if(!this.encendido) {
            console.log("El celular esta apagado. Por favor, enciendelo para sacar fotos.");
        } else {
            console.log(`Foto tomada con la camara de ${this.camaraMP} MP en el ${this.modelo}, ¡Sonrie! `);
        }
    },

    //Metodo para encender el celular
    encender: function() {
        this.encendido = true;
        console.log("¡El celular esta encendido!");
    },

    //Metodo para apagar el celular
    apagar: function() {
        this.encendido = false;
        console.log("El celular se ha apagado.");
    }
};

//prueba del objeto Celular

console.log("Informacion del celular:");
console.log(`Marca: ${celular.marca}`);
console.log(`Modelo: ${celular.modelo} `);
console.log(`Color: ${celular.color} `);
console.log(`Almacenamiento: ${celular.almacenamiento}  `);
console.log(`Sistema Operativo: ${celular.sistemaOperativo} `);

//Encendemos el celular
celular.encender();

//Sacamos una foto 
celular.sacarFoto();

//Apagamos el celular
celular.apagar();

//En este ejemplo, el "celular" tiene propiedades como marca, modelo, color, almacenamiento, sistema operativo y una propiedad "camaraMP" para representar los megapixeles de la camara. Tambien cuenta con metodos para sacar fotos, encender el celular y apagarlo.

//Al ejecutar el codigo, se logra apreciar como el objeto "celular" es capaz de sacar una foto solo si esta encendido. Si intentas sacar una foto sin encender el celular, mostrara un mensaje indicando que el celular esta apagado.