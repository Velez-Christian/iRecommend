import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'

function SignUp() {
  const fields = [
    {label: 'Email', type: 'text', placeholder: 'Email'},
    {label: 'Username', type: 'text', placeholder: 'Username'},
    {label: 'Password', type: 'password', placeholder: 'Password'}
  ]
  return (
    <div className="signin-container">
    <Form>
      {fields.map((field) => {
        return (
            <Form.Group className = "ab-3" controlId = "signUpForm">
              <Form.Label>{field.label}</Form.Label>
              <Form.Control type = {field.type} placeholder = {field.placeholder}/>
            </Form.Group>
        )
      })}
      <button type="submit">Sign In</button>
    </Form>
    </div>
  );
}

export default SignUp;