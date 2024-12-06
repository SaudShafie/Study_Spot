import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const StudySpotCard = ({ spot }) => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const theme = useTheme();

 
  const mockReviews = [
    "Great place to study! 📚✨",
    "Loved the ambiance here. ☕🌿",
    "Quiet and comfortable. 🛋️👍",
    "Perfect spot for group study. 👥📖",
    "The WiFi is super fast! ⚡💻",
    "Amazing coffee and peaceful environment. ☕😊",
    "A bit noisy, but overall a good place. 🔊🤔",
    "Loved the natural light here! ☀️😍",
    "Spacious and clean. 🧼👌",
    "Great for late-night studying! 🌙📖",
    "Friendly staff and good snacks. 🍪😁",
    "Comfortable seating and good vibes. ✨🪑",
    "Nice library atmosphere. 📖🏛️",
    "The perfect place to focus. 🎯🔕",
    "Cozy and welcoming. 🏠😊"
  ];

  useEffect(() => {
    
    const shuffledReviews = mockReviews.sort(() => 0.5 - Math.random());
    setReviews(shuffledReviews.slice(0, 3));
  }, [spot.id]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/details/${spot.id}`);
    }
  };

  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.latitude)},${encodeURIComponent(spot.longitude)}`;





  return (
    <Card
      sx={{
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        boxShadow: theme.shadows[3],
        borderRadius: "8px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        "&:hover": {
          boxShadow: theme.shadows[6],
        },
      }}
      tabIndex={0}
      onKeyPress={handleKeyPress}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'left' }}>
          {spot.name}
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ textAlign: 'left' }}>
          {spot.address}
        </Typography>

        {/* Displaying reviews */}
        <Box sx={{ mt: theme.spacing(3), textAlign: 'left' }}>
          <Typography variant="h6">Reviews:</Typography>
          {reviews.length === 0 ? (
            <Typography variant="body2" color="textSecondary">
              No reviews available.
            </Typography>
          ) : (
            reviews.map((review, index) => (
              <Typography key={index} variant="body2" sx={{ mt: theme.spacing(1) }}>
                - {review}
              </Typography>
            ))
          )}
        </Box>
      </CardContent>

      <Box sx={{ mt: theme.spacing(2), textAlign: 'center' }}>
        <Button
          variant="outlined"
          color="secondary"
          href={googleMapsLink}
          target="_blank"
          sx={{ fontWeight: 500 }}
        >
          View on Google Maps
        </Button>
      </Box>
    </Card>
  );
};

export default StudySpotCard;
