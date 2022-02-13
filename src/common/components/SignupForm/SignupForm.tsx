import { FC, FormEvent } from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Grid, Typography } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { ROUTES } from 'types/enum';
import styles from './SignupForm.styles';

const SignupForm: FC = () => {
	const navigate = useNavigate();
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {};

	return (
		<Box sx={styles.wrapper}>
			<Avatar sx={styles.avatar}>
				<LockOutlinedIcon />
			</Avatar>

			<Typography component="span" variant="h5" sx={styles.title}>
				Sign up
			</Typography>

			<Box component="form" noValidate onSubmit={handleSubmit} >
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							name="firstName"
							fullWidth
							id="firstName"
							label="First Name"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							id="lastName"
							label="Last Name"
							name="lastName"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							id="email"
							label="Email Address"
							name="email"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
							control={<Checkbox value="allowExtraEmails" color="primary" />}
							label="Accept registration agreement"
						/>
					</Grid>
				</Grid>

				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				>
					Sign Up
				</Button>

				<Grid container justifyContent="flex-end">
					<Grid item>
					<Button onClick={() => navigate(ROUTES.LOGIN)}>
						<Typography variant="body2">
							Already have an account? Sign in
						</Typography>
					</Button>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}

export default SignupForm
