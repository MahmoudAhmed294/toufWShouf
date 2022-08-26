import React, { FunctionComponent } from 'react';
import { Box, Grid, Toolbar } from '@mui/material';
import Topbar from './Topbar';
import Navbar from './Navbar';
import IsAuthPages from '@/hooks/auth/useIsAuthPages';

interface Props {}
const index: FunctionComponent<Props> = () => {
  return (
    <>
      <Topbar />
      {IsAuthPages() ? '' : <Navbar />}
    </>
  );
};

export default index;
