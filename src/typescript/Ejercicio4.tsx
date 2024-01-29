//4.	Crear un arreglo con objetos "alumno" y sus propiedades son nombre, edad y calificaciones. 
//Luego, escribir una función que calcule el promedio de las calificaciones. 

export const Ejercicio4 = () =>{

    const alumnos= [
        {
          nombre: "Viviana",
          edad: 19,
          calificaciones: 10
        },
        {
          nombre: "Wendy",
          edad: 20,
          calificaciones: 8
        },
        {
          nombre: "Gerson",
          edad: 18,
          calificaciones: 9
        }
    ];

    

    const sumarCalificaciones = 10+8+9;
    const promedio= () =>{
        return sumarCalificaciones/3;
    }

    return(
        <>
            <h3>Ejercicio 4</h3>
            <span>El promedio es: {}</span>
        </>
    )

};
  
  