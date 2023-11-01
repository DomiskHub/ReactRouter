import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contacto() {
  return (
    <Form className="contacto-container">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="form-label">Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="form-label">Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="dark">Enviar</Button>{" "}
    </Form>
  );
}

export default Contacto;
