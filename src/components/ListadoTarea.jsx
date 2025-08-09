import React, { useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  guardarEnLocalStorage,
  obtenerDeLocalStorage,
} from "../utils/localStorage.utils";
import TareaItem from "./TareaItem";

const ListadoTareas = () => {
  const [listadoTareas, setListadoTareas] = useState([]);
  const [tarea, setTarea] = useState("");
  const [editandoIndex, setEditandoIndex] = useState(null);
  const [tareaModificada, setTareaModificada] = useState("");

  useEffect(() => {
    const tareasGuardadas = obtenerDeLocalStorage("listadoTareas");
    setListadoTareas(tareasGuardadas);
  }, []);

  useEffect(() => {
    guardarEnLocalStorage("listadoTareas", listadoTareas);
  }, [listadoTareas]);

  function handleSubmit(e) {
    e.preventDefault();
    if (tarea != "") {
      setListadoTareas([...listadoTareas, tarea]);
      setTarea("");
    } else {
      alert("Debe escribir algo");
    }
  }

  function handleDelete(tarea, indiceAEleminiar) {
    if (confirm(`Segudo que desea eliminar esta tarea? ${tarea}`)) {
      const nuevoListadoTareas = listadoTareas.filter(
        (item, index) => index != indiceAEleminiar
      );
      setListadoTareas(nuevoListadoTareas);
    }
  }
  function handleUpdate(indiceAEditar) {
    const nuevoArray = [...listadoTareas];
    nuevoArray[indiceAEditar] = tareaModificada;
    setListadoTareas(nuevoArray);
    setEditandoIndex(null);
    setTareaModificada("");
  }

  return (
    <div
      className="container my-3 d-flex flex-column w-50 rounded-4"
      style={{
        background: " #1a1919",
        background:
          "linear-gradient(178deg,rgba(26, 25, 25, 1) 10%, rgba(182, 177, 177, 1) 90%)",
      }}
    >
      <h1 className=" my-4 mx-5 text-light">Listado de tareas</h1>
      <form
        onSubmit={handleSubmit}
        className=" form-control d-flex w-75 mx-5 justify-content-center"
      >
        <input
          type="text"
          placeholder="Ingrese la tarea"
          className="form-control m-2"
          onChange={(e) => setTarea(e.target.value)}
          value={tarea}
        />
        <Button type="submit" variant="primary">
          Guardar
        </Button>
      </form>
      <h3 className="my-3 mx-5 text-light">Listado</h3>
      {listadoTareas.length == 0 ? (
        <p className="mx-5">No tiene ninguna tarea pendiente.</p>
      ) : (
        <ListGroup>
          {listadoTareas.map((tarea, indice) => {
            return (
              <TareaItem
                key={indice}
                indice={indice}
                tarea={tarea}
                editandoIndex={editandoIndex}
                setEditandoIndex={setEditandoIndex}
                setTareaModificada={setTareaModificada}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                tareaModificada={tareaModificada}
              ></TareaItem>
            );
          })}
        </ListGroup>
      )}
    </div>
  );
};

export default ListadoTareas;
