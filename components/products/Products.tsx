import {
  Favorite,
  FavoriteBorder,
  StarOutlineRounded,
  StarRounded,
} from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Grid,
  Rating,
  Typography,
  Link,
} from '@mui/material';
import { Stack } from '@mui/system';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import ProductRating from '../ui/ProductRating';

interface Props {
  id: number;
  title: string;
  rating: number;
  price: number;
  mainImage: string;
  offerPrice: number | null;
  offer?: boolean;
}
const Products: FunctionComponent<Props> = (props) => {
  const { id, title, rating, price, mainImage, offerPrice, offer } = props;

  const { t } = useTranslation();
  const router = useRouter();
  return (
    <Grid item container xs={3}>
      <Card
        sx={{
          position: 'relative',
          height: '100%',
          width: '100%',
          boxShadow: 'unset',
        }}
      >
        <CardMedia
          component="img"
          height="60%"
          image={mainImage}
          alt="main Image"
        />
        <CardContent
          sx={{
            py: '16px !important',
            border: '1px solid #C7C7C7',
            borderRadius: '0 0 5px 5px',
          }}
        >
          <Link
            onClick={() => router.push(`productDetails/${id}`)}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: '2',
              cursor: 'pointer',
            }}
          >
            {' '}
          </Link>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems={'center'}
            sx={{
              position: 'absolute',
              top: 0,
              zIndex: 100,
              left: 0,
              right: 0,
            }}
          >
            <Box
              sx={{
                backgroundColor: offer ? 'secondary.main' : 'gray.light',
                borderRadius: '0 0 10px 0',
                p: 1,
                ml: '-1px',
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: 'main.lightGray',
                  textDecoration: offer ? 'line-through' : 'unset',
                }}
              >
                {offer ? t(`${price} EGP`) : t('Start from')}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: offer ? 'body.light' : 'primary.main' }}
              >
                {t(`${offerPrice}`)} EGP
              </Typography>
            </Box>
            <Box
              sx={{
                h: '48px',
                w: '48px',
                borderRadius: '50%',
                backgroundColor: 'body.light',
                mr: 2,
              }}
            >
              <Checkbox
                icon={<FavoriteBorder color="primary" />}
                checkedIcon={<Favorite />}
              />
            </Box>
          </Stack>

          <Typography gutterBottom variant="subtitle1" component="div">
            {t(title)}
          </Typography>

          <ProductRating rating={rating} readOnly />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Products;
