import {Box , Grid} from "@mui/material"
import React ,{FunctionComponent} from 'react'      
import { useTranslation } from 'react-i18next';      
interface Props {}
const Hotels :FunctionComponent<Props> = () => {

    const {t} = useTranslation()      

  return (
    <div>
     Hotels
    </div>
  )
};

export default Hotels
