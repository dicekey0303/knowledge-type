import React, { useState } from 'react';
import { TextField, Button, Typography, Container, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { setAccessToken } from '../utils/auth';

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(8),
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        setAccessToken(data.access_token);
        navigate('/protected');
        console.log('Login successful:', data);
        // TODO: Store the access token and redirect to a protected page
      } else {
        console.error('Login failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        ログイン
      </Typography>
      <Form onSubmit={handleSubmit}>
        <CustomTextField
          label="ユーザー名"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <CustomTextField
          label="パスワード"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton type="submit" variant="contained" color="primary">
          ログイン
        </CustomButton>
      </Form>
    </Container>
  );


};
