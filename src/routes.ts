import { FunctionComponent } from "react";

import Login from "pages/Login/Login";
import Registration from "pages/Registration/Registration";
import Analytics from "pages/Analytics/Analytics";
import { routeNames } from "types/enum";

interface Routes {
  path: routeNames;
  component: FunctionComponent;
}

export const routes: Array<Routes> = [
  { path: routeNames.LOGIN, component: Login },
  { path: routeNames.REGISTRATION, component: Registration },
  { path: routeNames.ANALYTICS, component: Analytics },
  { path: routeNames.NOT_FOUND, component: Analytics },
];
