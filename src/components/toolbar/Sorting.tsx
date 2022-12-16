import React from 'react';
import { Button } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

export const Sorting = () => {
  return (
    <Button variant="outlined" startIcon={<SortIcon />}>
      Sort
    </Button>
  );
};
