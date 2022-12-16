import react from 'react';
import { Box, Paper, Tooltip, Typography, Button } from '@mui/material';
import { EventCardTypeColorBox } from './EventCardTypeColorBox';
import AccessTime from '@mui/icons-material/AccessTime';
import Place from '@mui/icons-material/Place';
import Person from '@mui/icons-material/Person';
import { formatEventStartDate } from '../../utils/timeUtils';
import { Link as RouterLink } from 'react-router-dom';

interface EventCardProps {
  color?: string;
  image?: string;
  seriesTitle?: string;
  eventTitle?: string;
  currentPlayers?: number;
  maxPlayers?: number;
  isFull?: boolean;
  startDate?: string;
  formatIcon?: string;
  endDate?: string;
  location?: string;
  description?: string;
}

export default function EventCard(props: EventCardProps) {
  const {
    color = '#FFB763',
    image = 'https://via.placeholder.com/150x150?text=Placeholder',
    seriesTitle,
    eventTitle,
    startDate = '2022-12-12 10:16:11.818793',
    endDate = '2022-12-12 17:16:11.818793',
    location = 'Talin Frisbeegolfpuisto 2022 - Kesä layout - Par 58',
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    currentPlayers = 0,
    maxPlayers = 10,
    isFull = false,
    formatIcon
  } = props;

  return (
    <Box>
      <Paper>
        <EventCardTypeColorBox />
        {/* Content container */}
        <Box
          px={'15px'}
          py={'10px'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '340px',
            maxHeight: '340px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'row',
              height: '60px'
            }}
          >
            {/* IMAGE + TITLES CONTAINER*/}
            <Box sx={{ width: '20%' }}>
              {/* IMAGE https://via.placeholder.com/150x150?text=Placeholder*/}
              <Box
                sx={{
                  height: '55px',
                  width: '55px',
                  img: {
                    borderRadius: '50%',
                    width: '100%',
                    height: '100%'
                  }
                }}
              >
                <img src={image} loading="lazy" />
              </Box>
            </Box>
            <Box
              sx={{
                width: '80%',
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                paddingLeft: '0.5rem'
              }}
            >
              {/* TITLES CONTAINER*/}
              <Box>
                {/* SERIES TITLE*/}
                <Typography variant="subtitle2">{seriesTitle}</Typography>
              </Box>
              <Box>
                {/* TITLE*/}
                <Typography variant="h6">{eventTitle}</Typography>
              </Box>
            </Box>
          </Box>
          {/* DATE CONTAINER*/}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'row',
              paddingTop: '1rem',
              height: '50px'
            }}
          >
            <Box sx={{ paddingRight: '0.5rem' }}>
              <AccessTime />
            </Box>
            <Box>
              <Typography variant="subtitle2">
                {formatEventStartDate(startDate, endDate)}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'row',
              paddingTop: '0.2rem',
              maxHeight: '60px'
            }}
          >
            {/* LOCATION*/}
            <Box sx={{ paddingRight: '0.5rem' }}>
              <Place />
            </Box>
            <Box>
              <Typography variant="subtitle2">{location}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'row',
              paddingTop: '0.2rem',
              height: '40px'
            }}
          >
            {/* PLAYERS */}
            <Box sx={{ paddingRight: '0.5rem' }}>
              <Person />
            </Box>
            <Box>
              <Typography variant="subtitle2">{`${currentPlayers} / ${maxPlayers}`}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              paddingLeft: '0.2rem',
              height: '110px'
            }}
          >
            {/* DESCRIPTION*/}
            <Tooltip title={description} placement="top">
              <Typography
                variant="body1"
                sx={{ maxHeight: '100px', overflow: 'hidden' }}
              >
                {description}
              </Typography>
            </Tooltip>
          </Box>
          <Box
            bottom={0}
            sx={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              paddingTop: '0.5rem'
            }}
          >
            {/* ACTION*/}
            <Button
              variant="outlined"
              component={RouterLink}
              to="/"
              sx={{ textTransform: 'uppercase', width: '100%' }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
