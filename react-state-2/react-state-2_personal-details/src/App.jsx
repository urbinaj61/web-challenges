import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleInputs = (receivedName, receivedEmail) => {
    setName(receivedName);
    setEmail(receivedEmail);
  };

  return (
    <div className='container'>
      <h1>Personal Details Form</h1>
      <Form onHandleInputs={handleInputs} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className='output'>{name}</span>
      </p>
      <p>
        Email: <span className='output'>{email}</span>
      </p>
    </div>
  );
}
