//1.Crear una función con parámetros que permita calcular el área de un cuadrado.

import React from 'react';

interface AreaCuadrado {
  lado: number;
}


const CalculadoraArea: React.FC<AreaCuadrado> = ({ lado }) => {
  
  const calcularArea = (lado: number): number => {
    return lado * lado;
  };

  const area = calcularArea(lado);
  return (
    <div>
      <h2>Área del cuadrado</h2>
      <p>Lado del cuadrado: {lado}</p>
      <p>Área: {area}</p>
    </div>
  );
};

// Exportamos el componente
export default CalculadoraArea;
