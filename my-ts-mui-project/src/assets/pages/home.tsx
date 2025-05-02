import React from "react";
import { Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Typography variant="h4">Home Page</Typography>
      <Button component={Link} to="/about" variant="contained" color="primary">
        Go to About
      </Button>
    </Container>
  );
};

export default Home;