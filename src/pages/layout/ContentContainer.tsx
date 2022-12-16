import { Box } from '@mui/material';

interface ContentContainerProps {
  children: React.ReactNode;
}

export const ContentContainer = (props: ContentContainerProps) => {
  const { children } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        paddingTop: '1rem'
      }}
    >
      {children}
    </Box>
  );
};
