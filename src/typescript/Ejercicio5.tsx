//5.	Empleado el hook useState crear un acumulador de 5. 
//Se debe visualizar el valor del acumular y dos botones (incrementar - disminuir)


import { useState } from "react"

export const Ejercicio5 = () => {

  const [valor, setValor] = useState (0);

  const contador = (num : number) =>{
    setValor(valor + num);
  }

  return (
    <>
        <h3>Ejercicio 5</h3>
        <div>
            {valor}
        </div>
        <br />
        <button className="btn btn-primary" onClick={()=>contador(+5)}>+ 5</button>
        &nbsp;
        <button className="btn btn-primary" onClick={() => contador(-5)}>- 5</button>
    </>
  )
}