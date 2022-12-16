import React from 'react';
import { Box } from '@mui/material';

interface EventCardTypeColorBoxProps {
  color?: string;
}

export const EventCardTypeColorBox = (props: EventCardTypeColorBoxProps) => {
  const { color = '#FFB763' } = props;

  return (
    <Box
      sx={{
        width: '100%',
        height: '15px',
        backgroundColor: color,
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px'
      }}
    />
  );
};
