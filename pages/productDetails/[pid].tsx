import React from 'react';
import {
  Box,
  Grid,
  Stack,
  Button,
  Container,
  Typography,
  IconButton,
  Divider,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import productDetailsImg from '@/assets/images/products/productDetails.jpg';
import Image from 'next/image';
import Filter from '@/components/ProductDetails/Filter';
import ProductRating from '@/components/ui/ProductRating';
import {
  AttachMoney,
  ExpandMore,
  Favorite,
  LocalOfferRounded,
  Place,
  PlayArrowRounded,
  Signpost,
  Update,
} from '@mui/icons-material';
import Partners from '@/components/ui/Partners';
import BestProducts from '@/components/products/BestProducts';
import DetailsTabs from '@/components/ProductDetails/DetailsTabs';

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
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            zIndex: 200,
            height: '390px',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              backgroundColor: 'body.main',
              opacity: 0.3,
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: 1,
            }}
          />
          <Image
            src={productDetailsImg}
            alt="banner"
            style={{ zIndex: 0 }}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            placeholder="blur"
          />
          <Stack
            direction="column"
            justifyContent="top"
            alignItems="center"
            sx={{
              position: 'relative',
              zIndex: 3,
              color: 'body.light',
              height: '100%',
              pt: 5,
            }}
          >
            <Container maxWidth="lg">
              <Filter />
            </Container>
          </Stack>
        </Box>
        <Container maxWidth="lg" sx={{ mt: 3 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Typography variant="h4" sx={{ mb: 2 }}>
              {t('The Egyptian Gulf (Hospice of  the Sultan)')}
            </Typography>
            <ProductRating rating={3.5} readOnly />
          </Stack>
          <Stack
            direction="row"
            justifyContent="start"
            alignItems="center"
            spacing={5}
            sx={{ mb: 3 }}
          >
            <Button variant="text" sx={{ padding: 0 }}>
              <IconButton color="primary" sx={{ boxShadow: 1, mr: 2 }}>
                <Favorite />
              </IconButton>
              <Typography variant="body1" sx={{ color: 'body.main' }}>
                {t('Add to Wishlist')}
              </Typography>
            </Button>
            <Button variant="text" sx={{ padding: 0 }}>
              <IconButton color="primary" sx={{ boxShadow: 1, mr: 2 }}>
                <PlayArrowRounded />
              </IconButton>
              <Typography variant="body1" sx={{ color: 'body.main' }}>
                {t('Watch Video')}
              </Typography>
            </Button>
            <Button variant="text" sx={{ padding: 0 }}>
              <IconButton color="primary" sx={{ boxShadow: 1, mr: 2 }}>
                <Signpost />
              </IconButton>
              <Typography variant="body1" sx={{ color: 'body.main' }}>
                {t('Map')}
              </Typography>
            </Button>
          </Stack>
          <Divider sx={{ my: 0.5 }} />
          <Stack
            direction="row"
            justifyContent="start"
            alignItems="center"
            spacing={1}
            sx={{ my: 3, color: 'secondary.main' }}
          >
            <LocalOfferRounded />
            <Typography variant="body1">
              {t('Entertainment Trip, Historic Trip, Youth Journey')}
            </Typography>
          </Stack>
          <Paper elevation={1}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={7}
              sx={{ my: 3, p: 4 }}
            >
              <Stack
                direction="row"
                justifyContent="start"
                alignItems="center"
                spacing={1}
                sx={{ color: 'gray.main' }}
              >
                <Place />
                <Stack direction="row" spacing={0.5}>
                  <Typography variant="body1"> {t(' Location: ')} </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'body.main' }}>
                    {t(' Egypt, Cairo')}
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                justifyContent="start"
                alignItems="center"
                spacing={1}
                sx={{ color: 'gray.main' }}
              >
                <AttachMoney />
                <Stack direction="row" spacing={0.5}>
                  <Typography variant="body1"> {t(' Price: ')} </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'body.main' }}>
                    {t(' 850 EGP')}
                  </Typography>
                </Stack>
              </Stack>

              <Stack
                direction="row"
                justifyContent="start"
                alignItems="center"
                spacing={1}
                sx={{ color: 'gray.main' }}
              >
                <Update />
                <Stack direction="row" spacing={0.5}>
                  <Typography variant="body1">
                    {' '}
                    {t(' Duration time: ')}{' '}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'body.main' }}>
                    {t(' 3 Hour/s')}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Box>
                <Accordion
                  TransitionProps={{ unmountOnExit: true }}
                  sx={{
                    boxShadow: 2,
                    mt: 2,
                    borderRadius: 2,
                    '&:before': {
                      content: 'unset',
                    },
                    '&:first-of-type': {
                      borderRadius: 2,
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="subtitle1">Tour Including</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  TransitionProps={{ unmountOnExit: true }}
                  sx={{
                    boxShadow: 2,
                    mt: 2,
                    borderRadius: 2,
                    '&:before': {
                      content: 'unset',
                    },
                    '&:last-of-type': {
                      borderRadius: 2,
                    },

                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="subtitle1">
                      Cancellation policy
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      You can cancel up to 24 hours in advance of the experience
                      for a full refund. For a full refund, you must cancel at
                      least 24 hours before the experience’s start time. If you
                      cancel less than 24 hours before the experience’s start
                      time, the amount you paid will not be refunded. Any
                      changes made less than 24 hours before the experience’s
                      start time will not be accepted. Cut-off times are based
                      on the experience’s local time.{' '}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <DetailsTabs />
            </Grid>
          </Grid>

          <BestProducts  title="Related Trips" />

          <Partners />
        </Container>
      </Box>
    </div>
  );
};

export default Index;



