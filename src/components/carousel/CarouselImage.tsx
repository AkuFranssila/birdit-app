import React from 'react';
import { Box } from '@mui/material';

export const CarouselImage = (props: CarouselImageProps) => {
  const { image, title, description } = props;
  return (
    <Box
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px'
      }}
    >
      <img
        src={
          image
            ? image
            : 'https://via.placeholder.com/1500x1500?text=Placeholder'
        }
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '8px',
          top: 0,
          left: 0
        }}
      />
    </Box>
  );
};
