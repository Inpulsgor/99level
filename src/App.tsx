import { FC, useEffect, Suspense } from 'react';
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Header, MainWrapper} from 'common/layout';
import Loader from 'common/components/Loader/Loader';
import { useLoading } from 'common/hooks/useLoader';
import { useAuth } from 'common/hooks/useAuth';
// import { ROUTES } from 'types/enum'
import { routes } from './routes';

const App: FC = () => {
	const navigate = useNavigate();
	// const dispatch = useDispatch();
	const { isLoading } = useLoading();
	const { accessToken, isAuthenticated } = useAuth();

	useEffect(() => {
		// if (!isAuthenticated) {
		// 	navigate(ROUTES.LOGIN)
		// }

		console.log('isAuthenticated', isAuthenticated);
		console.log('accessToken', accessToken);
	}, [accessToken, isAuthenticated, navigate])

  return (
		<>
			{isAuthenticated && <Header />}
				<Suspense fallback={<Loader isLoading />}>
					<MainWrapper>
						{isLoading && <Loader isLoading />}
						<Routes>
							{routes.map(({ path, component: Component }) => (
								<Route key={path} path={path} element={<Component />}/>
							))}
						</Routes>
					</MainWrapper>
				</Suspense>
		</>
  );
}

export default App;
