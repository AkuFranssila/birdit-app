import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';
import { CarouselImage } from './CarouselImage';

const items = [
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!'
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!'
  }
];

export const CarouselWithCTA = (props: CarouselProps) => {
  return (
    <Box
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ width: '100%', paddingBottom: '1rem', display: 'flex' }}
    >
      <Carousel
        autoPlay={true}
        animation="slide"
        sx={{ width: '100%', height: '350px' }}
      >
        {items.map((item, i) => (
          <CarouselImage key={i} {...item} />
        ))}
      </Carousel>
    </Box>
  );
};
