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

export const RegistrationForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (!username) {
      setUsernameError('ユーザー名は必須です');
      isValid = false;
    } else {
      setUsernameError('');
    }

    if (!email) {
      setEmailError('メールアドレスは必須です');
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError('無効なメールアドレスです');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('パスワードは必須です');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('パスワードは6文字以上で入力してください');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
    try {
      const response = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Registration and login successful:', data);
        setAccessToken(data.access_token);
        navigate('/protected');
      } else {
        console.error('Registration failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    }
  };



  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        新規登録
      </Typography>
      <Form onSubmit={handleSubmit}>
        <CustomTextField
          label="ユーザー名"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={!!usernameError}
          helperText={usernameError}
        />
        <CustomTextField
          label="メールアドレス"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!emailError}
          helperText={emailError}
        />
        <CustomTextField
          label="パスワード"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!passwordError}
          helperText={passwordError}
        />
        <CustomButton type="submit" variant="contained" color="primary">
          登録
        </CustomButton>
      </Form>
    </Container>
  );
};
