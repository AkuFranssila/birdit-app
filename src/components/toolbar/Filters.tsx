import React from 'react';
import { Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

export const Filters = () => {
  return (
    <Button variant="outlined" startIcon={<FilterListIcon />}>
      Filter
    </Button>
  );
};
