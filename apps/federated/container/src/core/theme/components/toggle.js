import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { useTheme,  } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useMicroContext } from '@/core/state';

function ThemeToggleSwitch() {
  const theme = useTheme();
  const {store} = useMicroContext()

  return (
      <IconButton sx={{ ml: 1 }} onClick={()=>store.emit('theme.toggle.mode.click')} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
  );
}

export default ThemeToggleSwitch