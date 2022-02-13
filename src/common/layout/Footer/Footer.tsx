import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import { Box } from '@mui/material';
import { format } from 'date-fns';

export type FooterProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

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
