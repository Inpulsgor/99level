import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'common/hooks/useAuth';
import { ROUTES } from 'types/enum';

interface PrivateRouteProps {
	component: FC;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component }) => {
	const { isAuthenticated } = useAuth();

	return !isAuthenticated ? <Navigate to={ROUTES.LOGIN} /> : <Component />;
};
