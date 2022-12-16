import { Container } from '@mui/material';
import LastActiveBreadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { ContentContainer } from './ContentContainer';
import { Footer } from './Footer';
import { Header } from './Header';
import useMediaQuery from '@mui/material/useMediaQuery';

interface BasePageProps {
  children: React.ReactNode;
}

export const BasePage = (props: BasePageProps) => {
  const { children } = props;
  const Grid4 = useMediaQuery('(min-width: 1504px)');
  const Grid3 = useMediaQuery('(min-width: 1133px)');
  const Grid2 = useMediaQuery('(min-width: 761px)');
  const Grid1 = useMediaQuery('(min-width: 371px)');

  //TODO: Check how to do this better
  const contentWidth = Grid4
    ? '1504px'
    : Grid3
    ? '1133px'
    : Grid2
    ? '761px'
    : Grid1
    ? '371px'
    : '100%';

  return (
    <Container
      disableGutters
      sx={{ width: '100vw', height: '100vh' }}
      maxWidth={'xl'}
    >
      <Header />
      <Container
        sx={{ minHeight: '800px', width: contentWidth }}
        maxWidth={false}
      >
        <LastActiveBreadcrumbs />
        <ContentContainer children={children} />
      </Container>
      <Footer />
    </Container>
  );
};
