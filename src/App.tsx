import { FC, useEffect, Suspense } from 'react';
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from 'common/layout';
import { Login, Registration, Analytics, NotFound } from 'pages';
import { Loader } from 'common/components';
import { useLoading } from 'common/hooks/useLoader';
import { useAuth } from 'common/hooks/useAuth';
import { PublicRoute } from 'common/hoc/PublicRoute';
import { PrivateRoute } from 'common/hoc/PrivateRoute';
import { ROUTES } from 'types/enum';

const App: FC = () => {
	const navigate = useNavigate();
	// const dispatch = useDispatch();
	const { isLoading } = useLoading();
	const { accessToken, isAuthenticated } = useAuth();

	useEffect(() => {
		console.log('isAuthenticated', isAuthenticated);
		console.log('accessToken', accessToken);
	}, [accessToken, isAuthenticated, navigate])

  return (
		<Suspense fallback={<Loader isLoading />}>
			{isLoading && <Loader isLoading />}
			<Routes>
				<Route path={ROUTES.LOGIN} element={<Layout />}>
					<Route index element={<Login />} />
					<Route path={ROUTES.LOGIN} element={
						<PublicRoute restricted redirect={ROUTES.ANALYTICS} component={Login} />} />
					<Route path={ROUTES.REGISTRATION} element={
						<PublicRoute restricted redirect={ROUTES.ANALYTICS} component={Registration} />}/>
					<Route path={ROUTES.ANALYTICS} element={<PrivateRoute component={Analytics} />} />
					<Route path={ROUTES.NOT_FOUND} element={<NotFound />}/>
				</Route>
			</Routes>
		</Suspense>
  );
}

export default App;
