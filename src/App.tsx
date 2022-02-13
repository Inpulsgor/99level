import { FC } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { RootState } from "./redux/rootReducer";
import PageWrapper from 'common/layout/PageWrapper/PageWrapper';
import { routes } from './routes'

const App: FC = () => {
	const dispatch = useDispatch();
	// const { accessToken } = useSelector((state: RootState) => state);

  return (
    <PageWrapper>
			<Routes>
				{routes.map(({ path, component }) => (
					<Route key={path} path={path} element={component}/>
				))}
			</Routes>
		</PageWrapper>
  );
}

export default App;
