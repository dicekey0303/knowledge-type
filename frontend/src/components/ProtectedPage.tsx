import React from 'react';
import { Container, Typography } from '@mui/material';

export const ProtectedPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        保護されたページ
      </Typography>
      <Typography variant="body1" align="center">
        ログインが成功しました。これは保護されたページです。
      </Typography>
    </Container>
  );
};
