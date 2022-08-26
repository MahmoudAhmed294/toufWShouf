import {Box , Grid} from "@mui/material"
import React ,{FunctionComponent} from 'react'      
import { useTranslation } from 'react-i18next';      
interface Props {}
const TailoredServices :FunctionComponent<Props> = () => {

    const {t} = useTranslation()      

  return (
    <div>
     TailoredServices
    </div>
  )
};

export default TailoredServices
