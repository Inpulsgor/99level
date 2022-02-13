import { FunctionComponent, lazy } from "react";
import { ROUTES, PAGE_LABEL } from "types/enum";
interface Routes {
  label: PAGE_LABEL;
  path: ROUTES;
  component: FunctionComponent;
	index: boolean;
}

const LoginPage = lazy(
	() => import("pages/Login/Login" /* webpackChunkName: "LoginPage" */),
);

const RegistrationPage = lazy(
	() =>
		import(
			"pages/Registration/Registration" /* webpackChunkName: "RegistrationPage" */
		),
)

const AnalyticsPage = lazy(
	() =>
		import(
			"pages/Analytics/Analytics" /* webpackChunkName: "AnalyticsPage" */
		),
)

const NotFoundPage = lazy(
	() =>
		import(
			"pages/NotFound/NotFound" /* webpackChunkName: "NotFoundPage" */
		),
)

export const routes: Array<Routes> = [
  {
    label: PAGE_LABEL.LOGIN_PAGE,
    path: ROUTES.LOGIN,
    component: LoginPage,
		index: true,
  },
  {
    label: PAGE_LABEL.REGISTRATION_PAGE,
    path: ROUTES.REGISTRATION,
    component: RegistrationPage,
		index: false,
  },
  {
    label: PAGE_LABEL.ANALYTICS_PAGE,
    path: ROUTES.ANALYTICS,
    component: AnalyticsPage,
		index: false,
  },
  {
    label: PAGE_LABEL.NOT_FOUND_PAGE,
    path: ROUTES.NOT_FOUND,
    component: NotFoundPage,
		index: false,
  },
];
