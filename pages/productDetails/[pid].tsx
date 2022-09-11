import React from 'react';
import { Box, Grid, Container, Divider } from '@mui/material';
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Partners from '@/components/ui/Partners';
import BestProducts from '@/components/ui/BestProducts';
import DetailsTabs from '@/components/ProductDetails/DetailsTabs';
import FilterContent from '@/components/ProductDetails/FilterContent';
import TitleAndRating from '@/components/ProductDetails/TitleAndRating';
import WatchVideoAndMap from '@/pages/productDetails/_components/WatchVideoAndMap';
import Tags from '@/components/ProductDetails/Tags';
import LocationAndPriceAndTime from '@/components/ProductDetails/LocationAndPriceAndTime';
import Accordion from '@/components/products/Accordion';

interface Props {}
const Index: NextPage<Props> = () => {
  const router = useRouter();
  const { pid } = router.query;

  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title> Product Details </title>
      </Head>
      <Box>
        <FilterContent />
        <Container maxWidth="lg" sx={{ mt: 3 }}>
          <TitleAndRating
            rating={3.5}
            title={'The Egyptian Gulf (Hospice of  the Sultan)'}
          />
          <WatchVideoAndMap />
          <Divider sx={{ my: 0.5 }} />
          <Tags tags={'Entertainment Trip, Historic Trip, Youth Journey'} />
          <LocationAndPriceAndTime
            time={' 3 Hour/s'}
            location="' Egypt, Cairo'"
            price={850}
          />
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Accordion
                data={[
                  {
                    title: 'Tour Including',
                    des: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                  },
                  {
                    title: 'Cancellation policy',
                    des: `
                  You can cancel up to 24 hours in advance of the experience
                  for a full refund. For a full refund, you must cancel at
                  least 24 hours before the experience’s start time. If you
                  cancel less than 24 hours before the experience’s start
                  time, the amount you paid will not be refunded. Any
                  changes made less than 24 hours before the experience’s
                  start time will not be accepted. Cut-off times are based
                  on the experience’s local time.{' '}
        
                  `,
                  },
                ]}
              />
            </Grid>
            <Grid item xs={7}>
              <DetailsTabs id={`${pid}`} />
            </Grid>
          </Grid>

          <BestProducts title="Related Trips" />

          <Partners />
        </Container>
      </Box>
    </div>
  );
};

export default Index;
