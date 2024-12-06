import React, { useState } from "react";
import { Grid, TextField, Box, Typography, Button } from "@mui/material";
import StudySpotCard from "../components/StudySpotCard";
import { Link } from "react-router-dom"; // Import Link for navigation
import './StudySpotsList.css'; // Import the CSS file for the page

const StudySpotsList = () => {
  const [studySpots, setStudySpots] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    if (!searchQuery) return;

    const apiKey = "fsq3sA2nlc4O2MGi8kGTPNqXiBc0lXQ09hfBou+YnPDxGbQ="; // Replace with your valid Foursquare V3 API key
    const endpoint = `https://api.foursquare.com/v3/places/search?near=${searchQuery}&categories=13032,14009,16000&limit=10`;

    try {
      const response = await fetch(endpoint, {
        headers: {
          "Authorization": apiKey,
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.results) {
        const enrichedResults = data.results.map((result) => ({
          id: result.fsq_id,
          name: result.name,
          address: result.location.formatted_address || "No address available",
          longitude: result.geocodes.main.longitude,
          latitude: result.geocodes.main.latitude,
        }));

        setStudySpots(enrichedResults);
      } else {
        setStudySpots([]);
      }
    } catch (error) {
      console.error("Error fetching places from Foursquare:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

 
  return (
    <Box className="page-wrapper">
      {/* Buttons for Logout and Dashboard */}
      <Box className="buttons-container">
        <Button
          component={Link}
          to="/dashboard" // Link to the dashboard page
          variant="contained"
          color="primary"
          className="study-spot-button"
        >
          Dashboard
        </Button>
        <Button
         component={Link}
         to="/"
         variant="outlined"
         className="dashboard-button logout-button"
        >
          Logout
        </Button>
      </Box>

      <Typography variant="h3" gutterBottom>
        Find Your Study Spot
      </Typography>

      {/* Search Box */}
      <Box className="search-box">
        <TextField
          label="Search for a location"
          variant="outlined"
          margin="normal"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          sx={{
            marginBottom: 2,
            width: '100%',
            "& .MuiInputLabel-root": {
              color: 'white',
            },
            "& .MuiOutlinedInput-root": {
              "& input": {
                color: 'white',
              },
              "& fieldset": {
                borderColor: 'white',
              },
              "&:hover fieldset": {
                borderColor: '#1e90ff',
              },
              "&.Mui-focused fieldset": {
                borderColor: '#1e90ff',
              },
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          sx={{ width: '100%', marginTop: 1 }}
        >
          Search
        </Button>
      </Box>

      {/* Display Study Spots */}
      <Box className="study-spots-grid" mt={4}>
        <Grid container spacing={3} alignItems="flex-start">
          {studySpots.map((spot) => (
            <Grid item xs={12} sm={6} md={4} key={spot.id}>
              <StudySpotCard spot={spot} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default StudySpotsList;
