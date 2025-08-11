import React, { useState, useEffect } from 'react';
import './ListadoDeColores.css';
import ColorCard from './ColorCard';

export default function ListadoDeColores() {
  const [colorSeleccionado, setColorSeleccionado] = useState('#000000');
  const [listaDeColores, setListaDeColores] = useState([]);

 
  useEffect(() => {
    console.log('Intentando cargar datos de localStorage...');
    const coloresGuardados = JSON.parse(localStorage.getItem('colores')) || [];
    setListaDeColores(coloresGuardados);
    console.log('Colores cargados:', coloresGuardados);
  }, []);

  useEffect(() => {
    console.log('Intentando guardar datos en localStorage:', listaDeColores);
    localStorage.setItem('colores', JSON.stringify(listaDeColores));
  }, [listaDeColores]);

  const agregarColor = () => {
    if (!listaDeColores.includes(colorSeleccionado)) {
      setListaDeColores([...listaDeColores, colorSeleccionado]);
    }
  };

  const borrarColor = (colorAEliminar) => {
    setListaDeColores(listaDeColores.filter(c => c !== colorAEliminar));
  };



  return (
    <div className="container-main">
      <div className="card card-title">
        <h3>Listado de Colores</h3>
      </div>

      <div className="card">
        <label htmlFor="eleccion-color">Selecciona un color:</label>
        <div className="selector-container">
          <input
            type="color"
            id="eleccion-color"
            value={colorSeleccionado}
            onChange={(evento) => setColorSeleccionado(evento.target.value)}
            className="eleccion-color"
          />
          <button onClick={agregarColor} className="btn-add">
            Agregar
          </button>
        </div>
      </div>

      <div className="card colores-creados-card">
        <h5>Colores creados</h5>
        <div className="listado-colores">
          {listaDeColores.map((colorActual) => (
            <ColorCard
              key={colorActual}
              color={colorActual}
              onDelete={() => borrarColor(colorActual)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
