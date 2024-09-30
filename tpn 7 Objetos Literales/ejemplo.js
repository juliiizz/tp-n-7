const empleado1={
    codigo: 100,
    nombre:"Pamela",
    apellido: "Juarez",
    descripcion: ['secretaría', 'amable','puntual'],
    edad: 30,
    metodo1:function(){
        return console.log(`Edad en el año 2025: ${this.edad+1}`)
    },
    metodo2(){
        return console.log('Utilizamos: metodo2()')
    }
}
// console.log(empleado1)
console.log('Nombre: ', empleado1.nombre)
console.log('Apellido: ', empleado1.apellido)
console.log('Descripción: ', empleado1.descripcion.join(' '))
empleado1.metodo1()
empleado1.metodo2()



