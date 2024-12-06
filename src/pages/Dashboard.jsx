import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Divider, List, ListItem, ListItemText } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HistoryIcon from "@mui/icons-material/History";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import './Dashboard.css';

const Dashboard = () => {
  return (
    <Box className="dashboard-wrapper">
      {/* Button Container */}
      <Box className="dashboard-button-container">
        <Button
          component={Link}
          to="/spots"
          variant="contained"
          color="primary"
          className="dashboard-button"
        >
          View Study Spots
        </Button>
        <Button
  component={Link}
  to="/"
  variant="outlined"
  className="dashboard-button logout-button" // Add both general and specific classes
>
  Logout
</Button>

      </Box>

      {/* Header Section */}
      <Box className="dashboard-content">
        <Typography variant="h4" className="dashboard-header">
          Welcome to Your Personal Study Dashboard! 👋
        </Typography>

        {/* Favorite Spots Section */}
        <Box className="list-section">
          <Typography variant="h5" className="dashboard-section-title">
            <FavoriteIcon color="error" sx={{ mr: 1 }} />
            Your Favorite Spots
          </Typography>
          <Divider className="dashboard-divider" />
          <List>
            <ListItem className="dashboard-list-item">
              <ListItemText
                primary="Cozy Cafe"
                secondary="123 Main St"
                secondaryTypographyProps={{ sx: { color: 'lightgray' } }}
              />
            </ListItem>
            <ListItem className="dashboard-list-item">
              <ListItemText
                primary="Library Downtown"
                secondary="456 Park Ave"
                secondaryTypographyProps={{ sx: { color: 'lightgray' } }}
              />
            </ListItem>
          </List>
        </Box>

        {/* Recently Visited Section */}
        <Box className="list-section">
          <Typography variant="h5" className="dashboard-section-title">
            <HistoryIcon color="success" sx={{ mr: 1 }} />
            Recently Visited
          </Typography>
          <Divider className="dashboard-divider" />
          <List>
            <ListItem className="dashboard-list-item">
              <ListItemText
                primary="Urban Park"
                secondary="789 Elm St"
                secondaryTypographyProps={{ sx: { color: 'lightgray' } }}
              />
            </ListItem>
            <ListItem className="dashboard-list-item">
              <ListItemText
                primary="Mountain Cafe"
                secondary="101 Hillside Rd"
                secondaryTypographyProps={{ sx: { color: 'lightgray' } }}
              />
            </ListItem>
          </List>
        </Box>

        {/* Recommended Study Spots Section */}
        <Box className="list-section">
          <Typography variant="h5" className="dashboard-section-title">
            <StarOutlineIcon color="warning" sx={{ mr: 1 }} />
            Recommended Study Spots
          </Typography>
          <Divider className="dashboard-divider" />
          <Typography variant="body2" color="textSecondary">
            Feature coming soon! Get personalized recommendations based on your activity.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
