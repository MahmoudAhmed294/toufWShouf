import React, { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
//
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import palette from './palette';
import typography from './typography';
import { useAppSelector } from 'hooks/useStore';
import { getDir } from '@/store/languageSlice';
import { container } from './components/container';


type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const dir = useAppSelector(getDir);
  const FONT_En = 'Montserrat , sans-serif';
  const FONT_Ar = 'Cairo , sans-serif';

  let theme = useMemo(() => {
    return createTheme({
      direction: dir,
      typography: {
        fontFamily: dir === 'ltr' ? FONT_En : FONT_Ar,
        ...typography,
      },
      palette,
      components: {
        ...container,
      },
      shape: { borderRadius: 4 },
      // components: { ...button },
    });
  }, [dir]);

  const cacheRtl = useMemo(() => {
    if (dir === 'rtl') {
      return createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
      });
    } else {
      return createCache({ key: 'css' });
    }
  }, [dir]);

  theme = responsiveFontSizes(theme);
  return (
    <CacheProvider value={cacheRtl}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </CacheProvider>
  );
}
