import { Typography, Button, Box, TextField } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { TextFields } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/useStore';
import {  toggleLanguage } from '@/store/languageSlice';
import {ClientStorage} from '@/hooks/useLocalStroge';
import Carousel from '@/components/ui/Carousel';
import ContactDial from '@/components/ui/ContactDail';
import Filter from '@/components/Filters';

const Home: NextPage = () => {

  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    const language = ClientStorage.get("language");
    dispatch(toggleLanguage(language === "ar" ? "ar" : "en"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <ContactDial />
    <Box >
      <Carousel />
    </Box>
    <Filter />
    </Box>
  );
};

export default Home;
