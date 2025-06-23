import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const FormularioPaciente = () => {
  return (
    <Card className="shadow my-3">
      <Card.Header className="ps-5 py-3 bg-light lead">Llenar el formulario para crear un cita</Card.Header>
      <Card.Body className="bg-primary-subtle">
        <Form>
          <Form.Group className="mb-3" controlId="nombreMascota">
            <Form.Label>Nombre de la mascota *</Form.Label>
            <Form.Control type="name" placeholder="Ej: Chispa" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="nombreDuenio">
            <Form.Label>Nombre del dueño/a *</Form.Label>
            <Form.Control type="name" placeholder="Ej: Juan Perez" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="fecha">
            <Form.Label>Fecha *</Form.Label>
            <Form.Control type="date" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="hora">
            <Form.Label>Hora *</Form.Label>
            <Form.Control
              type="time"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="sintoma">
            <Form.Label>Sintomas *</Form.Label>
            <Form.Control
              type="text"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-4 w-100 shadow">
            Agregar nueva cita
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormularioPaciente;
