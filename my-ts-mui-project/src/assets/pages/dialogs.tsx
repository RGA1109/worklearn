import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import CustomDialog from "../components/dialog/customDialog";

export default function Dialog() {
  return (
    <Container>
      <Typography variant="h4">About Page</Typography>
      <CustomDialog
        trigger={(
          <Button>
            Testing
          </Button>
        )}
      >
        <Box>
          <Typography variant='h5'>
            Testing this out
          </Typography>
        </Box>
      </CustomDialog>
      <Typography variant="h4">Testing</Typography>

    </Container>
  );
};
