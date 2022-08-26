import {Box , Grid} from "@mui/material"
import React ,{FunctionComponent} from 'react'      
import { useTranslation } from 'react-i18next';      
interface Props {}
const Outings :FunctionComponent<Props> = () => {

    const {t} = useTranslation()      

  return (
    <div>
     Outings
    </div>
  )
};

export default Outings
