import { FC } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Box, Avatar, Button, TextField, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { ROUTES } from 'types/enum';
import styles from './LoginForm.styles';

const defaultValues = {
	email: "",
	password: ""
}

const LoginForm: FC = () => {
	const { handleSubmit, formState: { errors } } = useForm({
		defaultValues
	});

	const onSubmit = (data: any) => console.log(data);

	return (
		<Box sx={styles.wrapper}>
			<Avatar sx={styles.avatar}>
				<LockOutlinedIcon />
			</Avatar>

			<Typography component="span" variant="h5" sx={{ mb: 1 }}>
				Sign in
			</Typography>

			<Box component="form" onSubmit={handleSubmit(onSubmit)}>
				<TextField
					margin="normal"
					fullWidth
					id="email"
					label="Email Address"
					name="email"
				/>
				<TextField
					margin="normal"
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
				/>
				<FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/>
				<Button
					fullWidth
					type="submit"
					variant="contained"
					color="secondary"
					sx={styles.button}
				>
					Sign In
				</Button>

				<Box sx={styles.signup} justifyContent="flex-end">
					<Button component={RouterLink} to={ROUTES.REGISTRATION}>
						{"Don't have an account? Sign Up"}
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default LoginForm;
