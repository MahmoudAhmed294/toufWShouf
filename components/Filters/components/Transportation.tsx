import {Box , Grid} from "@mui/material"
import React ,{FunctionComponent} from 'react'      
import { useTranslation } from 'react-i18next';      
interface Props {}
const Transportation :FunctionComponent<Props> = () => {

    const {t} = useTranslation()      

  return (
    <div>
     Transportation
    </div>
  )
};

export default Transportation
