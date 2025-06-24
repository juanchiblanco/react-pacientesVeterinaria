import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PacienteCard = ({cita}) => {
    return (
        <Card className="shadow col-12 col-md-4 col-lg-3">
      <Card.Header className="bg-light text-center">
        <p className="fs-2">{cita.inputMascota}</p>
        <p className="fs-5">Dueño: {cita.inputDuenio}</p>
        </Card.Header>
      <Card.Body className="bg-primary-subtle">
        <p>Fecha: {cita.inputFecha}</p>
        <p>Hora: {cita.inputHora}</p>
        <p>Sintomas: {cita.inputSintomas}</p>
      </Card.Body>
      <Card.Footer>
        <Button type="button" variant="danger">Borrar</Button>
      </Card.Footer>
    </Card>
    );
};

export default PacienteCard;