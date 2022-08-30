import {Box , Button, Grid ,Typography , Stack , TextField} from "@mui/material";
import Image from "next/image";

import React ,{FunctionComponent} from 'react'      
import { useTranslation } from 'react-i18next';      
interface Props {
    handleBack:Function
    handleNext:Function
}
const Payment :FunctionComponent<Props> = ({handleBack , handleNext}) => {

    const {t} = useTranslation()      

  return (
    <div>
     <Typography variant="subtitle1">
        {t('Choose payment method')}
     </Typography>

     <Grid container spacing={5} >
        <Grid xs={6} item>
            
        </Grid>
        <Grid xs={6} item></Grid>
     </Grid>

     <Grid container sx={{ my: 3 }} justifyContent="space-between">
        <Grid item xs={3}>
          <Button
            onClick={() => handleNext()}
            variant="contained"
            fullWidth
            size="large"
          >
            {t('Confirm')}
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            onClick={() => handleBack()}
            fullWidth
            size="large"
          >
            {t('Back')}
          </Button>
        </Grid>
      </Grid>

    </div>
  )
};

export default Payment
