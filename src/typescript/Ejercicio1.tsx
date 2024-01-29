//1.Crear una función con parámetros que permita calcular el área de un cuadrado.
// Importa React y cualquier otro módulo necesario
import React from 'react';

// Definimos una interfaz para los props que recibirá nuestro componente
interface AreaCuadrado {
  lado: number; // Longitud del lado del cuadrado
}

// Creamos un componente funcional que recibe los props
const SquareAreaCalculator: React.FC<AreaCuadrado> = ({ lado }) => {
  // Función para calcular el área del cuadrado
  const calculateArea = (lado: number): number => {
    return lado * lado;
  };

  // Llamamos a la función para calcular el área
  const area = calculateArea(lado);

  // Renderizamos el resultado en el componente
  return (
    <div>
      <h2>Área del cuadrado</h2>
      <p>Lado del cuadrado: {lado}</p>
      <p>Área: {area}</p>
    </div>
  );
};

// Exportamos el componente
export default SquareAreaCalculator;
