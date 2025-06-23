import Card from "react-bootstrap/Card";
import PacienteCard from "./PacienteCard";

const ListaPacientes = () => {
    return (
            <Card className="shadow my-3">
      <Card.Header className="ps-5 py-3 bg-light text-center noCitas"><b>No hay citas</b></Card.Header>
      <Card.Body className="bg-primary-subtle">
        <PacienteCard/>
      </Card.Body>
    </Card>
    );
};

export default ListaPacientes;