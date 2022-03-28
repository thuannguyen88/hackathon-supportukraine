import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function BasicButton({ text }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">{text}</Button>
    </Stack>
  );
}

export default BasicButton;
