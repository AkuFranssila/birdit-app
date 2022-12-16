import { BasePage } from '@pages/layout/BasePage';
import { Grid } from '@mui/material';
import EventCard from '../../components/eventCard/EventCard';
import mockData from '../../mockData/eventCardsMockData.json';
import { CarouselWithCTA } from '../../components/carousel/CarouselWithCTA';
import { Toolbar } from '../../components/toolbar/Toolbar';

export const EventsHome = () => {
  const data = mockData.slice(0, 100);

  return (
    <BasePage>
      <CarouselWithCTA />
      <Toolbar />
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {data.map((eventCard) => (
          <Grid item xs={'auto'} key={eventCard.id.$oid}>
            <EventCard {...eventCard} />
          </Grid>
        ))}
      </Grid>
    </BasePage>
  );
};
