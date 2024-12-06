import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const PlaceSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query) return;

    const apiKey = "fsq3sA2nlc4O2MGi8kGTPNqXiBc0lXQ09hfBou+YnPDxGbQ="; // Replace with your Foursquare V3 API key
    const endpoint = `https://api.foursquare.com/v3/places/search?near=${query}&categories=13032,14009,16000&limit=10`; // Categories: Cafes, Libraries, Parks

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
        const enrichedResults = data.results.map((place) => ({
          id: place.fsq_id,
          name: place.name,
          address: place.location?.formatted_address || "No address available",
          city: place.location?.locality || query,
          country: place.location?.country || "N/A",
          longitude: place.geocodes?.main?.longitude,
          latitude: place.geocodes?.main?.latitude,
        }));

        setResults(enrichedResults);
      } else {
        setResults([]);
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
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 2 }}>
      <TextField
        label="Enter City (e.g., Jeddah)"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      <Box mt={3}>
        {results.length === 0 ? (
          <Typography variant="body2" color="textSecondary">
            No results found. Please try a different search query.
          </Typography>
        ) : (
          results.map((result, index) => (
            <Box key={index} sx={{ mt: 2 }}>
              <Typography variant="h6">{result.name}</Typography>
              <Typography variant="body1">Address: {result.address}</Typography>
              <Typography variant="body2">City: {result.city}</Typography>
              <Typography variant="body2">Country: {result.country}</Typography>
              <Typography variant="caption">
                Coordinates: {result.latitude}, {result.longitude}
              </Typography>
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};

export default PlaceSearch;
