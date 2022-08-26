import {Box , Grid} from "@mui/material"
import React ,{FunctionComponent} from 'react'      
import { useTranslation } from 'react-i18next';      
interface Props {}
const Tickets :FunctionComponent<Props> = () => {

    const {t} = useTranslation()      

  return (
    <div>
     Tickets
    </div>
  )
};

export default Tickets
