import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import PageWrapper from "../components/PageWrapper";
const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (err) {
      setError("Failed to create an account. Please try again.");
    }
  };

  return (
    <PageWrapper>
    <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '16px' }}>
      <Typography variant="h5" gutterBottom>
        Sign Up
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
      <Button variant="contained" color="primary" sx={{ width: '300px' }} onClick={handleSignUp}>
        Sign Up
      </Button>
    </Box>
    </PageWrapper>
  );
};

export default SignUpPage;