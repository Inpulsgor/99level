import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import data from 'common/static/data.json';
import styles from './NotFound.styles';

const NotFound: FC = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography variant="h2" color="primary" sx={styles.title}>
        {data.pages.not_found.title}
      </Typography>
      <Typography sx={styles.text}>{data.pages.not_found.text}</Typography>
    </Box>
  );
};

export default NotFound;
