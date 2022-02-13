import { FC, useState, MouseEvent } from 'react';
import { AppBar, Container, Toolbar, Box, IconButton, Typography, Menu, MenuItem, Tooltip, Avatar } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { profileOptions } from 'common/static/profile';
import { useAuth } from 'common/hooks/useAuth';
import { HeaderProps } from './Header.types';
import styles from './Header.styles';

const Header: FC<HeaderProps> = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
	const { isAuthenticated } = useAuth();

  const handleOpenUserMenu = ({ currentTarget }: MouseEvent<HTMLElement>) => {
    setAnchorElUser(currentTarget);
  };

  const handleCloseUserMenu = () => setAnchorElUser(null);

	return (
		<AppBar position="static" color="secondary">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography variant="h6" sx={styles.logo}>
						99Level
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton size="large" color="inherit">
							<MenuIcon />
						</IconButton>
					</Box>

					<Typography variant="h6" noWrap sx={styles.logoMobile}>
						99Level
					</Typography>

					{isAuthenticated && <Box sx={{ ml: "auto", flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>

						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{profileOptions.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>}
				</Toolbar>
			</Container>
		</AppBar>
	)
};

export default Header;
