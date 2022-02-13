import { FC } from 'react';
import { Box } from '@mui/material';
import { format } from 'date-fns';
import { FooterProps } from './Footer.types';
import styles from './Footer.styles';
import data from 'common/static/data.json';

const Footer: FC<FooterProps> = () => {
  const currentYear = format(new Date(), 'yyyy');
	const copyright = data.layout.footer.copyright;

  return (
    <Box sx={styles.footer} component="footer">
      <Box component="span">
        {currentYear} {copyright}
      </Box>
    </Box>
  );
};

export default Footer;
