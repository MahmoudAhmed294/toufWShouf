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
  Paper,
  Rating,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

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
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
            sx={{
              '& .MuiRating-iconFilled': {
                color: 'primary.main',
              },
              '& .MuiRating-iconEmpty': {
                color: 'primary.main',
              },
            }}
            icon={<StarRounded fontSize="inherit" />}
            emptyIcon={<StarOutlineRounded fontSize="inherit" />}
          />
          {/* <StyledRating
  name="customized-color"
  defaultValue={2}
  getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
  precision={0.5}
  icon={<StarOutlineRounded fontSize="inherit" />}
  emptyIcon={<StarRounded fontSize="inherit" />}
/> */}
        </CardContent>
      </Card>
    </Grid>
  );
  //   return (
  //     <Grid item container xs={3}>
  //       <Paper
  //         elevation={0}
  //         variant="outlined"
  //         sx={{
  //           backgroundImage: `url(${mainImage})`,
  //           backgroundPosition: 'top',
  //           backgroundSize: 'cover',
  //           backgroundRepeat: 'no-repeat',
  //           height: '100%',
  //           width: '100%',
  //           borderTop: 0,
  //         }}
  //       >
  //         <Stack direction="column">
  //           <Stack direction="row">
  //             <Box
  //               sx={{
  //                 backgroundColor: 'body.light',
  //                 borderRadius: '0 0 10px 0',
  //                 p: 1,
  //                 ml: '-1px',
  //               }}
  //             >
  //               <Typography variant="caption" sx={{ color: 'main.lightGray' }}>
  //                 {t('Start from')}
  //               </Typography>
  //               <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
  //                 {price} EGP
  //               </Typography>
  //             </Box>
  //             <Box>

  //             <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />

  //             </Box>
  //           </Stack>
  //           <Stack direction="column"></Stack>
  //         </Stack>
  //       </Paper>
  //     </Grid>
  //   );
};

export default Products;
