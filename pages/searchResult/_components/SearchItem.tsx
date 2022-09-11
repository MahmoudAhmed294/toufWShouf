import { Grid, Box, Stack, Typography, Button, Paper } from "@mui/material";
import Image from "next/image";
import Tags from "@/components/products/Tags";
import ProductRating from "@/components/products/ProductRating";
import Img from "@/assets/images/products/S1.jpg";
import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
interface Props {
  // id: number;
  // title: string;
  // rating: number;
  price?: number;
  // mainImage: string;
  offerPrice?: number | null;
  offer?: boolean;
}
const SearchItem: FunctionComponent<Props> = ({
  offer = false,
  price = 850,
  offerPrice = 850,
}) => {
  const { t } = useTranslation();

  return (
    <Paper
      elevation={1}
      sx={{
        position: "relative",
        backgroundColor: "gray.light",
        my: 3,
        borderRadius: "8px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={3.5} sx={{ pt: "0 !important" }}>
          <Image
            src={Img}
            alt="product"
            style={{ zIndex: 0, borderRadius: "8px  0 0 8px !important" }}
            layout="responsive"
            quality={80}
            placeholder="blur"
          />
          <Box
            sx={{
              backgroundColor: offer ? "secondary.main" : "gray.light",
              borderRadius: "0 0 8px 0",
              p: 1,
              ml: "-1px",
              position: "absolute",
              top: 0,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "main.lightGray",
                textDecoration: offer ? "line-through" : "unset",
              }}
            >
              {offer ? t(`${price} EGP`) : ""}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: offer ? "body.light" : "primary.main" }}
            >
              {t(`${offerPrice}`)} EGP
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8.5} sx={{ p: 3 }}>
          <Stack
            direction="column"
            alignItems="start"
            spacing={2}
            sx={{ width: "100%" }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <Typography variant="h3">{t("Gravity Code")}</Typography>
              <ProductRating rating={4.5} readOnly />
            </Stack>
            <Tags tags="Entertainment Trip, Historic Trip, Youth Journey" />

            <Typography variant="body1">
              {t(
                "Gravity Code is the Largest Adventure Park in Egypt that brings you joyfulness. Gravity Code is set to change the recreation landscape in Egypt"
              )}
            </Typography>
            <Button variant="contained" size="large">
              {t("More Details")}
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SearchItem;
