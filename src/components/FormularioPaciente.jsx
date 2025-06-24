import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ListaPacientes from "./ListaPacientes";

const FormularioPaciente = () => {
  const [citas, setCitas] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const agregarCitas = (cita) => {
    setCitas([...citas, cita]);
    console.log(citas)
    reset();
  };

  return (
    <>
    <Card className="shadow my-3">
      <Card.Header className="ps-5 py-3 bg-light lead">
        Llenar el formulario para crear un cita
      </Card.Header>
      <Card.Body className="bg-primary-subtle">
        <Form onSubmit={handleSubmit(agregarCitas)}>
          <Form.Group className="mb-3" controlId="nombreMascota">
            <Form.Label>Nombre de la mascota *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Chispa"
              {...register("inputMascota", {
                required: "El nombre de la mascota es un dato obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "El nombre de la mascota debe tener 2 caracteres como minimo",
                },
                maxLength: {
                  value: 50,
                  message:
                    "El nombre de la mascota debe tener 50 caracteres como minimo",
                },
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                  message:
                    "El nombre de la mascota debe contener unicamente caracteres alfabeticos, mayusculas o minusculas",
                },
              })}
            />
          </Form.Group>
          <Form.Text className="text-danger">
            {errors.inputMascota?.message}
          </Form.Text>
          <Form.Group className="mb-3" controlId="nombreDuenio">
            <Form.Label>Nombre del dueño/a *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Juan"
              {...register("inputDuenio", {
                required: "El nombre del dueño es un dato obligatorio",
                minLength: {
                  value: 3,
                  message:
                    "El nombre del dueño debe tener 3 caracteres como minimo",
                },
                maxLength: {
                  value: 50,
                  message:
                    "El nombre del dueño debe tener 50 caracteres como minimo",
                },
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                  message:
                    "El nombre del dueño debe contener unicamente caracteres alfabeticos, mayusculas o minusculas",
                },
              })}
            />
          </Form.Group>
          <Form.Text className="text-danger">
            {errors.inputDuenio?.message}
          </Form.Text>
          <Form.Group className="mb-3" controlId="fecha">
            <Form.Label>Fecha *</Form.Label>
            <Form.Control
              type="date"
              {...register("inputFecha", {
                required: "La fecha de la cita es un dato obligatorio",
              })}
            />
          </Form.Group>
          <Form.Text className="text-danger">
            {errors.inputFecha?.message}
          </Form.Text>
          <Form.Group className="mb-3" controlId="hora">
            <Form.Label>Hora *</Form.Label>
            <Form.Control
              type="time"
              {...register("inputHora", {
                required: "La hora de la cita es un dato obligatorio",
              })}
            />
          </Form.Group>
          <Form.Text className="text-danger">
            {errors.inputHora?.message}
          </Form.Text>
          <Form.Group className="mb-3" controlId="sintoma">
            <Form.Label>Sintomas *</Form.Label>
            <Form.Control
              type="text"
              {...register("inputSintomas", {
                required: "Los sintomas de la mascota es un dato obligatorio",
                minLength: {
                  value: 3,
                  message: "Los sintomas deben tener 3 caracteres como minimo",
                },
                maxLength: {
                  value: 50,
                  message: "Los sintomas deben tener 50 caracteres como minimo",
                },
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                  message:
                    "Los sintomas deben contener unicamente caracteres alfabeticos, mayusculas o minusculas",
                },
              })}
            />
          </Form.Group>
          <Form.Text className="text-danger">
            {errors.inputSintomas?.message}
          </Form.Text>
          <Button variant="primary" type="submit" className="mt-4 w-100 shadow">
            Agregar nueva cita
          </Button>
        </Form>
      </Card.Body>
    </Card>
    <ListaPacientes citas={citas}/>
    </>
  );
};

export default FormularioPaciente;
