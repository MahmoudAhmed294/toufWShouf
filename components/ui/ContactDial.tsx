import * as React from 'react';
import {
  Box,
  Fab,
  IconButton,
  Button,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { ChatBubble, HorizontalRule } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export default function ContactDial(props: any) {
  const [open, setOpen] = React.useState(false);
  const toggleOpenAndclose = () => setOpen(!open);
  const { t } = useTranslation();

  return (
    <Box sx={{ position: 'fixed', zIndex: 222, bottom: 100, right: 100 }}>
      <SpeedDialItem open={open}>
        <Box sx={{ color: 'body.light' }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              borderRadius: '5px  5px 0  0',
              backgroundColor: 'secondary.main',
              px: 1.5,
              py: 1,
            }}
          >
            <Typography variant="body2"> {t('Leave  a message')}</Typography>
            <IconButton
              onClick={toggleOpenAndclose}
              sx={{ color: 'body.light' }}
            >
              <HorizontalRule />
            </IconButton>
          </Stack>
          <Stack
            sx={{
              backgroundColor: 'body.light',
              p: 1.5,
              maxWidth: '250px',
              borderRadius: '0  0 5px  5px',
            }}
            direction="column"
            spacing={2}
          >
            <TextField
              placeholder="Enter your name"
              size="small"
              type="string"
              fullWidth
            />
            <TextField
              placeholder="Enter your Email"
              size="small"
              type="email"
              fullWidth
            />
            <TextField
              placeholder="Enter your Email"
              size="small"
              type="string"
              multiline
              fullWidth
              rows={4}
            />
            <Button type="submit" variant="contained" fullWidth>
              {t('Send')}
            </Button>
          </Stack>
        </Box>
      </SpeedDialItem>
      <Fab color="secondary" aria-label="add" onClick={toggleOpenAndclose}>
        <ChatBubble />
      </Fab>
    </Box>
  );
}

interface SpeedDialItemPropos {
  window?: () => Window;
  children: React.ReactElement;
  open: boolean;
}

function SpeedDialItem(props: SpeedDialItemPropos) {
  const { children, window, open } = props;

  return <>{open ? <>{children}</> : ''}</>;
}
