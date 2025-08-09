import { Button, FormControl, ListGroup } from "react-bootstrap";

const TareaItem = ({
  indice,
  tarea,
  editandoIndex,
  setTareaModificada,
  setEditandoIndex,
  handleDelete,
  handleUpdate,
  tareaModificada,
}) => {
  return (
    <div>
      <ListGroup.Item
        variant="secondary"
        key={indice}
        className="d-flex justify-content-between align-items-center my-3 mx-5 rounded-4 
        "
      >
        {editandoIndex !== indice ? (
          <>
            <span>{tarea}</span>
            <div className="d-flex gap-3">
              <Button
                variant="warning"
                onClick={() => {
                  setEditandoIndex(indice);
                  setTareaModificada(tarea);
                }}
              >
                <i className="bi bi-pencil-square"></i>
              </Button>
              <Button
                variant="danger"
                onClick={() => handleDelete(tarea, indice)}
              >
                <i className="bi bi-trash3"></i>
              </Button>
            </div>
          </>
        ) : (
          <>
            <FormControl
              type="text"
              value={tareaModificada}
              onChange={(e) => setTareaModificada(e.target.value)}
            />
            <div className="d-flex gap-3">
              <Button variant="success" onClick={() => handleUpdate(indice)}>
                Guardar
              </Button>
            </div>
          </>
        )}
      </ListGroup.Item>
    </div>
  );
};

export default TareaItem;
