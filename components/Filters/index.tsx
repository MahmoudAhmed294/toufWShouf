import { Box, Container, Grid, Typography } from '@mui/material';
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
    <Container maxWidth="lg" sx={{ position: 'relative', top: '-150px' }}>
      <NavFilters action={filterSelected} changeFilter={changeFilter} />
      < >
      {FilterTypes.map(({ name, component }, _) => name === filterSelected && component
      )}
      </>
    </Container>
  );
};

export default Index;
