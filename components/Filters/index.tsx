import { Box, Container,  Grow } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Outings from './components/Outings';
import Hotels from './components/Hotels';
import Transportation from './components/Transportation';
import Flights from './components/Flights';
import Packages from './components/Packages';
import Tickets from './components/Tickets';
import RestaurantForm from './components/Restaurant';
import TailoredServices from './components/TailoredServices';
import NavFilters from './NavFilters';
import {
  AirplaneTicket,
  BeachAccess,
  DirectionsCar,
  Flight,
  LocalOffer,
  LocationCity,
  Restaurant,
  SupportAgent,
} from '@mui/icons-material';
export const FilterTypes = [
  {
    name: 'Outings',
    component: <Outings />,
    icon: <BeachAccess />,
  },
  {
    name: 'Hotels',
    component: <Hotels />,
    icon: <LocationCity />,
  },
  {
    name: 'Transportation',
    component: <Transportation />,
    icon: <DirectionsCar />,
  },
  {
    name: 'Flights',
    component: <Flights />,
    icon: <Flight />,
  },
  {
    name: 'Packages',
    component: <Packages />,
    icon: <LocalOffer />,
  },
  {
    name: 'Tickets',
    component: <Tickets />,
    icon: <AirplaneTicket />,
  },
  {
    name: 'Restaurant',
    component: <RestaurantForm />,
    icon: <Restaurant />,
  },
  {
    name: 'Tailored Services',
    component: <TailoredServices />,
    icon: <SupportAgent />,
  },
];

interface Props {}
const Index: FunctionComponent<Props> = () => {
  const { t } = useTranslation();
  const [filterSelected, setFilterSelected] = React.useState('Outings');

  const changeFilter = (name: string) => {
    setFilterSelected(name);
  };
  return (
    <Box
      sx={{
        position: 'relative',
        transform: 'translateY(-100%)',
        zIndex: 100,
        p: 3.4,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          backgroundColor: 'body.main',
          opacity: 0.5,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: -1,
        }}
      />
      <Container maxWidth="lg">
        <NavFilters action={filterSelected} changeFilter={changeFilter} />
        <Box sx={{ zIndex: 100, position: 'relative' }}>
          {FilterTypes.map(
            ({ name, component }, _) =>
              name === filterSelected && (
                <Grow in={filterSelected === name}>
                  <div>{component}</div>
                </Grow>
              )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
