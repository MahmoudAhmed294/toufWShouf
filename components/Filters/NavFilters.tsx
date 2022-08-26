import React from 'react';
import Slider from 'react-slick';

import { Box, Stack, Typography, Container, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FilterTypes } from '.';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{ ...style, color: '#fff' }}
      className={className}
      onClick={onClick}
    >
      <NavigateNextIcon />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{ ...style, color: '#fff' }}
      onClick={onClick}
      className={className}
    >
      <NavigateBeforeIcon />
    </div>
  );
}

type Props = {
  action: string;
  changeFilter: Function;
};
export default function NavFilters({ action, changeFilter }: Props) {
  const { t } = useTranslation();

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Container maxWidth={'md'} sx={{ color: 'body.light' }}>
      <Slider {...settings}>
        {FilterTypes.map((value, key) => (
          <Box
            key={key}
            sx={{
              px: 5.6,
              color: action === value.name ? 'primary.main' : 'body.light',
              textDecoration: action === value.name ? 'underline' : 'none',
              textUnderlineOffset: '0.8rem',
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1} sx={{cursor:"pointer"}} onClick={() => changeFilter(value.name)}>
                {value.icon}
                <Typography variant="body1">{t(`${value.name}`)}</Typography>
            </Stack>
          </Box>
        ))}
      </Slider>
    </Container>
  );
}
