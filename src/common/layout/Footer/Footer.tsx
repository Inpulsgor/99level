import { FC } from 'react';
import { Box } from '@mui/material';
import { format } from 'date-fns';
import { FooterProps } from './Footer.types'

const Footer: FC<FooterProps> = () => {
  const currentYear = format(new Date(), 'yyyy');

  return (
    <Box component="footer">
      <Box component="span">
        99Level - {currentYear} All Rights Reserved
      </Box>
    </Box>
  );
};

export default Footer;
