import React, { useState } from 'react';
import { LoginRegisterTemplate } from '../../components/templates/LoginRegisterTemplate/LoginRegisterTemplate';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log({ email, password });
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });
      alert('Login successful!');
    } catch (error) {
      if (error.response) {
        alert(`Login failed: ${error.response.data.message}`);
      } else if (error.request) {
        alert('Login failed: No response received from server');
      } else {
        alert('Login failed: Something went wrong');
      }
    }
  };

  return (
    <div>
      <LoginRegisterTemplate
        destination="login"
        handleLogin={handleLogin}
        setEmail={setEmail}
        setPassword={setPassword}
        setUsername={() => {}}
      />
    </div>
  );
};

export { LoginPage };
