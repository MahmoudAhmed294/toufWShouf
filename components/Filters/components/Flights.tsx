import {Box , Grid} from "@mui/material"
import React ,{FunctionComponent} from 'react'      
import { useTranslation } from 'react-i18next';      
interface Props {}
const Flights :FunctionComponent<Props> = () => {

    const {t} = useTranslation()      

  return (
    <div>
     Flights
    </div>
  )
};

export default Flights
