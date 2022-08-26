import {Box , Grid} from "@mui/material"
import React ,{FunctionComponent} from 'react'      
import { useTranslation } from 'react-i18next';      
interface Props {}
const Restaurant :FunctionComponent<Props> = () => {

    const {t} = useTranslation()      

  return (
    <div>
     Restaurant
    </div>
  )
};

export default Restaurant
