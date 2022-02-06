import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';

export default function App() {
  return (
    <Box sx={{
      width: 1,
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'primary.main'
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          bgcolor: 'background.paper',
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: 10,
          fontWeight: 'bold',
        }}
      >
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            m: 3,
            minWidth: { md: 350 },
          }}
        >
          <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
            Fortuna Project
          </Box>
          <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
            $XXX,XXX,XXX
          </Box>
          <Box
            sx={{
              mt: 1.5,
              p: 0.5,
              backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
              borderRadius: '5px',
              color: 'primary.main',
              fontWeight: 'medium',
              display: 'flex',
              fontSize: 12,
              alignItems: 'center',
              '& svg': {
                fontSize: 21,
                mr: 0.5,
              },
            }}
          >
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
