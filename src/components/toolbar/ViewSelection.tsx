import React from 'react';
import { Button } from '@mui/material';
import TableRowsIcon from '@mui/icons-material/TableRows';

export const ViewSelection = () => {
  return (
    <Button
      size="small"
      variant="outlined"
      endIcon={<TableRowsIcon />}
      sx={{
        '.MuiButton-endIcon': {
          padding: 0,
          margin: 0
        }
      }}
    />
  );
};
