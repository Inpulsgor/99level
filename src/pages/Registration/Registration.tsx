import { FC } from 'react';
import { Grid } from '@mui/material';
import { SignupForm } from 'common/components';
import { PageWrapper } from 'common/layout'

const Registration: FC = () => {
	return (
		<PageWrapper>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				style={{ minHeight: '100vh' }}>
				<Grid item xs={3}>
					<SignupForm />
				</Grid>
			</Grid>
		</PageWrapper>
	)
}

export default Registration
