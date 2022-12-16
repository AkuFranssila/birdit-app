import React from 'react';
import { Box, Stack } from '@mui/material';
import { Sorting } from './Sorting';
import { ViewSelection } from './ViewSelection';
import { Filters } from './Filters';

export const Toolbar = (props: ToolbarProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        paddingBottom: '1rem',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <Box>
        <Filters />
      </Box>
      <Box>
        <Stack direction="row" spacing={2}>
          <Sorting />
          <ViewSelection />
        </Stack>
      </Box>
    </Box>
  );
};
