//1.Crear una función con parámetros que permita calcular el área de un cuadrado.

export const Ejercicio1 = () =>{

    const calcularArea = (lado:number)=>{
        return lado * lado;
    } 

    return(
        <>
            <h3>Ejercicio 1</h3>
            <span>El área del cuadrado es: {(calcularArea(4))}</span>
        </>
    )
}
