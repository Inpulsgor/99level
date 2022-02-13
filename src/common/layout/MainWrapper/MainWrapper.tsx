import { FC } from 'react';
import { Box } from '@mui/material';

const MainWrapper: FC = ({ children }) => (
		<Box component="main">{children}</Box>
	)

export default MainWrapper;
