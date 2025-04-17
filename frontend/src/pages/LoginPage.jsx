import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';
import { useAuth } from '../context/AuthProvider';
import { Input, Button, FormControl, FormLabel, FormErrorMessage, Box } from '@chakra-ui/react';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // To handle loading state

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simple validation for empty fields
    if (!formData.username || !formData.password) {
      setError('Please enter both username and password');
      setLoading(false);
      return;
    }

    try {
      const res = await loginUser(formData);
      const token = res.data.access; // or res.data.token depending on your backend

      login(token); // save token in context/localStorage
      navigate('/dashboard'); // or wherever you want to go after login
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      backgroundColor="gray.100"
    >
      <Box
        as="form"
        onSubmit={handleSubmit}
        padding="6"
        borderRadius="md"
        backgroundColor="white"
        boxShadow="lg"
        width="100%"
        maxWidth="400px"
      >
        <FormControl isInvalid={error}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            marginBottom="4"
          />
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            marginBottom="4"
          />
          {error && <FormErrorMessage>{error}</FormErrorMessage>}

          <Button type="submit" colorScheme="blue" width="full">
            Login
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default LoginPage;
