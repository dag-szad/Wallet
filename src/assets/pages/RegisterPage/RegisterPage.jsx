import React, { useState } from 'react';
import { LoginRegisterTemplate } from '../../components/templates/LoginRegisterTemplate/LoginRegisterTemplate';
import axios from 'axios';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    console.log({ username, email, password });
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        email,
        password,
        username,
      });
      alert('Registration successful!');
    } catch (error) {
      if (error.response) {
        alert(`Registration failed: ${error.response.data.message}`);
      } else if (error.request) {
        alert('Registration failed: No response received from server');
      } else {
        alert('Registration failed: Something went wrong');
      }
    }
  };

  return (
    <div>
      <LoginRegisterTemplate
        destination="register"
        handleRegister={handleRegister}
        setEmail={setEmail}
        setPassword={setPassword}
        setUsername={setUsername}
      />
    </div>
  );
};

export { RegisterPage };
