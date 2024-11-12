class Persona {
    nombre = 'homero';
    apellido= 'simpson';
    dirccion= 'avenida siempre iva 152';
    telefono= ' 5555555555';
    email= 'amantedelacomida@gmail.com'


    trabajar(){
        return 'trabaja en la planta nuclear';
    }
    estudiar(){
        return 'escuela primaria Sprinfield';
    }
}
const homero = new Persona();
document.write(homero.nombre);