import {Box , Grid} from "@mui/material"
import React ,{FunctionComponent} from 'react'      
import { useTranslation } from 'react-i18next';      
interface Props {}
const Packages :FunctionComponent<Props> = () => {

    const {t} = useTranslation()      

  return (
    <div>
     Packages
    </div>
  )
};

export default Packages
