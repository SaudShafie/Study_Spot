import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import PageWrapper from "../components/PageWrapper";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH8ZHSWFelJ2ma1SxB7yu-ZTTLl6O6S_4",
  authDomain: "cpit-405-424d7.firebaseapp.com",
  projectId: "cpit-405-424d7",
  storageBucket: "cpit-405-424d7.firebasestorage.app",
  messagingSenderId: "206040724715",
  appId: "1:206040724715:web:01eddabbfe1b2603ef7aae",
};

// Initialize Firebase (only if it hasn't been initialized yet)
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <PageWrapper>
    <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '16px' }}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <TextField
  label="Email"
  variant="outlined"
  sx={{
    mb: 2,
    width: '300px',
    "& .MuiInputLabel-root": {
      color: 'white', // Label text color before clicking
    },
    "& .MuiOutlinedInput-root": {
      "& input": {
        color: 'white', // Input text color
      },
      "& fieldset": {
        borderColor: 'white', // Border color of the text field
      },
      "&:hover fieldset": {
        borderColor: '#1e90ff', // Border color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: '#1e90ff', // Border color when focused
      }
    }
  }}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
      <TextField
  label="Password"
  type="password"
  variant="outlined"
  sx={{
    mb: 2,
    width: '300px',
    "& .MuiInputLabel-root": {
      color: 'white', // Label text color before clicking
    },
    "& .MuiOutlinedInput-root": {
      "& input": {
        color: 'white', // Input text color
      },
      "& fieldset": {
        borderColor: 'white', // Border color of the text field
      },
      "&:hover fieldset": {
        borderColor: '#1e90ff', // Border color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: '#1e90ff', // Border color when focused
      }
    }
  }}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
      <Button variant="contained" color="primary" sx={{ width: '300px' }}  onClick={handleLogin}>
        Login
      </Button>
    </Box>
    </PageWrapper>

  );
};

export default LoginPage;