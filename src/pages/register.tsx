import { NextPage } from "next";
import { Card, Col, Container, Row } from "react-bootstrap";
import { RegistrationForm } from "@components";

const Register: NextPage = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center dark:bg-transparent">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="mb-4 rounded-0">
              <Card.Body className="p-4">
                <RegistrationForm />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
