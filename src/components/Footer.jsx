import React from "react";

const members = [
  {
    name: "Lautaro",
    avatar:
      "https://img.icons8.com/?size=100&id=xWB5VQsXqNGy&format=png&color=000000",
  },
  {
    name: "Isaías",
    avatar:
      "https://img.icons8.com/?size=100&id=45Xlab1qZY10&format=png&color=000000",
  },
  {
    name: "Sara",
    avatar:
      "https://img.icons8.com/?size=100&id=qfXbHpMZ0CnB&format=png&color=000000",
  },
  {
    name: "Damián ",
    avatar:
      "https://img.icons8.com/?size=100&id=OP06qcyGQ1M7&format=png&color=000000",
  },
];

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4 p-md-5 mt-auto rounded-top shadow ">
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center betwe">
        {/* Sección de avatares de los miembros */}
        <div className="d-flex align-items-center mb-3 mb-md-0 text-light ">
          <h2 className="h4 text-info d-flex align-items-center me-3 text-light">
            Grupo 3
          </h2><div className="text-center text-md-end text-light">
          <p className="small mb-1 text-light" >
            Proyecto Final de React | Desarrollado por el Grupo 3     
          </p>
          <p className="small mb-0 text-light">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
          <div className="d-flex p-3">
            {members.map((member, index) => (
              <div key={index} className="d-flex me-1">
                <img
                  className="rounded-circle border border-white"
                  src={member.avatar}
                  alt={`Avatar de ${member.name}`}
                  title={member.name}
                  style={{ width: "100px", height: "100px" }}
                />
                <span className="text-white-50 small">{member.name}</span>
              </div>
            ))}
          </div>
        </div>

        
        
      </div>
    </footer>
  );
};

export default Footer;
