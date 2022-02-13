import { FunctionComponent, lazy } from "react";
import { ROUTES, PAGE_LABEL } from "types/enum";

interface Routes {
  label: PAGE_LABEL;
  path: ROUTES;
  component: FunctionComponent;
}

export const routes: Array<Routes> = [
  {
    label: PAGE_LABEL.LOGIN_PAGE,
    path: ROUTES.LOGIN,
    component: lazy(
      () => import("pages/Login/Login" /* webpackChunkName: "LoginPage" */),
    ),
  },
  {
    label: PAGE_LABEL.REGISTRATION_PAGE,
    path: ROUTES.REGISTRATION,
    component: lazy(
      () =>
        import(
          "pages/Registration/Registration" /* webpackChunkName: "RegistrationPage" */
        ),
    ),
  },
  {
    label: PAGE_LABEL.ANALYTICS_PAGE,
    path: ROUTES.ANALYTICS,
    component: lazy(
      () =>
        import(
          "pages/Analytics/Analytics" /* webpackChunkName: "AnalyticsPage" */
        ),
    ),
  },
  {
    label: PAGE_LABEL.NOT_FOUND_PAGE,
    path: ROUTES.NOT_FOUND,
    component: lazy(
      () =>
        import(
          "pages/NotFound/NotFound" /* webpackChunkName: "NotFoundPage" */
        ),
    ),
  },
];
