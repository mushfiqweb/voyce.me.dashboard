import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";

const RegistrationForm: React.FC = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const register = (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      router.push("/");
    }, 2000);
  };

  return (
    <>
      <h1>Register</h1>
      <p className="text-black-50">Create your account</p>

      <form onSubmit={register}>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faUser} fixedWidth />
          </InputGroup.Text>
          <Form.Control
            name="username"
            required
            disabled={submitting}
            placeholder="Username"
            aria-label="Username"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faEnvelope} fixedWidth />
          </InputGroup.Text>
          <Form.Control
            type="email"
            name="email"
            required
            disabled={submitting}
            placeholder="Email"
            aria-label="Email"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faLock} fixedWidth />
          </InputGroup.Text>
          <Form.Control
            type="password"
            name="password"
            required
            disabled={submitting}
            placeholder="Password"
            aria-label="Password"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faLock} fixedWidth />
          </InputGroup.Text>
          <Form.Control
            type="password"
            name="password_repeat"
            required
            disabled={submitting}
            placeholder="Repeat password"
            aria-label="Repeat password"
          />
        </InputGroup>

        <Button
          type="submit"
          className="d-block w-100"
          disabled={submitting}
          variant="success"
        >
          Create Account
        </Button>
      </form>
    </>
  );
};

export default RegistrationForm;
