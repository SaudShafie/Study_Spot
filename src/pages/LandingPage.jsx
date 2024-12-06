import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './LandingPage.css';

const LandingPage = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(
          'https://api.unsplash.com/photos/random?count=10&query=libraries,study%20places&client_id=2--ALOdH9hIdWCAZJO-yHNrxWLg2Um5ESOdGtsW8EGo'
        );
        const data = await response.json();
        setImages(data.map((image) => image.urls.full));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchImages();

    // Fetch new images every 30 seconds
    const interval = setInterval(() => {
      fetchImages();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Change background image every 10 seconds
  useEffect(() => {
    if (images.length > 0) {
      const imageSwitchInterval = setInterval(() => {
        setFadeIn(false); // Start fading out
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          setFadeIn(true); // Start fading in the new image
        }, 1000); // Duration of fade-out effect
      }, 10000);

      return () => clearInterval(imageSwitchInterval);
    }
  }, [images]);

  return (
    <div className="landing-page">
      <div
        className={`background-container ${fadeIn ? 'fade-in' : 'fade-out'}`}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      />
      <div className="content-container">
        <h1>Welcome to the Study Spot Finder</h1>
        <div className="button-container">
          <Button component={Link} to="/login" variant="contained" color="primary" className="login-btn">
            Login
          </Button>
          <Button component={Link} to="/signup" variant="outlined" className="signup-btn">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
