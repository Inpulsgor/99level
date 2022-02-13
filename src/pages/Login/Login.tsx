import { FC } from 'react';
import { Grid } from '@mui/material';
import { LoginForm } from 'common/components';
import { PageWrapper } from 'common/layout'

const Login: FC = () => {
	return (
		<PageWrapper>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{ minHeight: '100vh' }}
			>
				<Grid item xs={3}>
					<LoginForm />
				</Grid>
			</Grid>
		</PageWrapper>
	)
}

export default Login
