import Card from "react-bootstrap/Card";
import PacienteCard from "./PacienteCard";

const ListaPacientes = ({citas , borrarCita}) => {
  return (
    <Card className="shadow my-3">
      <Card.Header className="py-3 bg-light text-center">
        <b>No hay citas</b>
      </Card.Header>
      <Card.Body className="bg-primary-subtle">
        <div className="row justify-content-center gap-2">
          {citas.map((cita, indice) => (
            <PacienteCard cita={cita} key={indice} borrarCita={borrarCita}/>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ListaPacientes;
