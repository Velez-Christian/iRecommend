import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'

function SignUp() {
  const fields = [
    {label: 'Email', type: 'text', placeholder: 'Email'},
    {label: 'Username', type: 'text', placeholder: 'Username'},
    {label: 'Password', type: 'password', placeholder: 'Password'}
  ]

  const [emailaAddress, setEmail] = useState('email@example.com');
  const [userName, setUsername] = useState('Christian');
  const [password, setPassword] = useState('**************');

  return (
    <Form className = "signin-container">
        {fields.map((field) => {
          return (
              <Form.Group className = "form" controlId = "signUpForm">
                <Form.Label>{field.label}</Form.Label>
                <Form.Control type = {field.type} placeholder = {field.placeholder}
                  onChange = {(e) => setEmail(e.target.value)} />
              </Form.Group>
          )
        })}
          <button type="submit">Sign In</button>
          <br />
          <h2>Email: {emailaAddress}</h2>
          <h2>Username: {userName}</h2>
          <h2>Password: {password}</h2>
    </Form>
  );
}

export default SignUp;